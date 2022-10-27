
import useFetch from "../../../hooks/useFetch"
import Sidebar from "../sidebar/Sidebar";
import "./admin.scss";

const Admin = () => {
  const { data, loading, error } = useFetch(`/restaurants`);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      
      </div>
    </div>
  );
};

export default Admin;
