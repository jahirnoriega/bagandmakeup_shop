import { Link, useLocation } from "@remix-run/react";
import header_img from "../../public/img/header_icon.png";

function Header() {
  const location = useLocation();
  return (
    <div className="w-full ">
      <nav className="flex bg-white w-full px-5 py-4">
        <div className="w-1/3 flex ">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? `px-4 py-2 hover:bg-secondary rounded-lg underline`
                : `px-4 py-2 hover:bg-secondary rounded-lg`
            }
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className={
              location.pathname.includes("/productos")
                ? `px-4 py-2 hover:bg-secondary rounded-lg underline`
                : `px-4 py-2 hover:bg-secondary rounded-lg`
            }
          >
            Catalogo
          </Link>
          <Link
            to="/nosotros"
            className={
              location.pathname.includes("/nosotros")
                ? `px-4 py-2 hover:bg-secondary rounded-lg underline-1`
                : `px-4 py-2 hover:bg-secondary rounded-lg`
            }
          >
            Nosotros
          </Link>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <img src={header_img} alt="bagshop" className="h-9" />
        </div>
        <div className="w-1/3 flex items-end justify-end px-4 py-2 hover:bg-secondary rounded-lg">
          &hearts;
        </div>
      </nav>
    </div>
  );
}

export default Header;
