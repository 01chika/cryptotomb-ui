import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

const MintEpitaph = ({plot, showMintEpitaph, setShowMintEpitaph}) => {

    const modalRef = useRef()

    const animation = useSpring({
        config: {
          duration: 300
        },
        opacity: showMintEpitaph ? 1 : 0,
        transform: showMintEpitaph ? `translateX(0%)` : `translateX(-100%)`
      });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
          setShowMintEpitaph(false);
        }
      };

    // to close modal after "esc" key is pressed
    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showMintEpitaph) {
            setShowMintEpitaph(false);
            console.log('I pressed');
          }
        },
        [setShowMintEpitaph, showMintEpitaph]
      );
    
    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

    return ( 
        <>
            {showMintEpitaph ? 
                <>
                    <div ref={modalRef} onClick={closeModal} className="modal-bg">
                        <animated.div style={animation}>
                            <div className="modal-wrapper">
                                <div className="plot-image"><img src={plot.image} alt="" /></div>
                                
                                <div className="epitaph-info">
                                    <div className="close-modal-btn" aria-label="close modal" onClick={()=> setShowMintEpitaph(prev => !prev)}>
                                        <button>X</button>
                                    </div>
                                    
                                    <div className="input-epitaph">
                                        <p>name</p>
                                        <p>name</p>
                                        <p>name</p>
                                        <button>submit button here</button>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                    
                </>
             : ""}
        </>
     );
}
 
export default MintEpitaph;