import * as React from "react"

import {  useCallback } from "react";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";


export default function SpotifyPlayer() {


    const getOAuthToken = useCallback(callback => callback("BQBu01GzRaBcZ4Nk9c1A0JkPrRqJCkBUMZzTUd2DMhliVgTZaZBjYtYFpD37bRzH5ym1kT-5ZdoAuU-8DxXDu9cVDFyJjQj3VvEypLGKjAi3QUWV5gtLYXzu9EEy4hCHkfd6rrBjMuiRP5R14oS6gZZPufWtIKaG3eDr5dIMnfNpB16U1Yz9CYCc9p4aJ9MUmi0TDXfBWB5V67_zFUfupFg"),[] )


    return (
        <WebPlaybackSDK
            deviceName="DJ Amplifire!"
            getOAuthToken={getOAuthToken}
            volume={1}
            connectOnInitialized={true}>

            </WebPlaybackSDK>
    );
}