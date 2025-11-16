import '../globals.css'

export const metadata = {
  title: 'SMM Solutions Dashboard - Login',
  description: 'SMM Solutions login page',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
