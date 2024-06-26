import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import "@/app/globals.css";

export const metadata = {
  title: "ClickUp™ | One app to replace them all",
  description: "Generated by create next app",
  icons: ["/images/clicklogo.svg"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
