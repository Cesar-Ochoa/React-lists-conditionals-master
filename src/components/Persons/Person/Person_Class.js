import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../HigherOrderComponents/auxiliary';
import withClass from '../../../HigherOrderComponents/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
        <Aux>
            <p onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p key="i2">{this.props.children}</p>
            <input 
            key="i3"
            //ref={(inputEl) => {this.inputElement = inputEl}}
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
        </Aux>
    )
    }
    
};

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
    //if the types doesn't match, you'll receive a warning
};
export default withClass(person, classes.person);

