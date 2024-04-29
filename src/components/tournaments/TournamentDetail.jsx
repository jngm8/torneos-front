import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { Link } from "react-router-dom";


function TournamentDetail() {

    const {tournamentId} = useParams();

    const [tournament, setTournament] = useState({});

    const fetchTournamentsDetail = async () => {
        try {
            const response = await axios.get("http://localhost:3001/tournaments/" + tournamentId)
            setTournament(response.data);
        } catch (err) {
            console.error("Error: " + err)
        }
        
    }

    useEffect( () => {
        fetchTournamentsDetail();
    }, [] )

    return (
        <div className="w-full m-auto py-2 px-4 relative group m-w-[1000px] h-[300px] font-squada-one">
            <div style={{backgroundImage: `url(${tournament.image})`}} className='w-full h-full rounded-2xl bg-center bg-cover'></div>
                <div className="flex flex-col justify-between text-4xl">
                    <div className="flex">
                        <div className="text-3xl text-gray-700 mr-5 mt-1">
                            Name: 
                        </div>
                        {tournament.name}
                    </div>

                    <div className="flex">
                        <div className="text-3xl text-gray-700 mr-5 mt-1">
                            Date:
                        </div>
                        {tournament.date}
                    </div>

                    <div className="flex">
                        <div className="text-3xl text-gray-700 mr-5 mt-1">
                            Location:
                        </div>
                         {tournament.address}
                    </div>
     
                </div>

                <div className="bg-slate-200 flex text-2xl rounded-lg">
                    <div className="text-3xl text-gray-700 mr-5 mt-1">
                         Description:
                    </div>
                    {tournament.description}
                </div>

                <div className="text-2xl items-center text-center">
                   <Link to={`/tournaments/subscribe/${tournament.id}`}>
                        <Button success marginTop outline rounded>Inscribirme</Button>
                   </Link> 
                </div>
        </div>
    )
}

export default TournamentDetail;