import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";

function getCurrentTime(): string {
  return new Date().toISOString();
}

function convertText(text: string): string {
  return text.replace(/i/g, "і").replace(/o/g, "о");
}

function saveDataToFile(text: string): void {
  const currentTime = getCurrentTime();

  const filePath = "data/posted_data.json";
  let existingData = [];
  if (existsSync(filePath)) {
    const jsonData = readFileSync(filePath, "utf8");
    existingData = JSON.parse(jsonData);
  }

  const newData = { originalText: text, submittedAt: currentTime };
  existingData.push(newData);

  // Pastikan direktori 'data' ada
  const dataDir = "data";
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir);
  }

  // Simpan seluruh data ke dalam file .json
  const jsonData = JSON.stringify(existingData);
  writeFileSync(filePath, jsonData);
}

export async function POST(request: Request) {
  try {
    let body = await request.json();
    let text: string = body.text;

    // Lakukan penggantian huruf
    const convertedText = convertText(text);

    // Simpan data ke dalam file .json
    saveDataToFile(text);

    return new Response(JSON.stringify({ result: convertedText }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
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
