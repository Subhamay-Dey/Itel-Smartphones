import React from 'react'

import Hero from './components/it2175p/Home'
import StickyHeader from './components/it2175p/StickyHeader'
import { FeatureRichDatait5262, FullSpecificationsDatait2175, HeroDatait2175, KingVoiceDatait5262, ProductGalleryDataIt5262, TechSpecsDatait5262 } from "./data/it2175data"
import FeatureRich from './components/it2175p/FeatureRich'
import PhoneSliderAnimation from './components/it2175p/PhoneSliderAnimation '
import KingVoice from './components/it2175p/KingVoice '
import TechSpecs from './components/it2175p/TechSpecs'

const It2175 = () => {
    return (
        <div>
            <Hero {...HeroDatait2175} />
            {/* <StickyHeader {...HeroDatait5262} />
            <FeatureRich {...FullSpecificationsDatait2175}/>
            <PhoneSliderAnimation/>
            <KingVoice {...KingVoiceDatait5262}/>
            <TechSpecs {...TechSpecsDatait5262}/> */}
        </div>
    )
}

export default It2175