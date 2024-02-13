import { Link, useLocation } from "@remix-run/react";

function Footer() {
  const location = useLocation();

  return (
    <div className=" bg-fourth">
      <div className="w-full px-20 py-10 flex">
        <div className="w-1/3 ">
          <h1 className="text-2xl font-title pb-3 text-white">
            Redes Sociales
          </h1>
          <p className="text-white py-1 px-2">Facebook</p>
          <p className="text-white py-1 px-2">WhatsApp</p>
          <p className="text-white py-1 px-2">Instagram</p>
        </div>
        <div className="w-1/3 flex flex-col justify-start">
          <h1 className="text-2xl font-title pb-3 text-white">Navegacion</h1>{" "}
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? ` hover:bg-white text-white hover:text-black rounded-lg underline py-1 px-2`
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2`
            }
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className={
              location.pathname.includes("/productos")
                ? ` hover:bg-white text-white hover:text-black rounded-lg underline py-1 px-2`
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2`
            }
          >
            Catalogo
          </Link>
          <Link
            to="/nosotros"
            className={
              location.pathname.includes("/nosotros")
                ? ` hover:bg-white text-white hover:text-black rounded-lg underline-1 py-1 px-2`
                : ` hover:bg-white text-white hover:text-black rounded-lg py-1 px-2`
            }
          >
            Nosotros
          </Link>
        </div>
        <div className="w-1/3 ">
          <h1 className="text-2xl font-title pb-3 text-white">
            Nuestra Vision
          </h1>
          <p className="text-white py-1 px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            facilis animi sapiente hic natus, consequuntur iusto veniam deserunt
            quisquam distinctio numquam sed enim dolorum sit eum molestias,
            debitis similique nostrum!
          </p>
        </div>
      </div>
      <div className="flex justify-center text-white pb-4">
        <h1>
          &copy; Todos los derechos reservados {new Date().getFullYear()} Bag &
          Makeup Shop by Janeth
        </h1>
      </div>
    </div>
  );
}

export default Footer;
