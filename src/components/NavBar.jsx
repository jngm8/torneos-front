import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { FormattedMessage, useIntl  } from 'react-intl';
import  LogoImage  from "./LogoImage";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";


function NavBar() {

    const intl = useIntl();
    const {auth} = useAuth();


    let Links = [
        {name: intl.formatMessage({ id: 'Nav1' }), link:"/"},
        {name:intl.formatMessage({ id: 'Nav2' }), link:"/"},
        {name: intl.formatMessage({ id: 'Nav3' }), link:"/admin"},
        {name: intl.formatMessage({ id: 'Nav5' }), link:"/"}
    ]

    let [open,setOpen] = useState();

    return (
        <div className="shadow-md w-full fixed top-0 left-0 font-squada-one">
            <div className="md:flex flex items-center justify-between bg-white py-4 md:px-10 px-7">

                <div className="font-bold text-2x1 cursor-pointer flex items-center font-Poppins text-gray-800">
                    <span className="text-3x1 text-indigo-600 mr-1 pt-2">
                        <LogoImage small/>
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className="text-3x1 absolute right-8 top-5 cursor-pointer md:hidden">
                    <ion-icon style={{ fontSize: '1.9rem' }} name={ open ? 'close' : 'menu'}></ion-icon>
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

                    <div>
                        {auth?.username ? (
                        <div className="ml-5 flex items-center text-lg"> <CgProfile className="mr-1" /> {auth.username}</div>
                        ) : (
                        <Link to="/login">
                            <Button nvgtbutton rounded><FormattedMessage id="Login"/></Button>
                        </Link>
                        )}
                    </div>


                </ul>

            </div>

        </div>
    )
}

export default NavBar;