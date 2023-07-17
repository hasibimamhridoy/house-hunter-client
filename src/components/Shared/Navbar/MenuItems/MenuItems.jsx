
import CustomNavlink from "./CustomNavlink";

const MenuItems = () => {

  return (
    <ul>
      <div className="hidden text-sm gap-8 text-gray-600 lg:flex">
        <CustomNavlink to="/" title="Home"></CustomNavlink>
        <CustomNavlink to="/about" title="About"></CustomNavlink>
        <CustomNavlink to="/contact" title="Contact"></CustomNavlink>
      </div>
      
    </ul>
  );
};

export default MenuItems;
