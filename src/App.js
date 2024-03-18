import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Unauthorized from "./pages/UnauthorizedPage";
import Layout from './components/Layout';
import {  IntlProvider } from 'react-intl';
import localEs from './locales/es.json';
import localEn from './locales/en.json';
import {Routes, Route} from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import HomeAdmin from './pages/HomeAdminPage';
import CreateTournamentPage from './pages/CreateTournamentPage';
import TournamentsPage from './pages/TournamentsPage';




function App() {

    let messages = null;

    if (navigator.language === "en") {
        messages = localEn;
    } else {
        messages = localEs;
    }

    return (
        <IntlProvider locale={navigator.language} messages={messages}>
            <Routes>
                <Route path="/*" element={<Layout />} />

                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route path="tournaments" element={<TournamentsPage />} />

                    

                    <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                        <Route path="/admin" element={<HomeAdmin />} />
                        <Route path='/admin/createtournament' element={<CreateTournamentPage/>}/> 
                    </Route>
                <Route/>
            </Routes>
        </IntlProvider> 
    )
}

export default App;