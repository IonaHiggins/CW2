import {Link } from "react-router-dom";

const Navigation = ({route, text})=>{
    return(
        <Link to={route}>{text}</Link>
    )
}
export default Navigation