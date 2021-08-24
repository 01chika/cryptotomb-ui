import { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";

const MintEpitaph = ({plot, showMintEpitaph, setShowMintEpitaph}) => {

    const [name, setName] = useState(null);
    const [DOB, setDOB] = useState(null);
    const [epitaph, setEpitaph] = useState(null);

  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 100
    },
    opacity: showMintEpitaph ? 1 : 0,
    transform: showMintEpitaph ? `translateY(0%)` : `translateY(-100%)`
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
                <div className="plot-image">
                  <img src={plot.image} alt="" />
                </div>
                
                <div className="epitaph-info">
                  <div className="close-modal-btn" aria-label="close modal" onClick={()=> setShowMintEpitaph(prev => !prev)}>
                    <button>X</button>
                  </div>
                  <h2>Input your information</h2>
                  <div className="create">
                    <form>
                      <label>Name:</label>
                      <input 
                        type="text" 
                        required
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                      />
                      <label>DOB:</label>
                      <input 
                        type="text" 
                        required
                        value = {DOB}
                        onChange = {(e) => setDOB(e.target.value)}
                      />
                      <label>Epitaph:</label>
                      <textarea 
                        required
                        value = {epitaph}
                        onChange = {(e) => setEpitaph(e.target.value)}
                      >
                      </textarea>
        
                      {<button>MINT!! 🚀</button>}
                    </form>
                  </div>
                  
                  {/* <div className="input-epitaph">
                    <p>name</p>
                    <p>name</p>
                    <p>name</p>
                    <button>submit button here</button>
                  </div> */}
                  <div className="epitaph-bg">
                    {<p>Name: {name}</p>}
                    {/* <br/> */}
                    {<p>DOB: {DOB}</p>}
                    {/* <br/> */}
                    {<p>Epitaph: {epitaph}</p>}
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