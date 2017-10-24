import React from 'react';

export class Basics extends React.Component {

  turnImageIntoHotdog(e){
    // turns src attribute into an image of a hotdog
    e.target.setAttribute('src', "https://i.imgur.com/zkPS0Sn.png");
  }

  // for the using this.function event handler
  someOtherHandler() {
    alert("This handler was handled");
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
        <img src={kittyImage} alt={randomText} />

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
        <h3>Simple Image Change</h3>
        <p>Click on the burger to turn it into a hotdog</p>
        <img src={burgerImage} alt={randomText} onClick={this.turnImageIntoHotdog} />
        <h3>As a Prop</h3>
        <PassMeAHandlerProp onClick={this.someOtherHandler} />

        <h2>Using Props</h2>
        <h3>Defaults With this.defaultProps</h3>
        <PassMeProps />
        <h3>Passing Props</h3>
        <PassMeProps
          name="A Fancy Name"
          text="Some text that isn't Lorem Ipsum."
        />
        <h3>Props Children</h3>
        <ListPropsChildren>
          <li>Child One</li>
          <li>Child Two</li>
        </ListPropsChildren>

        <h2>Using State</h2>
        <SomeStateMagic />
      </div>
    );
  }
}

class PassMeAHandlerProp extends React.Component {
  // on click it executes the function passed via onClick prop
  render() {
    return (
      <p onClick={this.props.onClick} >
        Click me to handle a click
      </p>
    );
  }
}

class PassMeProps extends React.Component {
  // takes the props 'name' and 'text'
  render() {
    return (
      <p>
        <b>Name:</b> {this.props.name}<br />
        <b>Text:</b> {this.props.text}
      </p>
    );
  }
}
// The goofy way to set defaultProps in JS
PassMeProps.defaultProps = {
  name: "Default Name",
  text: "Some default text. Maybe some Lorem Ipsum stuff.",
};

class ListPropsChildren extends React.Component {
  render() {
    // renders all elements inside of the Components tags within ul
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

class SomeStateMagic extends React.Component {
  constructor(props) {
    // remember to give the super it's props as to not break stuff
    super(props);
    // setting the initial state
    this.state = {
      someText: "Some text that is stored in this.state",
      someBool: true,
    };
    // remember this needs to be here because it uses "this"
    // https://reactjs.org/docs/handling-events.html
    this.toggleStateText = this.toggleStateText.bind(this);
  }

  toggleStateText() {
    // switch from true to false and vice versa
    const newBool = this.state.someBool ? false : true;

    /*
     * Sure you could just change an attribute,
     * but setState calls render()
     */
    if (newBool) {
      this.setState({
        someText: "You toggled, now this.state.someText is this text",
        someBool: newBool,
      });
    } else {
      this.setState({
        someText: "You toggled again... you see where this is going?",
        someBool: newBool,
      });
    }
  }

  // click the component to change the state
  render() {
    return (
      <div onClick={this.toggleStateText}>
        <p>Click anywhere in here to change state<br />
        {this.state.someText}</p>
      </div>
    );
  }
}
