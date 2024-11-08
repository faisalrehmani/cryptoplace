import { createContext, useEffect, useState } from "react";

const CoinContext = createContext()



export const CoinProvider = ({children}) => {


    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name : "usd",
        symbol : "$"
    })

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-jdGoZpJ6ZdTxVSWhQKpXAARP'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoin()
    }, [currency])

    const contextValue = {
        allCoin , currency , setCurrency
    }


    return(
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )

}



export default CoinContext;


// CG-jdGoZpJ6ZdTxVSWhQKpXAARP