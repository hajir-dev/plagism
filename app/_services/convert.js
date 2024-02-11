export async function convertText(text) {
  const response = await fetch("/api/convert", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Failed to convert text");
  }

  return response.json();
}
