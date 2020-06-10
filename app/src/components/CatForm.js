import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

const CatForm = props => {
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }

    return (
    <>
        {props.isFetchingData ? <div>We are fetching data</div> : <button onClick={handleGetData}>Get a random fact</button>}
    </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getData })(CatForm)