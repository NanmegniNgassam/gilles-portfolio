import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams(); 

    return (
        <div> Bienvenu sur le projet { id }. </div>
    );
}
 
export default Project;