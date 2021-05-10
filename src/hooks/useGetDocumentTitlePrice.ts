import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

// FIXME price data is not correct

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Bonkey dAPP ${0.01}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
