import React from 'react';

import { connect } from 'react-redux';
import { eat, nap, play } from "../redux/actions/activity";

const Activity = ({ activity, eat, nap, play }) => {
    return (
        < div >
            <h2>THE CAT IS: { activity }</h2>
            <button onClick={ () => eat() }>Eating</button>
            <button onClick={ () => nap() }>Napping</button>
            <button onClick={ () => play() }>Playing</button>
        </div >
    );
};


// THIS IS THE SUBSCRIBER!!!!
// It listens for changes in state
// IT SUBSCRIBES to the state changes 

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}


// This is the DISPATCHER
// It dispatches the actions to Redux

const mapDispatchToProps = dispatch => {
    return {
        eat: () => dispatch(eat()),
        nap: () => dispatch(nap()),
        play: () => dispatch(play())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Activity);