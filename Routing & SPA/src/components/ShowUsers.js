import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const ShowUser = (props) => {
    const [prodId, setProdId] = useState(props.id);


    const nevToDetails = () => {

    }
    return (
        <div>

            <div>Name :<button onClick={nevToDetails}><Link to={"/UsersDetails/" + prodId}>{props.name}</Link></button></div>


        </div>
    )
}

export default ShowUser