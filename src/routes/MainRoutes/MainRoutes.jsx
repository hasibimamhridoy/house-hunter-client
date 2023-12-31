
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';

import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home/Home';
import Register from '../../pages/Home/LoginRegister/Register/Register';
import Login from '../../pages/Home/LoginRegister/Login/Login';
import About from '../../pages/About/About';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardLayout from '../../layouts/MainLayouts/DashboardLayout';
import MyAddeddHouse from '../../pages/Dashboard/Owner/MyAddeddHouse';
import AddANewHouse from '../../pages/Dashboard/Owner/AddANewHouse';
import MenageBookingsOwner from '../../pages/Dashboard/Owner/MenageBookingsOwner';
import Contact from '../../pages/Contact/Contact';
import Houses from '../../pages/Houses/Houses';
import UpdateHouse from '../../pages/Dashboard/Owner/updateHouse';
import MenageBookingsRenter from '../../pages/Dashboard/Renter/MenageBookingsRenter';
import PrivateRoutes from './PrivateRoutes';


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
                path:'/contact',
                element:<Contact></Contact>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/houses',
                element:<Houses></Houses>
            },
        ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
            },
            {
                path:'/dashboard/my-house',
                element:<MyAddeddHouse></MyAddeddHouse>
            },
            {
                path:'/dashboard/add-new-house',
                element:<AddANewHouse></AddANewHouse>
            },
            {
                path:'/dashboard/update/house/:id',
                element:<UpdateHouse></UpdateHouse>,
                loader : ({params})=>fetch(`https://house-hunter-server-production.up.railway.app/api/single-house/${params.id}`)
            },
            {
                path:'/dashboard/menage-bookings-owner',
                element:<MenageBookingsOwner></MenageBookingsOwner>
            },
            {
                path:'/dashboard/menage-bookings-renter',
                element:<MenageBookingsRenter></MenageBookingsRenter>
            },
           
        ]
    }
])

export default MainRoutes;