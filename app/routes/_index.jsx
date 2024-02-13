import container_img from "../../public/img/container_bg.png";
import example_makeup from "../../public/img/img-1.jpg";
import example_purses from "../../public/img/img-2.jpg";
import { Link } from "@remix-run/react";

function Index() {
  return (
    <header>
      <div className="flex w-full">
        <div className="w-2/3 flex items-center max-h-svh ">
          <img
            src={container_img}
            alt="bg img"
            className="h-full w-full object- cover"
          />
        </div>
        <div className="w-1/3 bg-primary text-white flex items-center justify-center">
          <div className="px-5 mx-auto">
            <h1 className="text-8xl font-extrabold font-title py-8">
              BAG & MAKEUP SHOP By Janeth
            </h1>
            <Link to="/productos">
              <button className="bg-white text-black rounded-xl py-2 px-6 text-lg w-3/5">
                Ver Catalogo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full my-10 px-8">
        <div className="w-1/2">
          <h1 className="text-6xl font-title font-bold p-4">Lo Popular!</h1>
          <p className="text-xl p-4">
            Vendemos bolsas y maquillaje de la mejor calidad!
          </p>
          <Link to="/productos">
            <button className="m-4 py-3 px-7 bg-secondary rounded-lg">
              Ver mas
            </button>
          </Link>
        </div>
        <div className="w-1/2 flex justify-around">
          <img
            src={example_makeup}
            alt="makeup"
            className="w-2/5 mx-1 rounded-b-lg rounded-t-full "
          />
          <img
            src={example_purses}
            alt="purse"
            className="w-2/5 mx-1 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Index;
