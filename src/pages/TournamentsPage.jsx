import { useEffect, useState } from "react";
import TournamentList from "../components/TournamentList";
import axios from 'axios';

function TournamentsPage() {

    const [tournamentList,setTournamentList] = useState([]);

    const fetchTournaments = async () => {
        const response = await axios.get('http://localhost:3002/tournaments')

        setTournamentList(response.data);        
    }
    useEffect(() => {
        fetchTournaments();
    },[])

    

    return (
        <div>
            <TournamentList tournamentsList={tournamentList}/>
        </div>
    )
}

export default TournamentsPage;