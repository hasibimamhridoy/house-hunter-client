import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const Logo = () => {

  const {isDark} = useAuth()

  return (
    <div>
      {!isDark && <div>
      <Link to="/">
        <img
          className="w-32 h-14 hidden lg:block"
          src="https://deendarpartner.com/psilrimt/2023/06/Ass-Sunnah-1.png"
          alt=""
        />
      </Link>
      <Link to="/">
        <img
          className="w-28 h-10 block lg:hidden"
          src="https://deendarpartner.com/psilrimt/2023/06/Ass-Sunnah-1.png"
          alt=""
        />
      </Link>
      </div>}
      {isDark && <div>
      <Link to="/">
        <img
          className="w-32 h-14 hidden lg:block"
          src="https://deendarpartner.com/psilrimt/2023/06/Ass-Sunnah-3.png"
          alt=""
        />
      </Link>
      <Link to="/">
        <img
          className="w-28 h-10 block lg:hidden"
          src="https://deendarpartner.com/psilrimt/2023/06/Ass-Sunnah-3.png"
          alt=""
        />
      </Link>
      </div>}
    </div>
  );
};

export default Logo;
