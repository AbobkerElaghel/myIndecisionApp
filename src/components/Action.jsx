import React from 'react';

const Action = props => (
    <div>
        <button className="big-old-button" disabled={!props.hasOptions} onClick={props.handlePick}>Press Me</button>
    </div>
);
export default Action;