
export async function POST(request: Request) {
    try {
        let body = await request.json();
        let text: string = body.text;

        // Lakukan penggantian huruf
        const convertedText = text.replace(/i/g, 'і').replace(/o/g, 'о')

        return new Response(JSON.stringify({ result: convertedText }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 201
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Terjadi kesalahan server' }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 500
        });
    }
}
