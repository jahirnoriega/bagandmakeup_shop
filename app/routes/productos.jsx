import { useLoaderData } from "@remix-run/react";
import { getMaquillaje } from "../models/maquillaje.server";
import Pieza from "../components/pieza";

export async function loader() {
  const data = await getMaquillaje();
  return data.data;
}

function Productos() {
  const maquillaje = useLoaderData();

  return (
    <main className="p-10">
      <h2 className="font-title text-4xl font-bold p-8">Nuestra Coleccion</h2>
      {maquillaje?.length && (
        <div className="grid md:grid-cols-4 xl:grid-cols-5  gap-5 px-16">
          {maquillaje.map((pieza) => (
            <Pieza key={pieza?.id} pieza={pieza?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Productos;
