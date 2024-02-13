import icon from "../../public/img/icon.png";
import janeth from "../../public/img/leticia.jpg";

function Nosotros() {
  return (
    <div className="lg:p-10 p-4">
      <div className="lg:flex p-8 mb-10">
        <div className="lg:w-1/6 lg:m-auto flex justify-center align-middle ">
          <img src={icon} alt="logo " className="lg:w-full h-[200px]" />
        </div>
        <div className="lg:w-3/4 flex flex-col justify-end">
          <h1 className="text-4xl font-title p-8 font-bold ">
            Sobre Bag & Makeup Shop
          </h1>
          <p className="lg:w-3/4">
            Descubre en Bag & Makeup Shop By Janeth una amplia gama de bolsas y
            maquillaje genérico y de marca a precios asequibles. Nos apasiona
            ofrecer productos de calidad que se adapten a tu estilo y
            presupuesto. Nuestro compromiso es brindarte una experiencia de
            compra excepcional, donde encuentres todo lo que necesitas para
            lucir increíble. ¡Únete a nosotros y descubre tu estilo único con
            Bag & Makeup Shop By Janeth!
          </p>
        </div>
      </div>
      <div className="lg:flex p-8 mb-10">
        <div className="lg:w-1/6 lg:m-auto flex justify-center align-middle ">
          <img
            src={janeth}
            alt="logo "
            className="lg:w-full h-[200px] rounded-full"
          />
        </div>
        <div className="lg:w-3/4 flex flex-col justify-end">
          <h1 className="text-4xl font-title p-8 font-bold ">Sobre mi</h1>
          <p className="lg:w-3/4">
            Soy Janeth Noriega, emprendedora originaria de Chihuahua, con una
            sólida experiencia en el negocio gracias a la tienda de mi familia.
            Mi pasión por la satisfacción del cliente impulsa cada aspecto de
            Bag & Makeup Shop By Janeth. Con un enfoque centrado en ofrecer
            productos de calidad y un servicio excepcional, estoy comprometida a
            brindarte la mejor experiencia de compra. ¡Bienvenido a nuestra
            comunidad!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
