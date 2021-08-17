import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    cryptotomb<span className="dot">.</span>
                </Link>
            </div>
            <ul className="nav-dropdwon">
                <li>Overview</li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/wallet">myCTWallet</Link>
                </li>
                <li>Community</li>
            </ul>
            <div className="claim-a-plot">Claim a Plot</div>
        </nav>
     );
}
 
export default Navbar;