import React from 'react';
import { connect } from 'react-redux';

const CatFact = props => {
    return (
        <>
            {props.error ? <p>{props.error}</p> : <p>{props.fact}</p>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        fact: state.fact,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(CatFact)