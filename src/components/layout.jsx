import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div >
            <ul className="d-flex gap-5 align-items-center mb-0 ps-5 " style={{ height: "80px", width: "100%", backgroundColor: "black", color: "#FFF" }}>
                <li>
                    <Link to={"/"} style={{ textDecoration: "none", color: "#FFF" }}>Home</Link>
                </li>
                <li>
                    <Link to={"/About"} style={{ textDecoration: "none", color: "#FFF" }}>About </Link>
                </li>
                <li>
                    <Link to={"/Contact"} style={{ textDecoration: "none", color: "#FFF" }}>Contact </Link>
                </li>
            </ul>

            <Outlet />
        </div>
    )
}

export default Layout