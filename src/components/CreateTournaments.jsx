import { useState } from "react";
import Button from "./Button";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function CreateTournament({onCreate}){

    const [title,setTitle] = useState("");
    const [address,setAddress] = useState("");
    const [selectedDate,setselectedDate] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault();

        onCreate(title,address,selectedDate);

        setTitle("");

        setAddress("");

        setselectedDate("");

    }

    return (
        <div className="font-squada-one">
           <form onSubmit={handleSubmit}>

            <div className="flex flex-col">

                <label className='text-lg font-medium'>Tournament title</label> 
                <input 
                value={title} 
                onChange={(event) => setTitle(event.target.value)}
                className='w-min border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                />

                <label className='text-lg font-medium'>Tournament Address</label> 
                <input 
                value={address} 
                onChange={(event) => setAddress(event.target.value)}
                className='w-min border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                />

                <div className="flex mt-10">
                    <label className='text-lg font-medium mr-5'>Tournament Date: </label> 

                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setselectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        className="bg-green-100"
                        />
                
                </div>

            
            </div>

            <Button primary marginTop>Submit</Button>

            </form> 
        </div>
    )

} 

export default CreateTournament;