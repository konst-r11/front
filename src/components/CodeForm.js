import {Component} from 'react';

export default class Codeform extends Component {
    state = {
        currentButton: Object.keys(this.props.buttons)[0],
    }

    handleClick = event => {
        this.setState({
            currentButton: event.target.innerText,
            key: event.target.key
        });
    }

    render() {
        
        let btns = []
        for (let i of Object.keys(this.props.buttons)) {
            btns.push(<button style={{backgroundColor: ""}} key={btns.length} onClick={this.handleClick}>{i}</button>)
        }

        return (
            <code className="text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center">
                      <div className="buttons border-bottom">
                        {btns.map((e, i) => {e.props.style.backgroundColor = (this.state.currentButton == e.props.children) ? "#198754" : "";return e})}
                      </div>

                      <div className="text">
                        {this.props.buttons[this.state.currentButton]}
                      </div>
            </code>
        )
    }
}