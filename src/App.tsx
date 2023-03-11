import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";

const App = () => {
    const [Tezos, setTezos] = useState<TezosToolkit>(
        new TezosToolkit("https://ghostnet.ecadinfra.com")
    );
    const [contract, setContract] = useState<any>(undefined);
    const [publicToken, setPublicToken] = useState<string | null>(null);
    const [wallet, setWallet] = useState<any>(null);
    const [userAddress, setUserAddress] = useState<string>("");
    const [storage, setStorage] = useState<number>(0);
    const [beaconConnectionActive, setbeaconConnectionActiveActive] =
        useState<boolean>(false);

    // Ghostnet Increment/Decrement contract
    const contractAddress: string = "KT1QMGSLynvwwSfGbaiJ8gzWHibTCweCGcu8";

    if (publicToken && !userAddress) {
        return <div className="main-box">Connecting to your wallet</div>;
    } else if (userAddress) {
        return (
            <div className="main-box">
                <div id="content">
                    <p>{contractAddress}</p>
                    <p>{userAddress}</p>
                </div>
                <DisconnectButton
                    wallet={wallet}
                    setPublicToken={setPublicToken}
                    setUserAddress={setUserAddress}
                    setWallet={setWallet}
                    setTezos={setTezos}
                    setbeaconConnectionActiveActive={
                        setbeaconConnectionActiveActive
                    }
                />
            </div>
        );
    } else if (!publicToken && !userAddress) {
        return (
            <div className="main-box">
                <ConnectButton
                    Tezos={Tezos}
                    setContract={setContract}
                    setPublicToken={setPublicToken}
                    setWallet={setWallet}
                    setUserAddress={setUserAddress}
                    setStorage={setStorage}
                    contractAddress={contractAddress}
                    setbeaconConnectionActiveActive={
                        setbeaconConnectionActiveActive
                    }
                    wallet={wallet}
                />
            </div>
        );
    } else {
        return <div>An error has occurred</div>;
    }
};

export default App;
