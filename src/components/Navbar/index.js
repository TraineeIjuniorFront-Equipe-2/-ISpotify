import ispotify from "../../assets/icons/ispotify.png";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        href="./Index.html"
        Title="iSpotify®"
        src={ispotify}
        className="ispotify"
        alt="ispotify"
      />
      <h1 className="logoName">iSpotify®</h1>
    </div>
  );
};

export default Navbar;
