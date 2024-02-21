import Login from '../components/Login';
import TurboImage from '../img/LogoTurboBet.png'

function LoginPage() {

    return (
        <div className="flex w-full h-screen">

            <div className="w-full flex items-center justify-center lg:w-1/2 bg-gray-200 ">
                <Login />
            </div>

            <div className="hidden lg:flex w-1/2 items-center justify-center h-full bg-gray-200 animate-pulse">
                
                   <img src={TurboImage} alt="Example"></img> 
                
            </div>

        </div>
    )
}

export default LoginPage;