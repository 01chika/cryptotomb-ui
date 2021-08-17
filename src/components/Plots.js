const Plots = ({plots}) => {
    return ( 
        <div className="plots ">
            {
                plots.map((plot)=>{
                    return <div className="plot-container" key={plot.id}>
                        <div className="plot-item" >
                            <img src={plot.image} alt="ahahahahahahhhah" />
                            <h3>{`Plot ${plot.id}`}</h3>
                        </div>

                    </div>
                })
            }
        </div>
     );
}
 
export default Plots;