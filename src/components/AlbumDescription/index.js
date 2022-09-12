import capa from "../../assets/icons/cd_cover.png";
import "./style.css";

const AlbumDescription = () => {
  return (
    <div className="containner">
      <img src={capa} className="capa" alt="capa" />
      <div className="Description">
        <h1>Daily Mix 1</h1>
        <p>Leva Noiz, Banda Djavú, Dimas e seus teclados e mais...</p>
        <p>
          Spotify - 5000 músicas <p id="hidden"> 1h 7min</p>
        </p>
      </div>
    </div>
  );
};

export default AlbumDescription;
