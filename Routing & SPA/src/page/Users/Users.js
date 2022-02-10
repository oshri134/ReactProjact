import { useEffect, useState } from "react"
import ShowUser from "../../components/ShowUsers"

import { getUserDetails } from "../../server/user.server"



const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(async () => {
        const showUser = await getUserDetails()
        setUsers(showUser)


    }, [])

    return (
        <div>
            {
                users.map(user => (
                    <ShowUser key={JSON.stringify(user.id)} id={user.id} name={user.name}></ShowUser>
                ))
            }
        </div>
    )

}

export default Users