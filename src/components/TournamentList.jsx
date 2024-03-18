import ShowTournament from "./ShowTournament";


function TournamentList({tournamentsList}){

    const renderedTournaments = tournamentsList.map((tournament) => {
       return <ShowTournament key={tournament.id} tournament={tournament}/>
    })

    return (
        <div className="flex flex-wrap h-auto bg-gray-100">
            {renderedTournaments}
        </div>
    )

}

export default TournamentList;