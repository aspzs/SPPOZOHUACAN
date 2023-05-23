import styles from "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Link from 'next/link';
import Button from "/components/Button";
import Image from 'next/image';
import Footer from "../components/Footer";



const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <div className="icono">
      <Link href="/">
                    <Image src="/logo.png"
                           alt="Icono :)"
                           width={100}
                           height={100}
                           priority={true}
                           className="icono"
                           >
                    </Image>
              </Link>
      </div>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
