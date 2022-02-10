import { useEffect, useState } from "react"
import { getUserPostsById } from "../../server/user.server"
import { useParams, Link } from "react-router-dom"
import ShowPost from "../../components/ShowPost"


const Posts = () => {
    const parms = useParams()
    const [showPost, setShowPost] = useState([])
    useEffect(async () => {
        const post = await getUserPostsById(parms.id)
        setShowPost(post)
    })
    return (
        <div>
            {
                showPost.map(post => (
                    <ShowPost key={JSON.stringify(post.id)} title={post.title} body={post.body}></ShowPost>
                ))
            }
            <button><Link to={"/UsersDetails/" + parms.id}>Back</Link></button>
            <button><Link to={"/"}>Home</Link></button>
        </div>
    )
}
export default Posts