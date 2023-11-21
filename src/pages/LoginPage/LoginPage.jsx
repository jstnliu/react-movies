import { useState } from "react"
import './LoginPage'
export default function LoginPage({ setUser }) {

    const [inputValue, setInputValue] = useState('')

    const handleInput = event => {
        setInputValue(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setUser(inputValue)
    }

  return (
    <>
        <h1>Enter a Username</h1>
        <form onSubmit={ handleSubmit } >
            <label>Username: </label>
            <input type='text' onChange={ handleInput } />
            <button type='submit'>Enter</button>
        </form>
    </>
)
}
