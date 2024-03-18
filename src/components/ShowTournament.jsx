

function ShowTournament({tournament}) {


    return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate">{tournament.title}</div>
          <p className="text-gray-700 text-base">{tournament.address}</p>
          <p className="text-gray-700 text-base">{tournament.date}</p>
        </div>
      </div>
    )
}

export default ShowTournament;