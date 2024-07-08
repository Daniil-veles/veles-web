import type { AppProps } from "next/app";
import "../styles/global.scss";
import { Roboto as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}
    >
      <Component {...pageProps} />
    </div>
  );
}
