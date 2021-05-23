import React, { useEffect, useState, useContext } from 'react'
import { Menu as UikitMenu} from 'plkit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import { fetchFarmsData } from 'state/farms'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import BigNumber from 'bignumber.js'
import links from './config'
import { CAKE } from '../../constants'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
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
      })
    }
    FetchData();
  }, []);

  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={Number(cakePriceUsd)}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
