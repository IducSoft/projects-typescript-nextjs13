"use client"

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}