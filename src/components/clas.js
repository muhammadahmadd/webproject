
import {Component} from 'react'
import {state} from 'react'

class Clas extends Component {

    constructor()
    {
        super()
        this.state = { 

            message:'THis is my class component'
        }
    }
    

    Change()
    {
        this.setState(
            {
                message:'Hello message change'
            }
        )
    }
    render() { 
        return (
        <div>

            <h1>{this.state.message}</h1>
            <button onClick={()=>this.Change()}>Change</button>
        </div>
        
        
        );
    }
}
 
export default Clas;