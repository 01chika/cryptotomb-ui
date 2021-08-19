const PlotFree = ({plot}) => {
    return ( 
        <section id="free" className="plot-info-section">

            {plot && <div className="plot-info-details">
                <h1 ><span className="highlighted-plot">{`Plot #${plot.id}`}</span></h1>

                <div className="plot-image">
                    <img src={plot.image} alt="" />
                </div>
            </div>
            }

            {plot &&<div className="plot-claim-status">
                <div>
                    Lucky You, this plot has not been claimed...Hurry and claim it now!!!
                        <div className="claim-this-plot">Claim this Plot</div>
                </div>
            </div>
            }
        </section>
    );
}
 
export default PlotFree;

