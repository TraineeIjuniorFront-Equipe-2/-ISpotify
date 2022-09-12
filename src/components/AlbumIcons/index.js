import "./style.css";
import heart from "../../assets/icons/heart.svg";
import play from "../../assets/icons/play.svg";
import install from "../../assets/icons/install.svg";
import moreOptions from "../../assets/icons/moreOptions.svg";

const AlbumDescription = () => {
  return (
    <div className="Containner">
      <img src={play} className="play" alt="play" />
      <img src={heart} className="heart" alt="heart" />
      <img src={install} className="install" alt="install" />
      <img src={moreOptions} className="moreOptions" alt="moreOptions" />
    </div>
  );
};

export default AlbumDescription;
