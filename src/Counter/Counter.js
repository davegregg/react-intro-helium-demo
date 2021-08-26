import { useState } from 'react'
import './Counter.css'

function Counter () {
    const [count, setCount] = useState(0) // hook
    
    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <button onClick={onIncrement}>+</button>
            Counter: {count}
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

export default Counter