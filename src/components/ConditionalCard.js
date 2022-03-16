import react from "react";

function ConditionalCard({specialty, weight, greased, highestMedal}) {
    return (
        <div>
            <h4>Specialty: {specialty}</h4>
            <h4>Weight: {weight}</h4>
            <h4>{greased ? "Is Greased" : "Is Not Greased"}</h4>
            <h4>Highest Medal Achieved: {highestMedal}</h4>
        </div>
    )
}

export default ConditionalCard;