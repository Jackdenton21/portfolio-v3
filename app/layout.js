import './globals.css'


export const metadata = {
  title: 'Jack Denton Portfolio',
  description: 'Built by Jack Denton',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      
      <footer className="text-center py-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Developed using Next.JS and TailWind CSS. Deployed with Vercel. </p>
      </footer>

      </body>

    </html>
  )
}
