import container_img from "../../public/img/container_bg.png";
import example_makeup from "../../public/img/img-1.jpg";
import example_purses from "../../public/img/img-2.jpg";
import { Link } from "@remix-run/react";

function Index() {
  return (
    <div>
      <div className="lg:flex ">
        <img
          src={container_img}
          alt="bg img"
          className="lg:h-[550px] object-cover rounded-2xl lg:w-2/3 w-full"
        />
        <div className="lg:w-1/3 lg:px-9 px-6  text-black items-center justify-center">
          <h1 className="lg:text-7xl text-5xl font-extrabold font-title py-10">
            Bag & Makeup Shop By Janeth
          </h1>
          <Link to="/productos">
            <button className="bg-primary text-white rounded-xl p-2 text-lg w-1/2 lg:w-3/5">
              Ver Catalogo
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:flex w-full my-10 lg:px-9 px-6 ">
        <div className="lg:w-1/2">
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
        <div className="lg:w-1/2 flex justify-around">
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
    </div>
  );
}

export default Index;
