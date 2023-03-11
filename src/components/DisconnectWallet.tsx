import React, { Dispatch, SetStateAction } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

interface ButtonProps {
    wallet: BeaconWallet | null;
    setPublicToken: Dispatch<SetStateAction<string | null>>;
    setUserAddress: Dispatch<SetStateAction<string>>;
    setWallet: Dispatch<SetStateAction<any>>;
    setTezos: Dispatch<SetStateAction<TezosToolkit>>;
    setbeaconConnectionActiveActive: Dispatch<SetStateAction<boolean>>;
}

const DisconnectButton = ({
    wallet,
    setPublicToken,
    setUserAddress,
    setWallet,
    setTezos,
    setbeaconConnectionActiveActive,
}: ButtonProps): JSX.Element => {
    const disconnectWallet = async (): Promise<void> => {
        if (wallet) {
            await wallet.clearActiveAccount();
        }
        setUserAddress("");
        setWallet(null);
        const tezosTK = new TezosToolkit("https://ghostnet.ecadinfra.com");
        setTezos(tezosTK);
        setbeaconConnectionActiveActive(false);
        setPublicToken(null);
    };

    return (
        <div className="buttons">
            <button className="button" onClick={disconnectWallet}>
                <i className="fas fa-times"></i>&nbsp; Disconnect wallet
            </button>
        </div>
    );
};

export default DisconnectButton;
