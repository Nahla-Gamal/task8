import React, { useState } from 'react'
import "./InputSection.css"
import flowerImg from "../../assets/flower.png"


function InputSection(props) {
    const [ inputValue, setinputValue] = useState("")

    function handleonClick() {
       props.x(inputValue)
       setinputValue("")
    }

    function handleonChange(event) {
        setinputValue(event.target.value)
      }

  return (
    <div className='addpost'>
       <img className="profile-pic" src={flowerImg} />
        <input type="textarea" placeholder="Add a post..." value={inputValue} onChange={handleonChange}></input>
        <button onClick={handleonClick}>
            Send
        </button>
    </div>
  )
}

export default InputSection