
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';

import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home/Home';
import Register from '../../pages/Home/LoginRegister/Register/Register';
import Login from '../../pages/Home/LoginRegister/Login/Login';
import About from '../../pages/Home/About/About';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardLayout from '../../layouts/MainLayouts/DashboardLayout';


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
    },

    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
            },
            {
                path:'/dashboard',
                element:<About></About>
            },
           
        ]
    }
])

export default MainRoutes;