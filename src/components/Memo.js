import React,{useState, useMemo} from 'react'

const Memo = () => {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    const AddCount1 =() => {
        setcount1(preCount1 => preCount1 + 1)
    }
    const AddCount2 =() => {
        setcount2(preCount2 => preCount2 + 1)
    }

    // const isOdd =() => {
    //     let i = 0
    //     while(i < 50000000)
    //     i++
    //     return count1 % 2 != 0
    // }
    const isOdd =useMemo(() => {
        let i = 0
        while(i < 50000000)
        i++
        return count1 % 2 !== 0
    },[count1])

    return (
        <div>
            <button onClick={AddCount1}>Count1: {count1}</button>
            <br/>
            <br/>
            <span>{isOdd ? 'Odd number': 'Even number'}</span>
            <button onClick={AddCount2}>Count2: {count2}</button>
        </div>
    )
}

export default Memo
