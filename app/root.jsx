/* eslint-disable react/prop-types */
import {
  Meta,
  Links,
  Outlet,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import Header from "./components/header";
import style from "./styles/index.css";
import icon from "../public/img/icon.png";
import Footer from "./components/footer";

export function meta() {
  return [
    {
      charset: "utf-8",
      title: "Bag & MakeUp Shop",
      viewport: "width=device-width, initial-scale=1.0",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: style,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap",
    },
    { rel: "shortcut icon", href: icon },

    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap",
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-janeth">
        <Header />
        {children}
        <Footer />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError;
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p>
          {error.status} {error.statusText}
        </p>
      </Document>
    );
  }
}
