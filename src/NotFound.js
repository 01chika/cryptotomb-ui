import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <section>
            <div className="not-found">
                <h2>Oops...</h2>
                <p>That page cannot be found</p>
                <Link to="/">Back to homepage <span>&#8594;</span> </Link>
            </div>
        </section>
     );
}
 
export default NotFound;