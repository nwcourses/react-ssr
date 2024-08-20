import React from "react";

export default function Counter(props) {
    console.log("rendering the client component...");
    const [counter,setCounter] = React.useState(0);
    return <div>
        <h2>This is counter component #{props.id}</h2>
        <input type='button' value='Click!' onClick={buttonClicked} />
        <br />
        You have clicked {counter} times.
    </div>;

    function buttonClicked() {
        setCounter(counter+1);
    }
}
