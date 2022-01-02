import './App.css';
import React, { useState } from "react";
import ToGetSection from './Components/ToGetSection'
import AlreadyHaveSection from './Components/AlreadyHaveSection'


// TODO: characterizing groceries to always have so that when runs out, goes back on the to get list
// TODO: show groceries already have
// TODO: ability to add groceries already have
// TODO: ability to delete groceries from already have when they run out
// TODO: Account for groceries quantity
// TODO: When adding to get, check that doesn't already exist in already have, if so show popup


function App() {

  var [groceries, setGroceries] = useState({
    toGet: [],
    toAlwaysHave: [],
    have: []
  })

  const addToGet = (name) => {
    setGroceries({
      ...groceries,
      toGet: [
        ...groceries.toGet,
        {
          name: name,
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
      
      <h1>Groceries</h1>

      <ToGetSection have={groceries.have} toGet={groceries.toGet} addToGet={addToGet} switchToAlreadyHave={switchToAlreadyHave} />

      <AlreadyHaveSection removeAlreadyHave={removeAlreadyHave} addAlreadyHave={addAlreadyHave} have={groceries.have} />

    </div>
  );
}

export default App;
