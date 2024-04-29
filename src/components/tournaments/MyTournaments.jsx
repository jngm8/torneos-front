import ShowSubscribedTournaments from "./ShowSubscribedTournaments";


function MyTournaments({tournamentsList}){

    const renderedTournaments = tournamentsList.map((tournament) => {
       return <ShowSubscribedTournaments key={tournament.id} tournament={tournament}/>
    })

    return (
        <div className="flex flex-wrap h-auto bg-gray-100">
            {renderedTournaments}
        </div>
    )

}

export default MyTournaments;
