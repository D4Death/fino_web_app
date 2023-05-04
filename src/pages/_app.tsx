import type { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "./components/header";
import AppProvider from "./context/app-context";
import { AuthContextProvider } from "./context/auth-context";
import FlowbiteContext from "./context/flowbite-context";
import { SidebarProvider } from "./context/sidebar-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppProvider>
        <FlowbiteContext>
          <SidebarProvider>
            <Header />
          </SidebarProvider>
          <Component {...pageProps} />
        </FlowbiteContext>
      </AppProvider>
    </AuthContextProvider>
  );
}
