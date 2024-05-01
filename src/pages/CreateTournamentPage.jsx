import { useState } from "react";
import CreateTournament from "../components/tournaments/CreateTournaments";
import axios from 'axios';
import useAuth from "../hooks/useAuth";




function CreateTournamentPage(){


    const [tournaments,setTournament] = useState([]);

    // For the auth token
    const {auth} = useAuth();

    const createTournament = async (name,address,date,dateEnd,image,description) => {


        try {
            const response = await axios.post('http://localhost:3001/tournaments', {
                name,
                address,
                date,
                dateEnd,
                image,
                description
            }, {
                headers: {
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            });

            const updatedTournaments = [
                ...tournaments,
                response.data
            ]
    
            setTournament(updatedTournaments);
            // Handle successful response
        } catch (error) {
            console.error('Error:', error.response.data);
            // Handle error response
        }
        
        
    } 


    return (
        <div>
            <CreateTournament onCreate={createTournament}/>
        </div>
    )

}


export default CreateTournamentPage;