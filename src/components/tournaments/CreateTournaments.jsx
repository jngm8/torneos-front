import { useState } from "react";
import Button from "../Button";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";



function CreateTournament({onCreate}){

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [selectedDate,setselectedDate] = useState("")
    const [description,setDescription] = useState("")
    const [imageUrl,setImageUrl] = useState("")

    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        onCreate(name,address,selectedDate,imageUrl,description);

        setName("");

        setAddress("");

        setselectedDate("");

        setImageUrl("");

        setDescription("");

        setSuccess(true);

    }

    return (
       <>
        {success ? (
                <section>
                    <h1 className='sucmessage'>Inscripcion Exitosa</h1>
                    <p className='flex justify-center items-center mt-2'>
                        <Link to={"/tournaments"}>
                                <Button primary rounded>Ir a torneos creados</Button>
                        </Link>  
                    </p>
                </section>
            ) : (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 font-squada-one">
                    <div className="bg-white rounded-lg p-7 shadow-lg text-center">
                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-col">

                                <label className='text-lg font-medium'>Tournament name</label> 
                                <input 
                                value={name} 
                                onChange={(event) => setName(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 bg-transparent'
                                />

                                <label className='text-lg font-medium'>Tournament Address</label> 
                                <input 
                                value={address} 
                                onChange={(event) => setAddress(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                />

                                <label className='text-lg font-medium'>Image URL</label> 
                                <input 
                                value={imageUrl} 
                                onChange={(event) => setImageUrl(event.target.value)}
                                className='border-2 border-gray-200 rounded-xl p-4 mt-1 bg-transparent'
                                />

                                <label className='text-lg font-medium'>Description</label> 
                                <textarea
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    className='border-2 border-gray-200 rounded-xl p-4 resize-none bg-transparent'
                                    rows="3" // Adjust the number of rows to fit your design
                                />

                                <div className="flex mt-5">
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

                            <Button disabled={!name || !address || !imageUrl || !description || !selectedDate ? true : false}primary marginTop>Submit</Button>

                        </form> 
                    </div>
            </div>
        )}
       </>
    )

} 

export default CreateTournament;