import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.option}</p>
        <button className="button--link" onClick={e => props.removeOneClick(props.option)}>remove</button>
    </div>
);

export default Option;