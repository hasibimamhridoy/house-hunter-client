
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';

import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home/Home';
import Register from '../../pages/Home/LoginRegister/Register/Register';
import Login from '../../pages/Home/LoginRegister/Login/Login';
import About from '../../pages/Home/About/About';


const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default MainRoutes;