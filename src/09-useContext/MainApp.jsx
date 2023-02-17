import {Navigate, Route, Routes} from 'react-router-dom';

import {UserProvider} from './context/UserProvider';
import {HomePage} from './HomePage';
import {AboutPage} from './AboutPage';
import {LoginPage} from './LoginPage';
import {Navbar} from './Navbar';


const MainApp = () => {
    return (
        <UserProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="/*" element={<Navigate to="/about"/>}/>
            </Routes>
        </UserProvider>
    )
}

export default MainApp