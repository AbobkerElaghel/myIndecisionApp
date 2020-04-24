import React from 'react';
import Header from "./Header.jsx";
import Action from "./Action.jsx";
import Options from "./Options.jsx";
import AddOption from "./AddOptions.jsx";
import OptionModal from "./OptionModal.jsx";

export default class IndestionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedMessage: undefined
    };

    componentDidMount(){
        const options = JSON.parse(localStorage.getItem('options'));
        if(options){
            this.setState(() => ({options}));
        }
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const stringifiedObject = JSON.stringify(this.state.options);
            localStorage.setItem('options', stringifiedObject);
        }
    };

    handlePick = () => {
      const randomNumber = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumber];
      this.setState(() => ({selectedMessage: option}));
    };

    removeAllOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    addOption = option => {
        if(!option){
            return "Enter a valid input";
        } else if (this.state.options.indexOf(option) !== -1){
            return "The Value you entered is already exits";
        }
        this.setState(currentStats => ({options: currentStats.options.concat(option)}));
    };

    removeOneOption = option => {
        this.setState(prevState => ({options : prevState.options.filter(optionVal => optionVal !== option)}));
    };

    clearOption = () => {
        this.setState(() => ({selectedMessage: undefined}));
    };

    render(){
        return (
            <div>
                <Header />
                  <div className="container">
                    <Action hasOptions={!!this.state.options.length} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options removeOneOption={this.removeOneOption} removeAllOptions={this.removeAllOptions} options={this.state.options} />
                        <AddOption addOption={this.addOption}/>
                    </div>
                  </div>
                <OptionModal selectedMessage={this.state.selectedMessage} clearOption={this.clearOption}/>
            </div>
        )
    }
};

IndestionApp.defaultProps  = {
    options : []
};