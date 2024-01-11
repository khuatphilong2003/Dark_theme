import { Context, createContext } from "react";

type DarkModeContextValue = {
    isDarkMode: boolean;
    useDeviceSettings: boolean
    setIsDarkMode: (prev:boolean)=>void;
    setUseDeviceSettings: (prev:boolean)=>void
}


const DarkMode:Context<DarkModeContextValue> = createContext<DarkModeContextValue>({
    isDarkMode:false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setIsDarkMode:()=>{},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUseDeviceSettings:()=>{},
    useDeviceSettings:false
})

export default DarkMode;