import ispotify from "../../assets/icons/ispotify.png";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ispotify} className="ispotify" alt="ispotify" />
    </div>
  );
};

export default Navbar;
