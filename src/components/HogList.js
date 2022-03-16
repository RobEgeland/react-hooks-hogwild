import react, {useState} from "react";
import HogCard from "./HogCard";



function HogList({hogs}) {
    const [selectedHog, setSelectedHog] = useState("All")
    

    function changeSelectedHog(name) {
        setSelectedHog(name)
    }
    return (
        <div className="ui grid container">
            {hogs.map((hog) => <HogCard selectedHog={selectedHog} changeSelectedHog={changeSelectedHog} key={hog.name}  image={hog.image} name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} highestMedal={hog.highestMedalAchieved} />)}
            
        </div>
    )
}

export default HogList;