import Register from '../components/Register';
import TurboImage from '../img/LogoTurboBet.png'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";

function RegisterPage() {

    return (
        <div className="flex w-full h-screen">

            <div className="w-full flex items-center justify-center lg:w-1/2 bg-green-100 ">
                <Register />
            </div>


            <div className="hidden lg:flex flex-col w-1/2 items-center justify-center h-full">
                
                <div className='animate-pulse 1s cubic-bezier(0, 0, 0.2, 1) infinite'>
                    <img src={TurboImage} className="w-80 h-auto" alt="Example"></img> 
                </div>
                <div className='flex mt-20 space-x-40'>
                    <a href="https://www.instagram.com/turbobet_" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-6xl hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61554840969562" target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebookCircular className="text-6xl hover:scale-110  transition duration-300" />
                    </a>
                </div>
            
            </div>


        </div>
    )
}

export default RegisterPage;