import { db } from "@vercel/postgres";

function getCurrentTime(): string {
  return new Date().toISOString();
}

function convertText(text: string): string {
  return text.replace(/i/g, "і").replace(/o/g, "о");
}

async function saveDataToDatabase(text: string): Promise<void> {
  const currentTime = getCurrentTime();

  const query = `
    INSERT INTO posted_data (original_text, submitted_at)
    VALUES ($1, $2)
  `;

  await db.query(query, [text, currentTime]);
}

export async function POST(request: Request) {
  try {
    let body = await request.json();
    let text: string = body.text;

    // Lakukan penggantian huruf
    const convertedText = convertText(text);

    // Simpan data ke dalam database PostgreSQL
    await saveDataToDatabase(text);

    return new Response(JSON.stringify({ result: convertedText }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan server" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
}
