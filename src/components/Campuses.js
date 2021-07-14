import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Campuses = ({ campuses }) => {
    return (
        <ul>
            {campuses.map((campus) => {
                return (
                    <li key={campus.id}>
                        <h2>
                            <Link to={`./campuses/${campus.id}`}>{campus.name}</Link>
                        </h2>
                    </li>
                );
            })}
        </ul>
    );
};

const mapStateToProps = ({ campuses }) => ({
    campuses
})

export default connect(mapStateToProps)(Campuses);