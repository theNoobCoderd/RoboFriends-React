import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor() {
        super();
        this.state = {
            gradientOnex: '',
            gradientTwox: ''
        }
    }

    changeGradient = (event) => {

        this.setState({
            gradientOnex : document.querySelector("#gradient-one"),
            gradientTwox : document.querySelector("#gradient-two")
        });

        document.body.style.background= "linear-gradient(to right, " + this.state.gradientTwox.value + " , "+ this.state.gradientOnex.value+")";

        console.log("test " + this.state.gradientOnex.value);
    }

    render() {
        return(
        <div style={{width: '10%'}}>
            <div>
                <div className="color-picker">
                    <input type="color" id="gradient-one" name="gradient-one" value={this.state.gradientOnex.value} onChange={this.changeGradient}/>
                    <input type="color" id="gradient-two" name="gradient-two" value={this.state.gradientTwox.value} onChange={this.changeGradient}/>
                </div>
            </div>
        </div>
        );
    };    

} 

export default ColorPicker;