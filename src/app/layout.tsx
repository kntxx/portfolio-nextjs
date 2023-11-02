import NavContextProvider from "./components/NavContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kent Gesoro",
  description: "Minimalist Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavContextProvider>
      <html lang="en">
        <body className="bg-bgcol font-neue">{children}</body>
      </html>
    </NavContextProvider>
  );
}
