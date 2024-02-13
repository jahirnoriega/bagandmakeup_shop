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
    <main className="lg:p-10 p-6">
      <h2 className="font-title text-4xl font-bold lg:p-8 p-4">
        Nuestra Coleccion
      </h2>
      {maquillaje?.length && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-4">
          {maquillaje.map((pieza) => (
            <Pieza key={pieza?.id} pieza={pieza?.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Productos;
