import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    cryptotomb
                </Link>
            </div>
            <ul className="nav-dropdwon">
                <li>Overview</li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>myCTWallet</li>
                <li>Community</li>
            </ul>
            <button>Claim a Plot</button>
        </nav>
     );
}
 
export default Navbar;