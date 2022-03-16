import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	const [isgreased, setIsGreased] = useState(false)
	const [name, setName] = useState(false)
	const [weight, setWeight] = useState(false)

	const filterArr = hogs.filter((hog) => {
		if(isgreased === true){
			return hog.greased === true
		}else if(weight === true) {
			return hogs.sort((hog1, hog2) => hog1.weight - hog2.weight)	
		}else if(name === true){
			return hogs.sort((hog1, hog2) => (hog1.name > hog2.name) ? 1 : -1)
		}else {
			return hog
		}
		
	})
	function filterGreased() {
		setPigs(filterArr)
		
	}

	function filterName() {
		setPigs(filterArr)
	}

	
	function filterWeight() {
		setPigs(filterArr)
	}

	
	return (
		<div className="App">
			<Nav />
			<Filter 
			filterGreased={filterGreased} 
			setIsGreased={setIsGreased} 
			isgreased={isgreased}
			name={name}
			setName={setName}
			weight={weight}
			setWeight={setWeight} 
			filterName={filterName}
			filterWeight={filterWeight}
			/>
			<HogList hogs={filterArr} />
		</div>
	);
}

export default App;
