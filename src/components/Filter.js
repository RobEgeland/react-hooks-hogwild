import react from "react";

function Filter({filterGreased, setIsGreased, isgreased, name, setName, weight, setWeight, filterName, filterWeight}) {

    function handleChange() {
        if(isgreased === false) {
            setIsGreased(true)
        }else {
            setIsGreased(false)
        }
        filterGreased()
    }

    function handleNameChange() {
        if(name === false) {
            setName(true)
        }else {
            setName(false)
        }
        filterName()
    }

    function handleWeightChange() {
        if(weight === false) {
            setWeight(true)
        }else {
            setWeight(false)
        }
        filterWeight()
    }
        
    return (
        <div className="filterWrapper">
            <button type="text" onClick={handleNameChange}>Name</button>
            <button type="text" onClick={handleWeightChange}>Weight</button>
            <button onClick={handleChange}>{isgreased ? "Show All" : "Show Greased"}</button>  
        </div>
    )
}

export default Filter;