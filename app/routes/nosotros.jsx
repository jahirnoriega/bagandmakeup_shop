import icon from "../../public/img/icon.png";
import janeth from "../../public/img/leticia.jpg";

function Nosotros() {
  return (
    <div className="p-10">
      <div className="flex px-8 mb-16">
        <div className="w-3/4">
          <h1 className="text-4xl font-title p-8 font-bold ">
            Sobre Bag & Makeup Shop
          </h1>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio assumenda mollitia eaque, aliquam temporibus ad. Saepe ad
            undealiquid eos soluta ut, vero fugit beatae delectus? Excepturi,
            unde ratione. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cupiditate voluptates exercitationem possimus dicta pariatur.
            Eveniet voluptatibus inventore quibusdam odit fugit dolorem dolor
            eos, dolore possimus, recusandae quasi expedita, vero optio.
          </p>
        </div>
        <div className="w-1/6">
          <img src={icon} alt="logo" />
        </div>
      </div>
      <div className="flex px-8 mb-16">
        <div className="w-1/6 mr-12">
          <img src={janeth} alt="logo" className="rounded-full " />
        </div>
        <div className="w-3/4 flex flex-col justify-end">
          <h1 className="text-4xl font-title p-8 font-bold ">Sobre mi</h1>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio assumenda mollitia eaque, aliquam temporibus ad. Saepe ad unde
            aliquid eos soluta ut, vero fugit beatae delectus? Excepturi, unde
            ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate voluptates exercitationem possimus dicta pariatur.
            Eveniet voluptatibus inventore quibusdam odit fugit dolorem dolor
            eos, dolore possimus, recusandae quasi expedita, vero optio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
