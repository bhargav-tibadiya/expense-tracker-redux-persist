import { useNavigate } from "react-router-dom";
import "./Tracker.scss";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="navbar_container">
      <div className="navbar_container_records" onClick={()=>navigate('/record')}>Records</div>
      <div>Somthing yet to add</div>
    </div>
  )
}

export default Navbar