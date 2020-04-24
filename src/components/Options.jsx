import React from 'react';
import Option from "./Option.jsx";

const Options = props => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.removeAllOptions}>Remove Everything</button>
        </div>
        {!props.options.length && <p className="widget__message">Please add an option to get Started</p>}
        {props.options.map((option, index) => <Option removeOneClick={props.removeOneOption} option={option} key={index} count={++index}/>)}
    </div>
);

export default Options;