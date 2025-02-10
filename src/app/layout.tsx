
import "./globals.css";
import { Header } from "../components/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Minha Aplicação</title>
      </head>

      <body className={`antialiased`}>

        <Header />

        {children}

      </body>
    </html>
  );
}
