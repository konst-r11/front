import { Component } from "react";

export default class TryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          neuralResponse: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      async handleChange(event) {
        
        if (event.target.value) {
            let s = "";
            let r = await (fetch("/api", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({request: event.target.value})
            }).then(r => r.json()));

            if (r.response[0] == "1") {
                s += "неадекватное";
            } 

            if (r.response[1] == "1") {
                s += (s.length ? ", " : "") + "угрожающее"
            }

            if (r.response[2] == "1") {
                s += (s.length ? ", " : "") + "взрослый контент"
            }
            this.setState({neuralResponse: "Написанное сообщение распознано как " + (s.length ? s : "нормальное")});
        } else {
            this.setState({neuralResponse: ""});
        }
  
        
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
      
    render() {
        return (
            <>
                <div id="console">
                    <div className="jquery-console-inner">           
                    
                        <div className="form__group field">
                        
                            <span className="jquery-console-prompt-label" style={{ display: "block" }}>
                                <input autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Напиши любой текст сюда" className="form__field" onChange={this.handleChange} name='try' id='try'>
                        </input><label for="try" className="form__label">Напиши любой текст сюда</label>
                            </span>


                            {this.state.neuralResponse}
                            
    {/*                         
                            <iframe name="votar" style={{display:"none"}}>
                            </iframe>
                            
                            <form onSubmit={() => console.log("input)")} target="votar">
                                <input className="jquery-console-prompt" name="request" >
                                </input>
                            </form> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}