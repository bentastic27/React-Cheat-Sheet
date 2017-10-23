import React from 'react';

export class Basics extends React.Component {

  turnImageIntoHotdog(e){
    // turns src attribute into an image of a hotdog
    e.target.setAttribute('src', "https://i.imgur.com/zkPS0Sn.png");
  }

  render() {
    // for basic variable exampls
    const kittyImage = "https://i.imgur.com/xdmtIh2.jpg";
    const burgerImage = "https://i.imgur.com/Wp3o7Yx.jpg";
    const randomText = "Some random text to use for things";

    // for the list example
    const demoJSXList = ['one', 'two', 'three'].map((value, index) => {
      return <li key={"demoJSXList_" + index}>{value}</li>;
    });

    // for the ternary example
    const someBools = [true, false];

    // for the if statement example
    let message;
    if ("A truthy thing") {
      message = <p>I'm only here because of a truthy if statement.</p>;
    } else {
      message = <p>You'll likely not see me ever.</p>;
    }

    return (
      <div>
        <h1>Some basic stuff</h1>

        <h2>Some variables/statements n' things</h2>
        <p>Initial App object in src/App.js</p>
        <p>Demonstrating JS statements in JSX. <b>2 +3 = {2 + 3}</b>.</p>
        <p>Pretty much any single statement can go here. Take some PI with Math.PI: {Math.PI.toFixed(10)}</p>
        <p>Could always render some images using variables too:</p>
        <img src={kittyImage} title={randomText} />

        <h2>Lists and keys</h2>
        <p>Rendering a ul with an array.</p>
        <ul>{demoJSXList}</ul>

        <h2>If statements, ternary stuff and &&</h2>
        <p><i>Probably best demonstrated in the code... but hey, we do our best around here.</i></p>
        <h3>If Statement:</h3>
        {message}
        <h3>Ternary: (fit's in braces)</h3>
        <p>{true ? "Showing because true" : "Don't see me"}</p>
        <p>{false ? "Don't see me" : "Showing because false"}</p>
        <h3>The && thing (also fits in braces)</h3>
        {true && <p>Showing because of a true && thing</p>}

        <h2>Basic Event Handler</h2>
        <p>Click on the burger to turn it into a hotdog</p>
        <img src={burgerImage} onClick={this.turnImageIntoHotdog} />
      </div>
    );
  }
}
