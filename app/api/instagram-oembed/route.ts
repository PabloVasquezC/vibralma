// app/api/instagram-oembed/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  const res = await fetch(
    `https://graph.facebook.com/v18.0/instagram_oembed?url=${url}&omitscript=true`
  )

  const data = await res.json()
  return Response.json(data)
}
