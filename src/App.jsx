import React from 'react'

import Hero from './components/it2175p/Home'
import StickyHeader from './components/it2175p/StickyHeader'
import { FeatureRichDatait2175, FullSpecificationsDatait2175, HeroDatait2175, KingVoiceDatait2175, ProductGalleryDataIt5262, TechSpecsDatait5262 } from "./data/it2175data"
import FeatureRich from './components/it2175p/FeatureRich'
import PhoneSliderAnimation from './components/it2175p/PhoneSliderAnimation '
import KingVoice from './components/it2175p/KingVoice '
import TechSpecs from './components/it2175p/TechSpecs'
import Firstpage from './components/it2175p/Firstpage'
import Secondpage from './components/it2175p/Secondpage'

const It2175 = () => {
    return (
        <div>
            <Hero {...HeroDatait2175} />
            <StickyHeader {...HeroDatait2175} />
            <FeatureRich {...FeatureRichDatait2175}/>
            <PhoneSliderAnimation/>
            {/* <Firstpage/>
            <Secondpage/> */}
            <KingVoice {...KingVoiceDatait2175}/>
            {/* <TechSpecs {...TechSpecsDatait5262}/> */}
        </div>
    )
}

export default It2175