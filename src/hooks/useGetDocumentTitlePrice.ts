import { useState, useEffect } from 'react'
import { fetchFarmsData } from 'state/farms'
import BigNumber from 'bignumber.js'

// FIXME price data is not correct

const useGetDocumentTitlePrice = () => {
  const [cakePriceUsd, setCakePriceUsd] = useState<string|null>(null)

  useEffect(() => {
    const FetchData = async () => {
      const farms = await fetchFarmsData();
      farms().then(data => { 
         const ZERO = new BigNumber(0)
         const cakeBnbFarm = data[3] 
         const bnbBusdFarm = data[2]
         console.log(cakeBnbFarm)
         const bnbBusdPrice = bnbBusdFarm.tokenPriceVsQuote ? new BigNumber(1).div(bnbBusdFarm.tokenPriceVsQuote) : ZERO
         const cakeBusdPrice = cakeBnbFarm.tokenPriceVsQuote ? bnbBusdPrice.times(cakeBnbFarm.tokenPriceVsQuote) : ZERO
         setCakePriceUsd(cakeBusdPrice.toString()) 
         document.title = `Bonkey dAPP $ ${cakeBusdPrice.toPrecision(1)}`
      })
    }
    FetchData();
  }, [])
}
export default useGetDocumentTitlePrice
