import Web3 from "web3";
import { useState } from "react";

const Wallet = () => {
    const [metamaskStatus, setmetamaskStatus] = useState(false);
    let account;
    let accounts;

    const handleClick = () => {
        try{
            accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            setmetamaskStatus(true)

        }catch{
            setmetamaskStatus(false)
        }
    }

    return ( 
        <section className="ct-wallet">
        <p>{console.log(metamaskStatus)}</p>

        {metamaskStatus 
        
        ? 

            <h1></h1> 
        
        
        : 
        
            <div className="connect-wallet">
                <img src={"/metamask-logo-horizontal.svg"} alt="metamask-logo" />
                <h1>Connect your Metamask Wallet to cryptotomb to access this page !</h1>
                <div onClick={handleClick} className="enable-metamask">Enable Metamask</div>
            </div> }
            
        </section>
     );
}
 
export default Wallet;