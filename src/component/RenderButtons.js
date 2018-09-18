import React from "react";
import axios from "axios";
import Completeness from './Completeness'


class RenderButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            res: ""
        }
    }

    componentDidMount(){
        axios({
            method:'get',
            url:'https://sms01110.npr.nornick.ru/OTCS/livelink.exe?func=nnsodwebui.displaybuttons'

        })
            .then((response) => {
                const isFull = response.data.completeness.isFull;
                const show = response.data.completeness.show;
                this.setState({ isFull, show });
            });

    }


    render() {

        return (
            <div>
                <Completeness isFull={this.state.isFull} show = {this.state.show}/>
            </div>
        )
    }

}

export default RenderButtons
