import AlbumDescription from "../AlbumDescription";
import MusicTable from "../MusicTable";

import "./style.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <AlbumDescription />
      <MusicTable />
    </main>
  );
};

export default Dashboard;
