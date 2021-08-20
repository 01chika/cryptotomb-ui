import { useState } from "react";
import MintEpitaph from "./MintEpitaph";



const PlotClaimed = ({plot}) => {
    const [showMintEpitaph, setShowMintEpitaph] = useState(false);

    const openMintEpitaph = () => {
        setShowMintEpitaph(prev => !prev);
    };

    return ( 
        <>
            <section id="claimed" className="plot-info-section">

                {plot && <div className="plot-info-details">
                    <h1 ><span className="highlighted-plot">{`Plot #${plot.id}`}</span></h1>

                    <div className="plot-image">
                        <img src={plot.image} alt="" />
                    </div>
                </div>
                }

                {plot &&<div className="plot-owner-info">

                        <h3>Owner: <span className="owner-address">0x3ad42b3920Aa36a4506ebfc114cCC865a65c832f</span></h3>
                        <h3 id="mint-status">Mint Status:<img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"/></h3>
                        <h1>Ready to be immortalized on the Blockchain? &#128640;</h1>
                        <div className="mint-button" onClick={openMintEpitaph}>Mint Epitaph on Plot {plot.id} now!</div>
                </div>
                }
            </section>
            <MintEpitaph plot={plot} showMintEpitaph={showMintEpitaph} setShowMintEpitaph = {setShowMintEpitaph} />
        </>
     );
}
 
export default PlotClaimed;