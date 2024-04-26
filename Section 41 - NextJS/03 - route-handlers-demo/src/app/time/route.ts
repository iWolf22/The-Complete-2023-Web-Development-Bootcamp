export const dynamic = "force-dynamic"; // default "auto"

export async function GET() {
    return Response.json({
        time: new Date()
    })
}