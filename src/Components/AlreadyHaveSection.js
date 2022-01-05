import React, { useRef } from "react";

function AlreadyHaveSection({ have, addAlreadyHave, removeAlreadyHave }) {

    const addAlreadyHaveRef = useRef()

    const add = () => {
        const value = addAlreadyHaveRef.current.value

        if (value !== "") {

            // check grocery doesn't already exist
            var alreadyExists = false
            have.forEach(grocery => {
                if (grocery.name === value) {
                    alreadyExists = true
                }
            })
            
            if (!alreadyExists) {
                addAlreadyHave(value)
            }

            addAlreadyHaveRef.current.value = ""
        }
    }

    const remove = (key) => {
        removeAlreadyHave(key)
    }

    return(
        <div className="section already-have-section">

            <h2 className="already-have-title">Already Have</h2>

            <div className="add-already-have-section">
                <input ref={addAlreadyHaveRef} className="add-already-have-input add-name" type="text"/>
                <button onClick={() => add()} className="add-already-have-button">Add</button>
            </div>

            <ul className="already-have-list">
                {
                    have.map(grocery => {
                        return <li key={grocery.key} className="grocery already-have-grocery">
                            <div className="grocery-name-and-amount">
                                <h3 className="grocery-amount">{grocery.amount}</h3>
                                <h3 className="already-have-grocery-name">{grocery.name}</h3>
                            </div>
                            <button onClick={() => remove(grocery.key)} className="ran-out-btn">Ran Out</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default AlreadyHaveSection