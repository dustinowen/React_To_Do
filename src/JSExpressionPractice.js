export default function JSPractice() {


    const string = "Dustin"
    const bestNumber = 18
    const randomNumber = Math.floor(Math.random() * 100)
    const favColors = ["ghost whisperer", "purple", "teal"]
    const favoritePet = {
        name: "Ruke",
        age: "3.5 years",
        isAlwaysHungry: true
    }
    let ifMessage
    {
        if (randomNumber <= 50) { ifMessage = "heads" } else { ifMessage = "tails" }
        
        function repeatString(str, num) {
            return str.repeat(num)
        }


        return (
            <div>
                <li>String: {repeatString(string, bestNumber)}</li>
                <li>Number: {bestNumber}</li>

                <li>Booleans, null & undefined: {true && "happy"}{null || "friend"}{undefined || "!!!"}</li>
                {/* Ternary Statements return some value */}
                {/* 1. JS conditional ? */}
                {/* Desired value -> "heads" */}
                {/* 3. Separator: */}
                {/* 4. Default value -> "tails" */}

                <li>{randomNumber <= 50 ? "Heads" : "Tails"}</li>
                <li>{ifMessage}</li>

                <li>Fav Colors Variable: {favColors}</li>
                <li>Fav Colors Variable: {favColors.join(", ")}</li>
            
                {/* {favoritePet}   this will not work */}
                {favoritePet.isAlwaysHungry ? <h2>"NOM NOM NOM"</h2> : null}
            </div>

        )
    }
}
