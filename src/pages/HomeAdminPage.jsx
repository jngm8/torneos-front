import Button from "../components/Button";
import { MdFileUpload } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import LogoImage from '../components/LogoImage';
import useAuth from "../hooks/useAuth";

function HomeAdmin(){

    const {auth} = useAuth();

    return(
        <div className="flex w-full h-screen font-squada-one tracking-2">

            <div className="w-full flex flex-col items-center justify-center lg:w-1/2 bg-custom-green">
            
                <Button primary rounded marginbtm bigLetter><MdFileUpload className="inline"/><span>Crear Torneo</span></Button>
                <Button primary rounded marginbtm bigLetter><TbTournament className="inline" /><span>Mis torneos</span></Button>
                <Button primary rounded marginbtm bigLetter><MdEdit className="inline"/><span></span>Editar perfil</Button>
            </div>

            <div className="hidden lg:flex flex-col w-1/2 items-center justify-center h-full">

                <LogoImage big/>

                <div className="flex text-5xl">
                    Welcome Admin 
                    <div className="ml-3 text-green-500 animate-pulse">{auth?.username}</div>
                </div>
                

            </div>
            
        </div>
    )
}

export default HomeAdmin;