import { useState } from "react";
import CreateTournament from "../components/CreateTournaments";
import axios from 'axios';




function CreateTournamentPage(){


    const [tournaments,setTournament] = useState([]);


    const createTournament = async (title,address,date) => {


        const response = await axios.post('http://localhost:3002/tournaments',{
            title,
            address,
            date
        });
        
        const updatedTournaments = [
            ...tournaments,
            response.data
        ]

        setTournament(updatedTournaments);
    } 


    return (
        <div>
            <CreateTournament onCreate={createTournament}/>
        </div>
    )

}


export default CreateTournamentPage;