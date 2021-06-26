import React, {useState} from 'react'

const Basic1 = () => {
//     const clickHandler =() => {
//         console.log('clicked')
//     }
const [product, setProducts] = useState({name:'', price: ''})
    return (
        <>
        <form>
            <input type='text' value={product.name}
            // 要素の分解と入力中の値に変更
            onChange={evt => setProducts({...product, name:evt.target.value})}/>
            <input type='text' value={product.price}
            // 要素の分解と入力中の値に変更
            onChange={evt => setProducts({...product, price:evt.target.value})}/>
        </form>
        <h1>Product name is {product.name}</h1>
        <h1>Product name is {product.price}</h1>
        <h1>Hello React2</h1>
        </>
    )
}

export default Basic1
