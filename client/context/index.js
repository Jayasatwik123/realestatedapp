import React from 'react'
import { useEffect,useContext,createContext } from 'react'
import { useAddress,useContract,useMetamask,useContractWrite,useContractRead,useContractEvents } from '@thirdweb-dev/react'
import { ethers } from 'ethers';
const StateContext=createContext();
export const StateContextProvider=({children})=>{
    const {contract}=useContract("0xe0FA20aECBaFfd677deb4321700Ae50a5a04cEaC");

/*console.log(contract);*/

     

  
    const address=useAddress();
    const connect=useMetamask();
    const realEstate="Real Estate Dapp"
    return (
        <StateContext.Provider value={{address,connect,/*contract,*/realEstate}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext=()=>useContext(StateContext);


