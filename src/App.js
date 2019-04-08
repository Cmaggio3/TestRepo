import React, { Component } from 'react';
import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";
import ParentTable from "./Parent-Home/ParentTable";
import BrainMapConsent from './Forms/BrainMapConsent';
import EnrollmentProcess from './Forms/EnrollmentProcess';
import ConsentAndMedicalRelease from './Forms/ConsentAndMedicalRelease';
import ClientHistoryAndInformation from "./Forms/ClientHistoryAndInformation";
import ResetPassword from './ResetPassword';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faPlusCircle);

class App extends Component {
    state = {
        data: null
    };


  render() {
    return (
        <div>
        <Router>
        <div>
            <Route exact path = "/" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/adminhome" component = {AdminHome}/>
            <Route path = "/parenthome" component = {ParentTable}/>
            <Route path = "/bmc" component = {BrainMapConsent}/>
            <Route path = "/ep" component = {EnrollmentProcess}/>
            <Route path = "/cmr" component = {ConsentAndMedicalRelease}/>
            <Route path = "/chai" component = {ClientHistoryAndInformation}/>
            <Route path = "/resetpassword" component = {ResetPassword}/>
        </div>
        </Router>
        </div>


    );
  }
}

export default App;
