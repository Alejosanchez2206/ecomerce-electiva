import { MdOutlineLocalOffer, MdStar } from "react-icons/md"
import { NavLink } from "react-router-dom"

function Hero() {
    return (
        <section className="bg-hero bg-center bg-no-repeat bg-cover h-screen w-full">
            <div className="max_padd_container relative top-32 xs:top-52">
                <h1 className="h1 capitalize max-w-[37rem]">Moda & Estilo</h1>
                <p className="text-gray-50 regular-16 mt-16 max-w-[33rem]">
                    Descubre en Moda & Estilo una colección diversa y cautivadora de prendas para
                    todos los gustos y ocasiones. Nuestra tienda es el destino perfecto para aquellos
                    que buscan calidad y tendencias actuales. Desde piezas básicas hasta las últimas
                    novedades en moda, ofrecemos una experiencia de compra única que realza tu individualidad
                    y estilo personal. Visítanos y transforma tu guardarropa con nosotros.
                </p>
                <div className="flexStart !items-center gap-x-4 my-10">
                    <div className="!regular-24 flexCenter gap-x-3">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                    <div className="bold-16 sm:bold-20">17K <span className="regular-16 sm:regular-20">Calificaciónes</span></div>
                </div>
                <div className="max-xs:flex-col flex gap-2">
                    <NavLink className={'btn_dark_rounded flexCenter'}>Shop Now</NavLink>
                    <NavLink className={'btn_dark_rounded flexCenter gap-x-2'}><MdOutlineLocalOffer className="text-2xl" />Offers</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Hero