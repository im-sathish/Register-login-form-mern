import { NavLink } from "react-router-dom";

function Header(props){
    return(
        <>
        <div className="full">
        <NavLink className={"register"} to="/Register">Register form</NavLink>
        <NavLink className={"login"} to="/Login">Login</NavLink>
    </div>
        </>

    );
}
export default Header;