import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        //originally used the setTimeOut to simulate network delays
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error("could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
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

    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;