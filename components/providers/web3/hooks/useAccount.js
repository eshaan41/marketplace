import { useEffect} from "react"
import useSWR from "swr";


export const handler = (web3, provider) => () => {

    const adminAddress = {
      "0x8A5ca99B1e5e0b38FcAa2DbD8B1A79da7Bfccf1D": true,
    }

    const {data, mutate, ...rest} = useSWR(() => 
      web3 ? "web3/accounts": null,
      async () => {
        const accounts = await web3.eth.getAccounts()
        return accounts[0]
      }
    ) 
    
    useEffect(() => {
      provider &&
      provider.on("accountsChanged",
        accounts => mutate(accounts[0] ?? null) 
      )
    }, [provider]) 
    return {
      account: 
      {
        data,
        isAdmin: (data && adminAddress[data]) ?? false,
        mutate,
        ...rest}
    }
}