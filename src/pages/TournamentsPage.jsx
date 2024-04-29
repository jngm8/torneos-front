import { useEffect, useState } from "react";
import TournamentList from "../components/tournaments/TournamentList";
import axios from 'axios';

function TournamentsPage() {

    const [tournamentList,setTournamentList] = useState([]);

    const fetchTournaments = async () => {
        const response = await axios.get('http://localhost:3001/tournaments')

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