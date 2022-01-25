import React from 'react'
import './App_five.css'
import{RecoilRoot} from 'recoil'
import Country from './Country'
import Weather from './Weather'
function App_five() {
    return (
        <div>
            <RecoilRoot>
                <Country />
                <Weather />
            </RecoilRoot>
        </div>
    )
}

export default App_five
