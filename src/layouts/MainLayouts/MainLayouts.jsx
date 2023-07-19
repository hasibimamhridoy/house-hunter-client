import { Outlet, useLocation, useNavigation } from 'react-router-dom';
// import Spinner from '../../components/Spinner/Spinner';
import Navbar from '../../components/Shared/Navbar/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Shared/Footer/Footer/Footer';
import { useEffect } from 'react';


const MainLayouts = () => {

    const loc = useLocation();
    const navigation = useNavigation();

     useEffect(() => {
        if (loc.pathname == "/login") {
          document.title = "House Hunter - LOGIN";
        } else if (loc.pathname === "/") {
          document.title = "House Hunter - Home";
        } else {
          document.title = `House Hunter ${loc.pathname.toUpperCase()}`.replace(
            "/",
            "-"
          );
        }
      }, [loc.pathname, loc.state]);


      if (navigation.state==='loading') {

        return <div className="h-screen flex justify-center items-center">
        <Spinner></Spinner>
        </div>;
      }
   

    return (
        <div className=' '>
            <div className="mynavbar mx-auto max-w-[1220px] ">
                <Navbar></Navbar>
            </div>
            <div className="outlet mx-auto max-w-[1220px] lg:h-fit">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
     

        </div>
    );
};

export default MainLayouts;