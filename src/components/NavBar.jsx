import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function NavBar() {

    let Links = [
        {name:"Home", link:"/"},
        {name:"Torneos", link:"/"},
        {name:"Conocenos", link:"/"},
        {name:"Contactanos", link:"/"},
    ]

    let [open,setOpen] = useState();

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">

                <div className="font-bold text-2x1 cursor-pointer flex items-center font-Poppins text-gray-800">
                    <span className="text-3x1 text-indigo-600 mr-1 pt-2">
                        <ion-icon name="football-outline"></ion-icon>
                    </span>
                    TurboBet
                </div>

                <div onClick={() => setOpen(!open)} className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={ open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 
                absolute md:static bg-white md:z-auto z-[-1] left-0 
                w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {
                        Links.map((link) => {
                        return (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-5">
                                <Link to={link.link} href={link.link} className="text-gray-800 hover:text-gray-300 duration-500">{link.name}</Link>
                            </li>
                        ) })
                    }
                    <div className="flex">
                        <Link to={"/login"}>
                            <Button success nvgtbutton rounded>Crear Cuenta</Button>
                        </Link>

                        <Link to={"/register"}>
                            <Button success nvgtbutton rounded>Registrarse</Button>
                        </Link>
                    </div>
                </ul>

            </div>

        </div>
    )
}

export default NavBar;