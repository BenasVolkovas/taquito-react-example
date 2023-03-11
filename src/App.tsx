import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";

const App = () => {
    // Constants
    const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";
    const rpcUrl: string = "https://ghostnet.ecadinfra.com";
    const Tezos: TezosToolkit = new TezosToolkit(rpcUrl);

    // State variables
    // const [storage, setStorage] = useState<number>(0);
    const [contract, setContract] = useState<any>(undefined);
    const [wallet, setWallet] = useState<any>(null);
    const [userAddress, setUserAddress] = useState<string>("");
    const [beaconConnected, setBeaconConnected] = useState<boolean>(false);

    console.log("userAddress", userAddress);

    if (userAddress) {
        return (
            <div className="main-box">
                <div id="content">
                    <p>{contractAddress}</p>
                    <p>{userAddress}</p>
                </div>
                <DisconnectButton
                    wallet={wallet}
                    setUserAddress={setUserAddress}
                    setWallet={setWallet}
                    setBeaconConnected={setBeaconConnected}
                />
            </div>
        );
    } else if (!userAddress) {
        return (
            <div className="main-box">
                <ConnectButton
                    rpcUrl={rpcUrl}
                    Tezos={Tezos}
                    setContract={setContract}
                    setWallet={setWallet}
                    setUserAddress={setUserAddress}
                    contractAddress={contractAddress}
                    setBeaconConnected={setBeaconConnected}
                    wallet={wallet}
                />
            </div>
        );
    } else {
        return <div>An error has occurred</div>;
    }
};

export default App;
