import Button from "../Button";
import { Link } from "react-router-dom";
import { FormattedMessage  } from 'react-intl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";


function ShowTournament({tournament, onDelete}) {

  const {auth} = useAuth();

  const handleDelete = async () => {
    onDelete(tournament.id);
  }


    return (
      <div className="border border-gray-200 rounded-xl max-w-xs overflow-hidden shadow-lg bg-white m-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition duration-500 hover:scale-105 hover:shadow-xl relative">
          <div className="flex flex-col justify-between h-full p-4 ">
              <div className="font-bold text-3xl mb-2 truncate text-center">{tournament.name}</div>
                <img className="w-full h-auto mb-2 rounded-lg" src={tournament.image} alt="" />
                <p className=" font-bold text-2xl text-gray-700 text-center">{tournament.address}</p>
                <div className="flex flex-col">
                  <p className="text-gray-700 text-base text-center"> <FormattedMessage id="FechaInicioCard"/> {tournament.date}</p>
                  <p className="text-gray-700 text-base text-center"> <FormattedMessage id="FechaFinCard"/> {tournament.dateEnd}</p>
                </div>
                <div className="text-center">
                  <Link to={`${tournament.id}`}>
                    <Button success marginTop outline rounded><FormattedMessage id="Detalles"/></Button>
                  </Link>
                </div>
            { auth?.roles === 'superadmin' ? (
                <div className="absolute top-1 right-1">
                  <Button del rounded onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTimes} className="text-1xl"/>
                  </Button>
                </div>
            ) : (
              <div></div>
            )}
          
          </div>

      </div>
    )
}

export default ShowTournament;