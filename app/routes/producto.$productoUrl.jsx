import { useLoaderData } from "@remix-run/react";
import { moneyFormat } from "../helpers/index";
import { getProducto } from "../models/maquillaje.server";

export function meta({ data }) {
  if (!data) {
    return [
      {
        title: "Producto no encontrado",
        description: `Producto no encontrado`,
      },
    ];
  }
  return [
    {
      title: `Bag&Makeup - ${data.data[0].attributes.nombre}`,
      description: `Producto vendido en Bag&Makeup - ${data.data[0].attributes.nombre}`,
    },
  ];
}
export async function loader({ params }) {
  const { productoUrl } = params;
  const product = await getProducto(productoUrl);

  if (product.data.length === 0) {
    console.log(product.data.length);

    throw new Response("", {
      status: 404,
      statusText: "Producto no encontrado",
    });
  }

  return product;
}

function Producto() {
  const product = useLoaderData();

  const { nombre, precio, descripcion, marca, imagen } =
    product.data[0].attributes;
  const desc = descripcion[0].children[0].text;
  return (
    <div className="md:flex p-10 w-full justify-around">
      <div className="md:w-5/12 flex justify-center align-middle">
        <img
          src={imagen.data[0].attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          className="max-h-[700px] object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <p className="pt-4 text-grey text-lg">{marca}</p>
        <h1 className="font-title text-5xl font-bold my-6">{nombre}</h1>
        <h2 className="text-4xl  ">{moneyFormat(precio)}</h2>
        <p className="my-6 md:w-2/3">{desc}</p>
      </div>
    </div>
  );
}

export default Producto;
