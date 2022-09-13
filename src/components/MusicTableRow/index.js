import { useState } from "react";

import HeartFilled from "../../assets/icons/heartFilled";
import trash from "../../assets/icons/trash.svg";

import "./styles.css";

const MusicTableRow = ({ index, name, artist, album, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="music-table-row">
      <div className="music-table-row-content">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span>{index}</span>
          <div>
            <p>{name}</p>
            <p>{artist}</p>
          </div>
        </div>
        <div>
          <span>{album}</span>
        </div>
        <div className="music-table-row-btns">
          <button
            Title="Gostei!"
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            <HeartFilled isFilled={isLiked} />
          </button>
          <button Title="Apagar música" onClick={onDelete}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicTableRow;
