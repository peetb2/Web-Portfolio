// Cloudflare Pages Function: /api/chat
// Secure serverless backend endpoint for Gemini API
export async function onRequestPost(context) {
  try {
    const { prompt } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY environment variable is not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const candidateModels = [
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-2.0-flash',
      'gemini-flash-latest'
    ];

    for (const model of candidateModels) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return new Response(JSON.stringify({ text: text.trim() }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }
        }
      } catch (e) {
        // continue to next fallback model
      }
    }

    return new Response(
      JSON.stringify({ error: 'Failed to generate response from Gemini API.' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
