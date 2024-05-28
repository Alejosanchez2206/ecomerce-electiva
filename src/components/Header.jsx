import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import logout from "../assets/logout.svg"
import user from "../assets/user.svg"
import Navbar from "./Navbar"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
function Header() {
    const [menuOpened, setMenuOpened] = useState(false)

    const toggleMenu = () => {
        setMenuOpened(!menuOpened)
    }

    return (
        <header className="fixed top-0 left-0 m-auto  w-full bg-white ring-1  ring-slate-900/5 z-50">
            <div className="px-4 flexBetween py-3 max-xs:px-2">
                {/* logo */}
                <div>
                    <Link>
                        <img src={logo} alt="logo_ecommerce" height={66} width={88} />
                    </Link>
                </div>
                {/* navbar desktop*/}
                <Navbar containerStyles={
                    `hidden md:flex gap-x-5 xl:gap-x-10 medium-15 
                `} />

                {/* navbar mobile*/}
                <Navbar containerStyles={
                    `${menuOpened ?
                        "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                        :
                        "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
                    } 
                `} />
                {/* buttons */}
                <div className="flexBetween sm:gap-x-3 bold-16">
                    {!menuOpened ? (
                        <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <MdClose
                            className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full"
                            onClick={toggleMenu}
                        />
                    )}
                    <div className="flexBetween sm:gap-x-3">
                        <NavLink to={'cart-page'}
                            className={"flex"}
                        >
                            <AiOutlineShoppingCart className={"p-1 h-8 w-8 ring-slate-900/30 rounded-full flexCenter hover:text-secondary ring-1"} />
                            <span className="relative flexCenter h-5 w-5 bg-secondary rounded-full text-white medium-14 -top-2">0</span>
                        </NavLink>
                        {/* <NavLink to={'logout'}
                            className={"btn_secondary_rounded flexCenter gap-x-2 medium-15"}
                        >
                           <img src={logout} alt="logout" height={19} width={19} />Logout
                        </NavLink> */}
                        <NavLink to={'login'}
                            className={"btn_secondary_rounded flexCenter gap-x-2 medium-15"}
                        >
                           <img src={user} alt="user" height={19} width={19} />Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header