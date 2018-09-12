import {Component} from "react";

class Completeness extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({value: event.target.value});
    }

    render() {
        return (

            <select className={"nnsod-actions-neutral"}  value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        )
    }
}
