import react from "react";
import ConditionalCard from "./ConditionalCard";

function HogCard({selectedHog, image, name, specialty, weight, greased, highestMedal, changeSelectedHog}) {
    return (
        <div onClick={() => changeSelectedHog(name)} className="ui eight wide column pigTile">
            <img src={image} width="450" height="400"/>
            <h3>{name}</h3>
            {name === selectedHog ? <ConditionalCard specialty={specialty} weight={weight} greased={greased} highestMedal={highestMedal} /> : null}
        </div>
    )
}

export default HogCard;