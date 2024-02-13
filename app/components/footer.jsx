import { Link, useLocation } from "@remix-run/react";

function Footer() {
  const location = useLocation();

  return (
    <div className=" bg-fourth">
      <div className="w-full lg:px-20 px-10 py-10 lg:flex">
        <div className="lg:w-1/3 flex flex-col justify-start pb-6">
          <h1 className="text-2xl font-title pb-3 text-white">
            Redes Sociales
          </h1>
          <Link
            to="https://www.facebook.com/profile.php?id=100094637435677"
            className=" hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`"
          >
            Facebook
          </Link>
          <Link className=" hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`">
            +52 614 242 8626
          </Link>
          <Link
            to="https://www.instagram.com/bagsop_byjn/"
            className=" hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`"
          >
            Instagram
          </Link>
        </div>
        <div className="w-1/3 flex flex-col justify-start pb-3">
          <h1 className="text-2xl font-title pb-3 text-white">Navegacion</h1>{" "}
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? `bg-white text-black hover:text-black rounded-lg underline-1 py-1 px-2 mr-4 mt-2`
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`
            }
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className={
              location.pathname.includes("/productos")
                ? `bg-white text-black hover:text-black rounded-lg underline-1 py-1 px-2 mr-4 mt-2 `
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`
            }
          >
            Catalogo
          </Link>
          <Link
            to="/nosotros"
            className={
              location.pathname.includes("/nosotros")
                ? `bg-white text-black hover:text-black rounded-lg underline-1 py-1 px-2 mr-4 mt-2 `
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2 `
            }
          >
            Nosotros
          </Link>
        </div>
        <div className="lg:w-1/3 pb-3">
          <h1 className="text-2xl font-title pb-3 text-white">
            Nuestra Vision
          </h1>
          <p className=" hover:bg-white text-white hover:text-black rounded-lg py-1 px-2 mr-4 mt-2`">
            Nuestra visión en Bag & Makeup Shop By Janeth es ser la elección
            preferida de quienes buscan bolsas y maquillaje de calidad a precios
            accesibles, ofreciendo un servicio excepcional y una experiencia de
            compra única.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-center text-white px-8 pb-8">
        <h1>
          &copy; Todos los derechos reservados {new Date().getFullYear()} Bag &
          Makeup Shop by Janeth Noriega
        </h1>
      </div>
    </div>
  );
}

export default Footer;
