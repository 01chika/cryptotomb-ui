import { Link } from "react-router-dom";

const Plots = ({plots}) => {
    return ( 
        <div className="plots ">
            {
                plots.map((plot)=>{
                    return <div className="plot-container" key={plot.id}>
                        <div className="plot-item" >
                            <Link to={`/plots/${plot.id}`}>
                                <img src={plot.image} alt="ahahahahahahhhah" />
                            </Link>
                            
                            <h3>{`Plot ${plot.id}`}</h3>
                            
                        </div>

                    </div>
                })
            }
        </div>
     );
}
 
export default Plots;