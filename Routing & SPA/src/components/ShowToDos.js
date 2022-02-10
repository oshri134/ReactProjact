
const ShowToDos = (props) => {

    return (
        <div>
            <div>title:{props.title}</div>
            <div>completed: {JSON.stringify(props.completed)}</div>
        </div>
    )

}
export default ShowToDos