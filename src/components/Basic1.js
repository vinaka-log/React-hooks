import React, {useState} from 'react'

const Basic1 = (props) => {
//     const clickHandler =() => {
//         console.log('clicked')
//     }
const [count, setCount] = useState(0)
    return (
        <>
        <button onClick={() => {setCount(preCount=>preCount + 1);setCount(preCount => preCount + 1);}}>Count {count}</button>
        <h1>Hello { props.name }</h1>
        <h1>Hello React2</h1>
        </>
    )
}

export default Basic1
