import AlbumDescription from "../AlbumDescription";
import MusicTable from "../MusicTable";
import AlbumIcons from "../AlbumIcons";

import "./style.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <AlbumDescription />
      <AlbumIcons />
      <MusicTable />
    </main>
  );
};

export default Dashboard;
