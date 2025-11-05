import { useNavigate } from "react-router-dom";

const Projects = () => {
const navigate = useNavigate();


    return ( 
        <>
     <h1 className="Projectsh1">Projects</h1>
     <p className="Pprojects">Project Countries:</p>
     <p className="Pprojects2">Project Game:</p>
     <button className="Button1"  onClick={() => navigate("/projectcountries")}>Click</button>
     <button className="Button2" onClick={() => navigate("/projectgame")}>Click</button>
</>

 );
}
 
export default Projects;