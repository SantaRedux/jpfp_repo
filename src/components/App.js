import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Students from './Students';
import Campuses from './Campuses';
import { fetchStudents } from '../store';
// import Navbar from './Navbar';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';



class App extends Component {
    componentDidMount() {
        this.props.load();
    }
    
    render() {
        return (
            <Router>
                <div id='main'>
                    <h1>
                        {/* <Link to='/students'>Students ({this.props.students.length})</Link>
                        <Link to='/campuses'>Campuses ({this.props.campuses.length})</Link> */}
                        <Link to='/students'>Students</Link>
                        {/* <Link to='/campuses'>Campuses</Link>                     */}
                    </h1>
                    <Switch>
                        <Route exact path='/' component={Navbar}></Route>
                        <Route exact path='/students' component={Students} />
                        {/* <Route exact path='/campuses' component={Campuses} />
                        <Route exact path='/campuses/:id' component={SingleCampus} />
                        <Route exact path='/campuses/:id' component={SingleStudent} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = ({ students, campuses }) => ({
    students, campuses
});

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(fetchStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)