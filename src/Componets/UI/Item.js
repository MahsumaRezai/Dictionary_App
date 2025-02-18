import './Itme.css'
const Itme = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
}
export default Itme;