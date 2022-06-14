// create your App component here
import React, { useState, useEffect } from "react";

function App () {
    const [isLoaded, setIsLoaded] = useState(false);
    const [randomImg, setRandomImg] = useState("");
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setRandomImg(data.message);
            });
    }, [])


    return (
        <div>
           <p>{isLoaded? <img src={randomImg} alt="A Random Dog" /> : "Loading..." }</p>
        </div>
    )
}

export default App;