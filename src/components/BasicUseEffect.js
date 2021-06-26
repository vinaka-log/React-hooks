import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
    
    const[count, setCount]= useState(0)

    useEffect(() => {
        console.log("useEffect involed")
    },[])

    return (
        <div>
            <button onClick={()=> setCount(preCount=>preCount+1)}> Click {count} </button>
        </div>
    )
}

export default BasicUseEffect
