import $ from 'jquery'
import React, { useRef } from "react";

function AmountInput({ section }) {

    const countRef = useRef(1)

    const changeAmount = (action) => {


        // change value
        if (action === 'subtract') {
            // cant subtract if at 1
            if (countRef.current > 1) {
                countRef.current--
            }
        } else {
            countRef.current++
        }

        // Update count
        if (section === 'to-get') {
            $(".to-get-number").html(countRef.current)
        } else {
            $(".already-have-number").html(countRef.current)
        }
        
    }

    return(
        <div className="amount-input">
            <div onClick={() => changeAmount('subtract')} className="amount-input-action amount-input-subtract">-</div>
            <div className={(section === 'to-get') ? "amount-input-number to-get-number" : "amount-input-number already-have-number"}>1</div>
            <div onClick={() => changeAmount('add')} className="amount-input-action amount-input-add">+</div>
        </div>
    )
}

export default AmountInput