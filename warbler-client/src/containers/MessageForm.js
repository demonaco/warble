import React, {Component} from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/message";

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }


handleNewMessage = event => {
    event.preventDefault();
};

    render(){
        return (
            <form onSubmit={this.handleNewMessage}>
                {this.props.errors && (
                    <div className="alert alert-danger">
                        {this.props.errors}
                    </div>
                    )}
            </form>
        )
    }

}



function mapStateToProps(state) {
    return {
        errors: state.errors
    };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm); 