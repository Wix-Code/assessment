import React from 'react'
import Shipping from './components/shipping'
import Faqs from './components/faqs'
import EveryThingYouNeed from './components/EveryThingYouNeed'
import PopularStores from './components/PopularStores'
import HeroPage from './components/HeroPage'
import BuildForYou from './components/BuildForYou'
//import SimpleSteps from './components/SimpleSteps'

const page = () => {
  return (
    <div className='bg-[#F7F7F7]'>
      <HeroPage />
      <PopularStores />
      {/* <SimpleSteps /> */}
      <EveryThingYouNeed />
      <BuildForYou />
      <Faqs />
      <Shipping />
    </div>
  )
}

export default page