import App from '../App';
import { Outlet } from 'react-router-dom';


function MainPage() {
return (
    <>
    < App />
    < Outlet/>
    </>
)
}

export default MainPage;