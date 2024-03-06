import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Unauthorized from "./pages/Unauthorized";
import Layout from './components/Layout';
import {  IntlProvider } from 'react-intl';
import localEs from './locales/es.json';
import localEn from './locales/en.json';
import {Routes, Route} from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import HomeAdmin from './pages/HomeAdmin';




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
                
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="unauthorized" element={<Unauthorized />} />

                    <Route element={<RequireAuth allowedRoles={"user"}/>}>
                        <Route path="/" element={<Home />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                        <Route path="/admin" element={<HomeAdmin />} />
                    </Route>
                <Route/>
            </Routes>
        </IntlProvider> 
    )
}

export default App;