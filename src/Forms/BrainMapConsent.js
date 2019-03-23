import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";

var infoObj;
// ID 1234 will need to be replaced
var url = 'api/children/1234/forms/BrainMapConsentForm';
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7IlVzZXJJRCI6Ijk4NzYiLCJIYXNoIjpudWxsLCJJc0FkbWluIjowLCJVc2VyRmlyc3ROYW1lIjoiIiwiVXNlckxhc3ROYW1lIjoiIiwiUGFzc3dvcmQiOiJmODY5Y2UxYzg0MTRhMjY0YmIxMWUxNGEyYzg4NTBlZCIsIkVtYWlsIjoiYWJpZ2FpbEBnbWFpbC5jb20ifSwiaWF0IjoxNTUyNjYyODY4LCJleHAiOjE1NTI2ODA4Njh9.2j_MnJ6oMvQFqD8V3578ZNusrZYv2wfN3ss25csyK54';

class BrainMapConsent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed:false
        };

        this.goBack = this.goBack.bind(this);

    }
    infoObj = {values: {"StudentName":"ChaseMaggio", "ParentName":"Heidi", "Date":"Feb"}}; //, "ConsentCheck":""};

    goBack(event) {
        window.location.reload();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }

    updateFields() {
        let fields = this.state.fields;
        let infoObj = this.infoObj;
        infoObj.StudentName = fields["studentName"];
        infoObj.ParentName = fields["parentName"];
        infoObj.Date = fields["date"];
        // infoObj.ConsentCheck = fields["consentCheck"];
    }

    populateFields() {
      let fields = this.state.fields;
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            if (!fields["studentName"]) {
                formIsValid = false;
                errors["studentName"] = "Cannot be empty";
            }
            if (!fields["parentName"]) {
                formIsValid = false;
                errors["parentName"] = "Cannot be empty";
            }
            if (!fields["date"]) {
                formIsValid = false;
                errors["date"] = "Cannot be empty";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateFields();
        this.postToDB();
        // this.componentDidMount();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                console.log("pressed submit");
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.updateFields();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.postToDB();
        // this.componentDidMount();
        //back to homepage
        this.props.history.push("/parenthome");
    }

    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
      infoObj = JSON.stringify(this.infoObj);
        // console.log(infoObj);
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: infoObj
        });
    }

    fetchFromDB = async () => {
        // infoObj = JSON.stringify(this.infoObj);
        // console.log(infoObj);
        const response = await fetch(url, {
                      method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.state.fields["studentName"] = body.Form[0].StudentName;
        this.state.fields["parentName"] = body.Form[0].ParentName;
        this.state.fields["date"] = body.Form[0].Date;
        // this.state.fields["consentCheck"] = body[0].ConsentCheck;
        console.log(this.state.fields)
        return body;
    };

    renderFields() {
        return (
          <fieldset>
              <div>
                  <FormGroup>
                      <Col sm={12}>
                          <Label sm={12} className={"checkBox"}>
                              <Input type="checkbox"
                                     ref="consentCheck"
                                     className="error"/>
                              I hereby give release to complete a brain map as part of the Jacob’s Ladder initial evaluation process.
                          </Label>
                      </Col>

                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Student Name</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="studentName"
                              value={this.state.fields["studentName"] || ""}
                              onChange={this.handleChange.bind(this, "studentName")}
                              className="error"
                              invalid={this.state.errors["studentName"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["studentName"] }>{this.state.errors["studentName"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Parent/Guardian  Name</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="parentName"
                              value={this.state.fields["parentName"] || ""}
                              onChange={this.handleChange.bind(this, "parentName")}
                              className="error"
                              invalid={this.state.errors["parentName"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["parentName"]}>{this.state.errors["parentName"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Date</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="date"
                              value={this.state.fields["date"] || ""}
                              onChange={this.handleChange.bind(this, "date")}
                              className="error"
                              invalid={this.state.errors["date"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["date"]}>{this.state.errors["date"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
              </div>
          </fieldset>
        );
    }


    renderText() {
        return(
            <div>
                <div className="body-of-text">
                    <div>
                        The initial evaluation brain map includes the following:
                    </div>
                    <div className="closer-body-of-text">
                        <div>
                        -Recording of EEG
                        </div>
                        <div>
                            -Review and analysis of EEG to generate brain map
                        </div>
                        <div>
                        -Feedback regarding the brain map from a Neurofeedback Practitioner
                        </div>
                    </div>
                    <div>
                        *Note: Please let us know if the client has any sensitivities on the head or scalp. The recording of an EEG is a non-invasive method of measuring surface electrical activity in the brain. It is recorded with a 19-electrode medical-grade cap, and a water/saline based conductive gel. The EEG reading can be affected by medications, diet changes, sickness, and hair products. Avoid using conditioner, hair gel,and hair spray the day of the recording. Please make sure to limit any drastic changes in the client’s typical day-to-day routine as much as possible.
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <Header loggedIn = {true}/>
                <div className="form-title">
                    <Row >
                        <div className = "parent-top col-9">
                            <h2>Brain Map Consent Form</h2>
                        </div>
                    </Row>
                </div>

                <div className={"frame p-4"} data-spy="scroll">
                    <div> {this.renderText()} </div>
                    <div> {this.renderFields()} </div>
                </div>

                <Row className={"p-2 justify-content-center"}>
                    <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                        Save and Quit
                    </Button>

                    <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    };
}

export default BrainMapConsent;