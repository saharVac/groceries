import $ from 'jquery'
import React, { useRef } from "react";
import AmountInput from './AmountInput'

function ToGetSection({ have, toGet, addToGet, switchToAlreadyHave }) {

    const addToGetRef = useRef()

    const add = () => {
        const value = addToGetRef.current.value

        if (value !== "") {

            // check grocery doesn't already exist and that dont already have grocery
            var alreadyExists = false
            var alreadyHave = false

            toGet.forEach(grocery => {
                if (grocery.name === value) {
                    alreadyExists = true
                }
            })

            have.forEach(grocery => {
                if (grocery.name === value) {
                    alreadyHave = true
                    window.alert("Already Have " + grocery.name)
                }
            })
            
            if (!alreadyExists && !alreadyHave) {
                addToGet(value, $(".amount-input-number").html())
            }

            addToGetRef.current.value = ""
        }
    }

    const switchGrocery = (key) => {
        switchToAlreadyHave(key)
    }

    return(
        <div className="section to-get-section">

            <h2 className="to-get-title">To Get</h2>

            <div className="add-to-get-section">
                <AmountInput section="to-get" />
                <input ref={addToGetRef} className="add-to-get-input add-name" type="text"/>
                <button onClick={() => add()} className="add-to-get-button">Add</button>
            </div>

            <ul className="to-get-list">
                {
                    toGet.map(grocery => {
                        return <li key={grocery.key} className="grocery to-get-grocery">
                            <div className="grocery-name-and-amount">
                                <h3 className="grocery-amount">{grocery.amount}</h3>
                                <h3 className="to-get-grocery-name">{grocery.name}</h3>
                            </div>
                            <button onClick={() => switchGrocery(grocery.key)} className="switch-to-already-have-btn">purchased</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default ToGetSection