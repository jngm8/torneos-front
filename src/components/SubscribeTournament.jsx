import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

function SubscribeTournament() {

    const {tournamentId} = useParams();
    const {auth} = useAuth();

    const [category,setCategory] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault();
        axios.post("http://localhost:3001/users/"+auth?.id+"/tournaments/"+tournamentId,{
            category
        }).then(response => {console.log("Created Successfully: " + response.data);
        }).catch(error => {console.error("error:" + error)
        })
    }

    return (
        <div>     
            <form onSubmit={handleSubmit}>
                <label className='text-lg font-medium'>Select Category: </label> 
                <input 
                onChange={(event) => setCategory(event.target.value)}
                className='w-min border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                />
            </form>     
        </div>
    )
}


export default SubscribeTournament;