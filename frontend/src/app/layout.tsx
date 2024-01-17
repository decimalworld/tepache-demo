import './globals.css'
import Navbar from './_components/navbar/Navbar' 

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
      <body className="min-w-[1000px]">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
