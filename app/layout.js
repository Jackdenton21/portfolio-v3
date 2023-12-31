import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jack Denton Portfolio",
  description: "Built by Jack Denton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
  rel="stylesheet"
/>

      </head>


      <body>
        {children}
        <Analytics />

        <footer className="text-center py-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Developed using Next.JS and
            TailWind CSS. Deployed with Vercel.{" "}
          </p>
        </footer>
      </body>
    </html>
  );
}
