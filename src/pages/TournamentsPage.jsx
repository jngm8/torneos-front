import { useEffect, useState } from "react";
import TournamentList from "../components/tournaments/TournamentList";
import axios from 'axios';

function TournamentsPage() {

    const [tournamentList,setTournamentList] = useState([]);

    const fetchTournaments = async () => {

        if(navigator.onLine){
            const response = await axios.get('http://localhost:3001/tournaments')
            setTournamentList(response.data);
            localStorage.setItem("tournaments",JSON.stringify(response.data))
        } else {
            if(localStorage.getItem("tournaments")){
                setTournamentList(JSON.parse(localStorage.getItem("tournaments")));
            }
        }
     
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