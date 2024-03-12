import NavBar from "../components/NavBar";
import Carousel from '../components/Carousel';

function Home() {

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className='mt-20'>
                <Carousel  big/>
            </div>
        </div>

    )
}

export default Home;