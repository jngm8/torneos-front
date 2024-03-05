import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import {  IntlProvider } from 'react-intl';
import localEs from './locales/es.json';
import localEn from './locales/en.json';


function App() {

    let messages = null;

    if (navigator.language === "en") {
        messages = localEn;
    } else {
        messages = localEs;
    }

    return (
        <IntlProvider locale={navigator.language} messages={messages}>
            <div className="App">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                    </BrowserRouter>
            </div>
        </IntlProvider> 


    )
}

export default App;