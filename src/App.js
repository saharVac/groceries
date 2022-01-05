import './App.css';
import React, { useState } from "react";
import ToGetSection from './Components/ToGetSection'
import AlreadyHaveSection from './Components/AlreadyHaveSection'


// TODO: characterizing groceries to always have so that when runs out, goes back on the to get list
// TODO: Account for groceries quantity
// TODO: Dedfining essential grocery: how much to get at a time
// TODO: consolidate grocery element to a Component

function App() {

  var [groceries, setGroceries] = useState({
    toGet: [],
    toAlwaysHave: [],
    have: []
  })

  const addToGet = (name, amount) => {
    setGroceries({
      ...groceries,
      toGet: [
        ...groceries.toGet,
        {
          name: name,
          amount: amount,
          key: name
        }
      ]
    })
  }

  const addAlreadyHave = (name) => {
    console.log("Adding already having ", name)
    setGroceries({
      ...groceries,
      have: [
        ...groceries.have,
        {
          name: name,
          key: name
        }
      ]
    })
  }

  const switchToAlreadyHave = (key) => {
    // Remove grocery from to get and insert into already have
    
    var grocerySwitching

    const toGet = groceries.toGet.filter(grocery => {
      // if at grocery to switch
      if (grocery.key === key) {
        grocerySwitching = grocery
        return false
      }
      return true
    })

    // update to get list and add to already have
    setGroceries({
      ...groceries,
      toGet: toGet,
      have: [
        ...groceries.have,
        grocerySwitching
      ]
    })
  }

  const removeAlreadyHave = (key) => {
    const newHave = groceries.have.filter(grocery => grocery.key !== key)
    setGroceries({
      ...groceries,
      have: newHave
    })
  }

  return (
    <div className="App">

      <header>
        <h1>Grocery List</h1>
      </header>

      <div className="view-selection-section">
        <button className="to-get-view-btn view-selection-btn">To Get</button>
        <button className="already-have-view-btn view-selection-btn">Alredy Have</button>
      </div>
      
      <ToGetSection have={groceries.have} toGet={groceries.toGet} addToGet={addToGet} switchToAlreadyHave={switchToAlreadyHave} />

      <AlreadyHaveSection removeAlreadyHave={removeAlreadyHave} addAlreadyHave={addAlreadyHave} have={groceries.have} />

    </div>
  );
}

export default App;
