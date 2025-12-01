'use client'

import { useEffect } from 'react'

export function BlogContent({ content }: { content: string }) {
  useEffect(() => {
    // Open external links in new tab
    const links = document.querySelectorAll('.prose a')
    links.forEach((link) => {
      const anchor = link as HTMLAnchorElement
      if (anchor.hostname !== window.location.hostname) {
        anchor.setAttribute('target', '_blank')
        anchor.setAttribute('rel', 'noopener noreferrer')
      }
    })
  }, [content])

  return (
    <div
      className="prose prose-lg mb-8"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
