'use client'
import { useEffect, useState } from 'react'

export default function InstagramEmbed({ url }: { url: string }) {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/instagram-oembed?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => setHtml(data.html))
  }, [url])

  if (!html) return null

  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
