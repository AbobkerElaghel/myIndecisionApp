import React from 'react';

export default class AddOptions extends React.Component{
     state = {
        error : undefined
    };

    hindleAddOption = e => {
        e.preventDefault();
        const option = e.target.elements.inputField.value;
        e.target.elements.inputField.value = '';
        const error = this.props.addOption(option);
        if(error){
            this.setErrorMessage(error);
        }
    };

    setErrorMessage = error => {
        this.setState(() => ({error}));
        setTimeout(() => (this.setState(() => ({error: undefined}))),5000);
    };

    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.hindleAddOption}>
                    <input className="add-option__input" name="inputField" type="text"/>
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}



