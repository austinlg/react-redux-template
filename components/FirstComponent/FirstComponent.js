import React from 'react';

export default class FirstComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.firstActions.addContent({
            title: "Hello, world!"
        })
    } 

    render() {            
        return (
            <h1> {this.props.content.title} </h1>
        )
    }
}