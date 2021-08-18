import { useParams } from "react-router-dom";
import PlotFree from "./PlotFree";
import useFetch from "./useFetch";

const PlotDetail = () => {

    const { id } = useParams();
    const {data: plot, isPending, error} = useFetch("http://localhost:8000/plots/" + id);

    //simulate ethereum calls for now
    let fetchPlotStatus = true;
    let plotIsMinted = false;

    if (!fetchPlotStatus){
        return <section className="fetch-error">could not fetch the data from blockchain!</section>;
    }



    return ( 
        <section className="plot-info-section">
            {error && <div className="fetch-error">could not fetch the data for that resource</div>}

            {plot && <div className="plot-info-details">
                <h1 ><span className="highlighted-plot">{`Plot #${plot.id}`}</span></h1>

                <div className="plot-image">
                    <img src={plot.image} alt="" />
                </div>
            </div>
            }

            <div className="plot-claim-status">
                {plotIsMinted ? "</> ": <PlotFree />}
            </div>
        </section>
     );
     
}
 
export default PlotDetail;