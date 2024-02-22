import Button from "./Button";

function NavBar() {

    let Links = [
        {name:"Home", link:"/"},
        {name:"Torneos", link:"/"},
        {name:"About", link:"/"},
        {name:"Login", link:"/"},
        {name:"Register", link:"/"},

    ]

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">

                <div className="font-bold text-2x1 cursor-pointer flex items-center font-Poppins text-gray-800">
                    <span className="text-3x1 text-indigo-600 mr-1 pt-2">
                        <ion-icon name="football-outline"></ion-icon>
                    </span>
                    TurboBet
                </div>

                <ul className="md:flex md:items-center">
                    {
                        Links.map((link) => {
                        return (
                            <li key={link.name} className="md:ml-8 text-xl">
                                <a href={link.link} className="text-gray-800 hover:text-gray-300 duration-500">{link.name}</a>
                            </li>
                        ) })
                    }
                    <Button nvgtbutton rounded>Get Started</Button>
                </ul>

            </div>

        </div>
    )
}

export default NavBar;