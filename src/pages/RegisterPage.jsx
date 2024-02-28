import Register from '../components/Register';
import TurboImage from '../img/LogoTurboBet.png'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";


function RegisterPage() {

    return (
        <div className="flex w-full h-screen">

            <div className="w-full flex items-center justify-center lg:w-1/2 bg-custom-green">
                <Register />
            </div>


            <div className="hidden lg:flex flex-col w-1/2 items-center justify-center h-full">
                
                <div>
                    <img src={TurboImage} className="w-80 h-auto" alt="Example"></img> 
                </div>

                <div className='flex mt-50 space-x-20 animate-bounce'>
                    <a href="https://www.instagram.com/turbobet_" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-5xl hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61554840969562" target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebookCircular className="text-5xl hover:scale-110  transition duration-300" />
                    </a>

                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="text-5xl hover:scale-110  transition duration-300" />
                    </a>
                </div>
            
            </div>


        </div>
    )
}

export default RegisterPage;