import { Link } from "@remix-run/react";
import { moneyFormat } from "../helpers/index";

/* eslint-disable react/prop-types */
function Pieza({ pieza }) {
  const { nombre, precio, marca, url, imagen } = pieza;

  return (
    <Link to={`/producto/${url}`}>
      <div className="shadow border-grey rounded-xl p-3">
        <img
          src={imagen.data[0].attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          className="object-cover w-full h-72 xl:h-80 rounded-xl"
        />
        <p className="text-sm pt-4 text-grey">{marca}</p>
        <h1 className="text-lg font-bold">{nombre}</h1>
        <h2 className="text-lg">{moneyFormat(precio)}</h2>
      </div>
    </Link>
  );
}

export default Pieza;
