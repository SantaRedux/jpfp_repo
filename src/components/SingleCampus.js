import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Campus from '../../server/db/Campus';

const SingleCampus = async(campus) => {
    return (
        <div id='crampus_info'>
            <h1>{campus.firstName} {campus.lastName}</h1>
            <p>At {campus.address}</p>
        </div>
    );
};

const mapStateToProps = ({ campuses }) => ({
    campuses
})

export default connect(mapStateToProps)(SingleCampus);
