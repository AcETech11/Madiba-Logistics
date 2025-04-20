import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Madiba Cargo Logistics",
  description: "Logistics Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
