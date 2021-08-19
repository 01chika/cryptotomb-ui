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
        <div>
            {error && <div className="fetch-error">could not fetch the data for that resource</div>}
            {isPending && <div>Loading...</div>}
            {plotIsMinted ? "</> ": <PlotFree plot={plot} />}

        </div>
     );
     
}
 
export default PlotDetail;