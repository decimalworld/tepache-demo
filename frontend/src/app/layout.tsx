import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
          TEPACHE: A fermented Mexican drink made from fresh pineapples! - De La Calle
        </title>
      </head>
      <body className="min-w-[1000px] bg-orange-100">
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
