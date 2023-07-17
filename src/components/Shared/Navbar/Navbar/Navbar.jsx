import MenuItems from "../MenuItems/MenuItems";
import Logo from "../Logo/Logo";
import ProfileItems from "../ProfileItems/ProfileItems";

const Navbar = () => {

  return (
    <div className="h-[4.8rem] flex items-center justify-between">
      <Logo></Logo>
      <MenuItems></MenuItems>
      
      <ProfileItems></ProfileItems>
      
    </div>
  );
};

export default Navbar;
