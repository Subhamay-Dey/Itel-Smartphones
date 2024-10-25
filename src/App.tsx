
import HotPicks from './components/Homepage/HotPicks'
import CoolGadgets from './components/Homepage/CoolGadgets'
import SmartApp from './components/Homepage/SmartApp'
import Enjoy from './components/Homepage/Enjoy'
import DareToDoIt from './components/Homepage/DareToDoIt'
import CountOnItel from './components/Homepage/CountOnItel'
import StayPluggedIn from './components/Homepage/StayPluggedIn'
import DreamBig from './components/Homepage/DreamBig'
import Entertainment from './components/Homepage/Entertainment'
import Transform from './components/Homepage/Transform'
import First from './components/Homepage/pages/First'
// import Hero from './components/Homepage/Hero'

const It2175 = () => {
    return (
        <div>
            {/* <Hero/> */}
            <HotPicks/>
            <DreamBig/>
            <DareToDoIt/>
            {/* <StayPluggedIn/> */}
            <Entertainment/>
            <Transform/>
            <First/>
            <CountOnItel/>
            <CoolGadgets/>
            <SmartApp/>
            <Enjoy/>
        </div>
    )
}

export default It2175