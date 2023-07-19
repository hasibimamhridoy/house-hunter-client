import { Outlet, useNavigation } from 'react-router-dom';
// import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Shared/Navbar/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Shared/Footer/Footer/Footer';


const MainLayouts = () => {
     
    const navigation = useNavigation();
    const spinner = navigation.state === 'loading'

   
     if (navigation.state==='loading') {

       return <div className="h-screen flex justify-center items-center">
       <Spinner></Spinner>
       </div>;
     }
  
    return (
        <div className=' '>
            <div className="mynavbar mx-auto max-w-[1520px] ">
                <Navbar></Navbar>
            </div>
            <div className="outlet mx-auto max-w-[1520px] lg:h-fit">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
     

        </div>
    );
};

export default MainLayouts;