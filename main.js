import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Chuck Norris'
        }
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input type="text" onChange={this.updateText.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));