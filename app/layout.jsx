import React from 'react'
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en" >
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col reddit-sans-regular">
        {children}
      </body>
    </html>
  )
}

export default RootLayout