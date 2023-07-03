
import StyledComponentsRegistry from "@/registry";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Providers } from "@/redux/provider";
import Footer from "@/components/Footer/Footer";
//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "EventStudio",
  description: "Organización de eventos",
};
 
 function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
     <Providers>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer/>
        </StyledComponentsRegistry>
       </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
