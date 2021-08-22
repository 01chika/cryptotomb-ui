import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);


    const changeBackground = ()=>{
        if(window.scrollY >= 75){
            setNavbar(true)
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground)


    return ( 
        <nav className={navbar ? "navbar active" : "navbar"}>
            <div className="logo">
                <Link to="/">
                    cryptotomb<span className="dot">.</span>
                </Link>
            </div>
            <ul className="nav-dropdwon">
                <li>
                    <Link to="/">Overview</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/wallet">myCTWallet</Link>
                </li>
                <li>Community</li>
                <li>FAQ</li>
            </ul>
            <div className="claim-a-plot">Claim a Plot</div>
        </nav>
     );
}
 
export default Navbar;