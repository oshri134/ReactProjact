import { useEffect, useState } from "react"
import { getUserToDoById } from "../../server/user.server"
import { useParams, Link } from "react-router-dom"
import ShowToDos from "../../components/ShowToDos"


const Todos = () => {
    const parms = useParams()
    const [showToDo, setShowToDo] = useState([])
    useEffect(async () => {
        const post = await getUserToDoById(parms.id)
        setShowToDo(post)
    })
    return (
        <div>
            {
                showToDo.map(post => (
                    <ShowToDos key={JSON.stringify(post.id)} title={post.title} completed={post.completed}></ShowToDos>
                ))
            }
            <button><Link to={"/UsersDetails/" + parms.id}>Back</Link></button>

            <button><Link to={"/"}>Home</Link></button>
        </div>
    )
}
export default Todos