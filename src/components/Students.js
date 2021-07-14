import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = () => {
    console.log('loaded')
    return (
        <ul>
            {students.map((student) => {
                return (
                    <li key={student.id}>
                        <h2>
                            <Link to={`./students/${student.id}`}>{student.name}</Link>
                        </h2>
                    </li>
                );
            })}
        </ul>
    );
};

const mapStateToProps = ({ students }) => ({
    students
})

export default connect(mapStateToProps)(Students);