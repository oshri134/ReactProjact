import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getUserDetailsById } from "../../server/user.server"

const UsersDetails = () => {

    const [usersDetails, setUsersDetails] = useState([])
    const parms = useParams()
    useEffect(async () => {
        const showUserDetails = await getUserDetailsById(parms.id)
        setUsersDetails(showUserDetails)
    })
    return (

        <div>

            <header>Name:{usersDetails.name}</header>
            <div>Email:{usersDetails.email}</div>
            {/* <div>City: {usersDetails.address.city}</div> */}
            <button><Link to={"/"}>Back</Link></button>
            <button><Link to={"/UsersDetails/Posts/" + parms.id}>Post</Link></button>
            <button>Todos</button>


        </div>
    )

}

export default UsersDetails