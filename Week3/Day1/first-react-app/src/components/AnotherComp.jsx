
const AnotherComp = (props) => {
    console.log(props)



    return (
        <fieldset>
            <legend>AnotherComp.jsx</legend>
            <h3>Hello from Another Component</h3>
            here is the animals : {props.aa}
        </fieldset>
    )

}

export default AnotherComp