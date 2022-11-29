
import useFetch from "../../../hooks/useFetch"
import Sidebar from "../sidebar/Sidebar";
import "./admin.scss";

const Admin = () => {
  const { data, loading, error } = useFetch(`https://foodtime-api.onrender.com/api/restaurants`);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      
      </div>
    </div>
  );
};

export default Admin;
