import React from 'react'
import NavBar from '../components/NavBar'
import HeroIllustration from '../components/HeroIllustration'
import TranslatorComp from '../components/TranslatorComp'

const TranslatePage = () => {
  return (
    <HeroIllustration>
        <NavBar />
        <TranslatorComp />
    </HeroIllustration>
  )
}

export default TranslatePage