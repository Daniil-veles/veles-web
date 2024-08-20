import type { AppProps } from "next/app";
import "../styles/global.scss";
import { Roboto as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Provider } from "react-redux";
import store from "@/store/store";
import AuthProvider from "@/provider/AuthContext";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div
        className={cn("relative min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </Provider>
  );
}
