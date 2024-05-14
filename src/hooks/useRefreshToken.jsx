import axios from 'axios';
import useAuth from './useAuth';

function useRefreshToken(){

    const {auth, setAuth} = useAuth();

    const refresh = async () => {

        const response = await axios.post('http://localhost:3001/auth/refresh', 
            {}, // an empty object for the data payload
            {
                headers: { 
                    'Authorization': `Bearer ${auth?.refreshToken}` 
                },
                withCredentials: true
            }
        );
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response?.data?.accessToken);
            return({
                ...prev,
                accessToken: response?.data?.refreshToken
        })
        })

        return response?.data?.accessToken;
    }

    return refresh;
}

export default useRefreshToken; 