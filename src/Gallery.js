import { useEffect, useState } from "react";
import Button from "./components/Button";
import Plots from "./components/Plots";

const Gallery = () => {
    // const {data, isPending, error} = useFetch("http://localhost:8000/plots");
    const [allData, setAllData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
    const [plotsdata, setPlots] = useState(null);
    const [buttons, setButtons] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch("http://localhost:8000/plots", { signal: abortCont.signal })
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error("could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setPlots(data);
                setAllData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError"){
                    console.log("fetch aborted");
                } else{
                    setError(err.message);
                    setisPending(false);
                }
                
            })
            
        }, 0);

        return () => abortCont.abort();

    }, []);


    const filter = (button) =>{
        if(button === 'All'){
            setPlots(allData);
            return;
        }

        const filteredData = allData.filter(plot => plot.tombType === button);
        setPlots(filteredData);
    }

    return ( 

        <section className="gallery">
            {error && <div className="fetch-error">could not fetch the data for that resource</div>}
            {isPending && <h2> Loading...</h2> }
            {allData && <Button data={allData} filter={filter}/>}
            {plotsdata && <Plots plots={plotsdata}/> }
        </section>
     );
}
 
export default Gallery;