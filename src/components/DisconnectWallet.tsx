import React, { Dispatch, SetStateAction } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";

interface ButtonProps {
    wallet: BeaconWallet | null;
    setUserAddress: Dispatch<SetStateAction<string>>;
    setWallet: Dispatch<SetStateAction<any>>;
    setBeaconConnected: Dispatch<SetStateAction<boolean>>;
}

const DisconnectButton = ({
    wallet,
    setUserAddress,
    setWallet,
    setBeaconConnected,
}: ButtonProps): JSX.Element => {
    const disconnectWallet = async (): Promise<void> => {
        if (wallet) {
            await wallet.clearActiveAccount();
        }
        setUserAddress("");
        setWallet(null);
        setBeaconConnected(false);
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
