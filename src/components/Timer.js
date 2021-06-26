import React, {useState, useEffect} from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)

    const time = () => {
        setCount(preCount => preCount+1)
    }

    useEffect(() => {
        const interval = setInterval(time, 1000)
        return () => {
            clearInterval(interval)
            console.log("cleard")
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default Timer
