import type { Metadata } from "next";
import { interfont } from "./fonts/fonts";
import "bootstrap/dist/css/bootstrap.min.css" 
import "./globals.css";

 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interfont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
