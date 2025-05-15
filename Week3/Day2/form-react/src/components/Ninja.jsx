import { useState } from "react"

const Ninja = (props) => {
    console.log(props)
    // const data = ""

    //? CREATE STATE FOR THIS COMPONENT
    //!      State 
    //!       !  Change state
    //!      V      V            default state
    const [data, setData] = useState("") //[sdf,sdf,dfdf,df]




    const HandelSubmit = (e) => {
        e.preventDefault() //! prevent the refresh
        console.log("Hello  " + data)
    }



    return (
        <fieldset>
            <legend>Ninja.jsx</legend>
            {JSON.stringify(props)}
            {/* {props.person} */}
            <br />
            <button onClick={() => { console.log("HEEEYYYYY") }}>Hello From Ninja Comp</button>
            <br />
            <form onSubmit={HandelSubmit}>
                <input type="text" onChange={(e) => { setData(e.target.value) }} />
                <button>Add Ninja</button>
            </form>
        </fieldset>
    )
}

export default Ninja