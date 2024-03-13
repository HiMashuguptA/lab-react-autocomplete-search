import React, { useState } from 'react'
import data from "../Assests/countryData.json"
function Searchpage() {
    var Data = data
    console.log(Data.name);
    const [value, setvalue] = useState("")
    const [Escape, setEscape] = useState(true)
    const change = (e) => {
        setvalue(e.target.value)
    }
    const keydownEvent = (e) => {
        if (e.key === "Escape") {
            setEscape(false)
        }
        else {
            setEscape(true)
        }
    }
    const Result = (SearchTerm) => {
        setvalue(SearchTerm)
    }
    return (
        <div>
            <h1>Search</h1>
            <input onFocus={() => { setEscape(true) }} onKeyDown={keydownEvent} type="text" value={value} onChange={change} style={{ height: "26px", width: "220px", fontSize: "16px" }} />
            <button style={{ height: "33px" }} onClick={() => Result(value)}>Search</button>
            <div style={{ border: "2px solid black", display: "block", width: "225px" }}>
                {Data.filter(item => {
                    const SearchTer = value.toLowerCase()
                    const name = item.name.toLowerCase()
                    return SearchTer && name.startsWith(SearchTer) && SearchTer != name && Escape
                })
                    .slice(0, 7)
                    .map((item) => (
                        <div key={item.code} onClick={() => Result(item.name)} className='options'>{item.name}</div>
                    ))}
                {/* <div className='options'>hello</div> */}
            </div>
        </div>
    )
}
export default Searchpage

