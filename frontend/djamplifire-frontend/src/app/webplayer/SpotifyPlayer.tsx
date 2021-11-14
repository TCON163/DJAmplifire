import * as React from "react"

import {  useCallback, FC } from "react";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

interface Props extends React.HTMLAttributes<Element> {
    TOKEN:string;
}


const SpotifyPlayer: FC<Props> = ({TOKEN}) => {

    

    

    const getOAuthToken = useCallback(callback => callback(TOKEN),[] )


    return (
        <WebPlaybackSDK
            deviceName="DJ Amplifire!"
            getOAuthToken={getOAuthToken}
            volume={1}
            connectOnInitialized={true}>

            </WebPlaybackSDK>
    );
}

export default SpotifyPlayer;