import React from 'react'

import Hero from './components/it2175p/Home'
import StickyHeader from './components/it2175p/StickyHeader'
import { FeatureRichDatait5262, FullSpecificationsDatait5262, HeroDatait5262, KingVoiceDatait5262, ProductGalleryDataIt5262, TechSpecsDatait5262 } from '../../data/featurephonedata/it2175Data'
import FeatureRich from './components/it2175p/FeatureRich'
import PhoneSliderAnimation from './components/it2175p/PhoneSliderAnimation '

const It2175 = () => {
    return (
        <div>
            <Hero {...HeroDatait5262} />
            <StickyHeader {...HeroDatait5262} />
            <FeatureRich {...FullSpecificationsDatait5262}/>
            <PhoneSliderAnimation/>
        </div>
    )
}

export default It2175