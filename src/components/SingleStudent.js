import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Student from '../../server/db/Student';

const SingleStudent = (student) => {
    return (
        <div id='student_info'>
            <h1>{student.firstName} {student.lastName} {student.email}</h1>
        </div>
    );
};

const mapStateToProps = ({ students }) => ({
    students
})

export default connect(mapStateToProps)(SingleStudent);
