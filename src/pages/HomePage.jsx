import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';
import useAuth from "../hooks/useAuth";
import { Fragment } from "react";

function Home() {

    const {op} = useAuth();

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className='mt-20'>
                {op ? 
                (<Fragment/>)
                :
                (<Carousel  big/>)
                }
            </div>
        </div>

    )
}

export default Home;