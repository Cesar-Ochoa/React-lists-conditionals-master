import React from 'react';
import classes from './Person.css';
import Aux from '../../../HigherOrderComponents/auxiliary';
import withClass from '../../../HigherOrderComponents/withClass';
import PropTypes from 'prop-types';

const person = ( props ) => {
    console.log('[Person.js] rendering...');
    return (
    <Aux>
    
        <div className={classes.Person} >
            {props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
            <p key="i1"onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p key="i2">{props.children}</p>
            <input 
            key="i3" 
            ref={(inputEl) => {this.inputElement = inputEl}}
            type="text" 
            onChange={props.changed} 
            value={props.name} />
        </div>
    
    </Aux>
    );
}

person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
    //if the types doesn't match, you'll receive a warning
};

export default withClass(person, classes.person);

/*
const person = ( props ) => {
    console.log('[Person.js] rendering...');
    return (
    [
        <div className={classes.Person} >
            <p key="i1"onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>,
            <p key="i2">{props.children}</p>,
            <input key="i3" type="text" onChange={props.changed} value={props.name} />
        //</div>
    ]
    );
}
*/