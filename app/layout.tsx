import './globals.css'

export const metadata = {
  title: 'Studio — Web Design & Development',
  description: 'Modern websites for modern brands',
}

export default function RootLayout({
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