import React, {Component} from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Card,
    CardBody,
    Collapse,
    Button,
    ButtonToolbar,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";
import ReactTable from "react-table";

class ClientHistoryAndInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed: false,
            siblingColumns: [{
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Age',
                accessor: 'age'
            }, {
                Header: 'Gender',
                accessor: 'gender'
            }],
            siblingData: [{
                name: <input type="text" name="sib1Name"/>,
                age: <input type="text" name="sib1Age"/>,
                gender: <input type="text" name="sib1Gender"/>,
            }, {
                name: <input type="text" name="sib2Name"/>,
                age: <input type="text" name="sib2Age"/>,
                gender: <input type="text" name="sib2Gender"/>,
            }, {
                name: <input type="text" name="sib3Name"/>,
                age: <input type="text" name="sib3Age"/>,
                gender: <input type="text" name="sib3Gender"/>,
            }, {
                name: <input type="text" name="sib4Name"/>,
                age: <input type="text" name="sib4Age"/>,
                gender: <input type="text" name="sib4Gender"/>,
            }],

            devHistoryColumns: [{
                Header: 'Activity',
                accessor: 'devHistoryActivity'
            }, {
                Header: 'Years',
                accessor: 'devHistoryyears'
            }, {
                Header: 'Months',
                accessor: 'devHistorymonths'
            }, {
                Header: 'Not Yet Developed',
                accessor: 'devHistoryNa'
            }],
            devHistoryData: [{
                devHistoryActivity: 'Crawled on stomach',
                devHistoryYears: <Input type="select"
                                        name="crawlYears"
                                        id="crawlYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="crawlMonths"
                                         id="crawlMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNA: <Input type="select"
                                     name="crawlNa"
                                     id="crawlNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Crept on hands and knees',
                devHistoryYears: <Input type="select"
                                        name="creptYears"
                                        id="creptYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="creptMmonths"
                                         id="creptMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="creptNa"
                                     id="creptNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Walked',
                devHistoryYears: <Input type="select"
                                        name="walkYears"
                                        id="walkYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="walkMonths"
                                         id="walkMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="walkNa"
                                     id="walkNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Toilet trained',
                devHistoryYears: <Input type="select"
                                        name="toiletYears"
                                        id="toiletYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="toiletMonths"
                                         id="toiletMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="toiletNa"
                                     id="toiletNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'First word',
                devHistoryYears: <Input type="select"
                                        name="wordYears"
                                        id="wordYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                months: <Input type="select"
                               name="wordMonths"
                               id="wordMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="wordNa"
                                     id="wordNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Use of couplets (2 words together)',
                devHistoryYears: <Input type="select"
                                        name="coupletYears"
                                        id="coupletYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="coupletMonths"
                                         id="coupletMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="coupletNa"
                                     id="coupletNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: '3-4 word phrases',
                devHistoryYears: <Input type="select"
                                        name="phraseYears"
                                        id="phraseYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="phraseMonths"
                                         id="phraseMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="phraseNa"
                                     id="phraseNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Sentences',
                devHistoryYears: <Input type="select"
                                        name="sentenceYears"
                                        id="sentenceYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="sentenceMonths"
                                         id="sentenceMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="sentenceNa"
                                     id="sentenceNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Conversational language',
                devHistoryYears: <Input type="select"
                                        name="conversationYears"
                                        id="conversationYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="conversationMonths"
                                         id="conversationMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="conversationNa"
                                     id="conversationNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Reading',
                devHistoryYears: <Input type="select"
                                        name="readYears"
                                        id="readYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="readMonths"
                                         id="readMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="readNa"
                                     id="readNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }],
            otherDoctorsColumns: [{
                Header: 'Name',
                accessor: 'otherDrName'
            }, {
                Header: 'Specialty',
                accessor: 'otherDrSpecialty'
            }, {
                Header: 'Phone Number',
                accessor: 'otherDrPhone'
            }, {
                Header: 'Schedule of Service',
                accessor: 'otherDrSched'
            }],
            otherDoctorsData: [{
                otherDrName: <input type="text" name="doc1Name"/>,
                otherDrSpecialty: <input type="text" name="doc1Specialty"/>,
                otherDrPhone: <input type="text" name="doc1Phone"/>,
                otherDrSched: <input type="text" name="doc1Sched"/>
            }, {
                otherDrName: <input type="text" name="doc2Name"/>,
                otherDrSpecialty: <input type="text" name="doc2Specialty"/>,
                otherDrPhone: <input type="text" name="doc2Phone"/>,
                otherDrSched: <input type="text" name="doc2Sched"/>
            }, {
                otherDrName: <input type="text" name="doc3Name"/>,
                otherDrSpecialty: <input type="text" name="doc3Specialty"/>,
                otherDrPhone: <input type="text" name="doc3Phone"/>,
                otherDrSched: <input type="text" name="doc3Sched"/>
            }, {
                otherDrName: <input type="text" name="doc4Name"/>,
                otherDrSpecialty: <input type="text" name="doc4Specialty"/>,
                otherDrPhone: <input type="text" name="doc4Phone"/>,
                otherDrSched: <input type="text" name="doc4Sched"/>
            }],
            otherProgramsColumns: [{
                Header: 'School/Program Name',
                accessor: 'programName'
            }, {
                Header: 'Start Date',
                accessor: 'startDate'
            }, {
                Header: 'Primary Provider',
                accessor: 'provider'
            }, {
                Header: 'Phone Number',
                accessor: 'programPhoneNumber'
            }, {
                Header: 'May we contact the primary provider?',
                accessor: 'contactPermission'
            }],
            otherProgramsData: [{
                programName: <input type="text" name="program1name"/>,
                startDate: <input type="date" name="startdate1"/>,
                provider: <input type="text" name="provider1"/>,
                programPhoneNumber: <input type="tel" name="phonenumber1"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission1"
                                          id="contactpermission1">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program2name"/>,
                startDate: <input type="date" name="startdate2"/>,
                provider: <input type="text" name="provider2"/>,
                programPhoneNumber: <input type="tel" name="phonenumber2"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission2"
                                          id="contactpermission2">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program3name"/>,
                startDate: <input type="date" name="startdate3"/>,
                provider: <input type="text" name="provider3"/>,
                programPhoneNumber: <input type="tel" name="phonenumber3"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission3"
                                          id="contactpermission3">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program4name"/>,
                startDate: <input type="date" name="startdate4"/>,
                provider: <input type="text" name="provider4"/>,
                programPhoneNumber: <input type="tel" name="phonenumber4"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission4"
                                          id="contactpermission4">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            medicalConditionsColumns: [{
                Header: 'Medical Condition',
                accessor: 'medCondition'
            }, {
                Header: 'Select Yes or No',
                accessor: 'medConditionYN'
            }],
            medicalConditionsData: [{
                medCondition: 'Epilepsy/Seizures',
                medConditionYN: <Input type="select"
                                       name="epilepsy"
                                       id="epilepsy">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Diabetes',
                medConditionYN: <Input type="select"
                                       name="diabetes"
                                       id="diabetes">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Asthma',
                medConditionYN: <Input type="select"
                                       name="asthma"
                                       id="asthma">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Uses an Epi-Pen',
                medConditionYN: <Input type="select"
                                       name="epipen"
                                       id="epipen">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Other (please list in the box below)',
                yn: <Input type="select"
                           name="medConditionOther"
                           id="medConditionOther">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            suppliesColumns: [{
                Header: 'Supplies/Equipment',
                accessor: 'supplies'
            }, {
                Header: 'Select Yes or No',
                accessor: 'suppliesYN'
            }],
            suppliesData: [{
                supplies: 'Braces/Splints',
                suppliesYN: <Input type="select"
                                   name="brace"
                                   id="brace">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Feeding Support & Supplies',
                suppliesYN: <Input type="select"
                                   name="feedSupport"
                                   id="feedSupport">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Toileting Equipment',
                suppliesYN: <Input type="select"
                                   name="toiletEquip"
                                   id="toiletEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Mobility Equipment',
                suppliesYN: <Input type="select"
                                   name="mobilityEquip"
                                   id="mobilityEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Communication Equipment',
                suppliesYN: <Input type="select"
                                   name="communicationEquip"
                                   id="communicationEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Oxygen Tank',
                suppliesYN: <Input type="select"
                                   name="oxygenTank"
                                   id="oxygenTank">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Hearing Device',
                suppliesYN: <Input type="select"
                                   name="hearingDevice"
                                   id="hearingDevice">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Other',
                suppliesYN: <Input type="select"
                                   name="otherSupply"
                                   id="otherSupply">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            medsColumns: [{
                Header: 'Name',
                accessor: 'medsName'
            }, {
                Header: 'Dosage',
                accessor: 'medsDosage'
            }, {
                Header: 'Time(s) Given',
                accessor: 'medsTimeGiven'
            }, {
                Header: 'Frequency',
                accessor: 'medsFrequency'
            }, {
                Header: 'Purpose',
                accessor: 'medsPurpose'
            }, {
                Header: 'Potential Side Effects',
                accessor: 'medsSideEffects'
            }],
            medsData: [{
                medsName: <input type="text" name="med1Name"/>,
                medsDosage: <input type="text" name="med1Dosage"/>,
                medsTimeGiven: <input type="text" name="med1TimeGiven"/>,
                medsFrequency: <input type="text" name="med1Frequency"/>,
                medsPurpose: <input type="text" name="med1Purpose"/>,
                medsSideEffects: <input type="text" name="med1SideEffects"/>
            }, {
                medsName: <input type="text" name="med2Name"/>,
                medsDosage: <input type="text" name="med2Dosage"/>,
                medsTimeGiven: <input type="text" name="med2TimeGiven"/>,
                medsFrequency: <input type="text" name="med2Frequency"/>,
                medsPurpose: <input type="text" name="med2Purpose"/>,
                medsSideEffects: <input type="text" name="med2SideEffects"/>
            }, {
                medsName: <input type="text" name="med3Name"/>,
                medsDosage: <input type="text" name="med3Dosage"/>,
                medsTimeGiven: <input type="text" name="med3TimeGiven"/>,
                medsFrequency: <input type="text" name="med3Frequency"/>,
                medsPurpose: <input type="text" name="med3Purpose"/>,
                medsSideEffects: <input type="text" name="med3SideEffects"/>
            }, {
                medsName: <input type="text" name="med4Name"/>,
                medsDosage: <input type="text" name="med4Dosage"/>,
                medsTimeGiven: <input type="text" name="med4TimeGiven"/>,
                medsFrequency: <input type="text" name="med4Frequency"/>,
                medsPurpose: <input type="text" name="med4Purpose"/>,
                medsSideEffects: <input type="text" name="med4SideEffects"/>
            }, {
                medsName: <input type="text" name="med5Name"/>,
                medsDosage: <input type="text" name="med5Dosage"/>,
                medsTimeGiven: <input type="text" name="med5TimeGiven"/>,
                medsFrequency: <input type="text" name="med5Frequency"/>,
                medsPurpose: <input type="text" name="med5Purpose"/>,
                medsSideEffects: <input type="text" name="med5SideEffects"/>
            }, {
                medsName: <input type="text" name="med6Name"/>,
                medsDosage: <input type="text" name="med6Dosage"/>,
                medsTimeGiven: <input type="text" name="med6TimeGiven"/>,
                medsFrequency: <input type="text" name="med6Frequency"/>,
                medsPurpose: <input type="text" name="med6Purpose"/>,
                medsSideEffects: <input type="text" name="med6SideEffects"/>
            }],
            testingColumns: [{
                Header: 'Date',
                accessor: 'testDate'
            }, {
                Header: 'Examined by',
                accessor: 'examiner'
            }, {
                Header: 'Diagnosis',
                accessor: 'diagnosis'
            }, {
                Header: 'Recommendations',
                accessor: 'testReco'
            }, {
                Header: 'Report Included (Please select Yes or No',
                accessor: 'testReport'
            }],
            testingData: [{
                testDate: <input type="date" name="test1Date"/>,
                testExaminer: <input type="text" name="test1Examiner"/>,
                testDiagnosis: <input type="text" name="test1Diagnosis"/>,
                testReco: <input type="text" name="test1Reco"/>,
                testReport: <Input type="select"
                                   name="test1Report"
                                   id="test1Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test2Date"/>,
                testExaminer: <input type="text" name="test2Examiner"/>,
                testDiagnosis: <input type="text" name="test2Diagnosis"/>,
                testReco: <input type="text" name="test2Reco"/>,
                testReport: <Input type="select"
                                   name="test2Report"
                                   id="test2Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test3Date"/>,
                testExaminer: <input type="text" name="test3Examiner"/>,
                testDiagnosis: <input type="text" name="test3Diagnosis"/>,
                testReco: <input type="text" name="test3Reco"/>,
                testReport: <Input type="select"
                                   name="test3Report"
                                   id="test3Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test4Date"/>,
                testExaminer: <input type="text" name="test4Examiner"/>,
                testDiagnosis: <input type="text" name="test4Diagnosis"/>,
                testReco: <input type="text" name="test4Reco"/>,
                testReport: <Input type="select"
                                   name="test4Report"
                                   id="test4Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test5Date"/>,
                testExaminer: <input type="text" name="test5Examiner"/>,
                testDiagnosis: <input type="text" name="test5Diagnosis"/>,
                testReco: <input type="text" name="test5Reco"/>,
                testReport: <Input type="select"
                                   name="test5Report"
                                   id="test5Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test6Date"/>,
                testExaminer: <input type="text" name="test6Examiner"/>,
                testDiagnosis: <input type="text" name="test6Diagnosis"/>,
                testReco: <input type="text" name="test6Reco"/>,
                testReport: <Input type="select"
                                   name="test6Report"
                                   id="test6Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            foodGroupColumns: [{
                Header: 'Food Group',
                accessor: 'foodGroup'
            }, {
                Header: '',
                accessor: 'excessive'
            }, {
                Header: '',
                accessor: 'daily'
            }, {
                Header: '',
                accessor: 'weekly'
            }, {
                Header: '',
                accessor: 'rarely'
            }, {
                Header: '',
                accessor: 'never'
            }],
            foodGroupData: [{
                foodGroup: 'Vegetables',
                foodExcessive: <Label check> <Input type="checkbox" name="vegetableExcess"
                                                    id="vegetableExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="vegetableDaily" id="vegetableDaily"/> Daily
                </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="vegetableWeekly" id="vegetableWeekly"/> Weekly
                </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="vegetableRarely" id="vegetableRarely"/> Rarely
                </Label>,
                foodNever: <Label check> <Input type="checkbox" name="vegetableNever" id="vegetableNever"/> Never
                </Label>
            }, {
                foodGroup: 'Fruits',
                foodExcessive: <Label check> <Input type="checkbox" name="fruitExcess" id="fruitExcess"/> Excessive
                </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="fruitDaily" id="fruitDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="fruitWeekly" id="fruitWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="fruitRarely" id="fruitRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="fruitNever" id="fruitNever"/> Never </Label>
            }, {
                foodGroup: 'Meats',
                foodExcessive: <Label check> <Input type="checkbox" name="meatExcess" id="meatExcess"/> Excessive
                </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="meatDaily" id="meatDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="meatWeekly" id="meatWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="meatRarely" id="meatRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="meatNever" id="meatNever"/> Never </Label>
            }, {
                foodGroup: 'Sugar',
                foodExcessive: <Label check> <Input type="checkbox" name="sugarExcess" id="sugarExcess"/> Excessive
                </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="sugarDaily" id="sugarDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="sugarWeekly" id="sugarWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="sugarRarely" id="sugarRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="sugarNever" id="sugarNever"/> Never </Label>
            }, {
                foodGroup: 'Artificial Sweetener',
                foodExcessive: <Label check> <Input type="checkbox" name="artSweetenerExcess"
                                                    id="artSweetenerExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="artSweetenerDaily" id="artSweetenerDaily"/> Daily
                </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="artSweetenerWeekly"
                                                 id="artSweetenerWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="artSweetenerRarely"
                                                 id="artSweetenerRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="artSweetenerNever" id="artSweetenerNever"/> Never
                </Label>
            }, {
                foodGroup: 'Artificial Products',
                foodExcessive: <Label check> <Input type="checkbox" name="artProductsExcess"
                                                    id="artProductsExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="artProductsDaily" id="artProductsDaily"/> Daily
                </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="artProductsWeekly"
                                                 id="artProductsWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="artProductsRarely"
                                                 id="artProductsRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="artProductsNever" id="artProductsNever"/> Never
                </Label>
            }, {
                foodGroup: 'Dairy Products',
                foodExcessive: <Label check> <Input type="checkbox" name="dairyExcess" id="dairyExcess"/> Excessive
                </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="dairyDaily" id="dairyDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="dairyWeekly" id="dairyWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="dairyRarely" id="dairyRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="dairyNever" id="dairyNever"/> Never </Label>
            }, {
                foodGroup: 'White Flour',
                foodExcessive: <Label check> <Input type="checkbox" name="flourExcess" id="flourExcess"/> Excessive
                </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="flourDaily" id="flourDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="flourWeekly" id="flourWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="flourRarely" id="flourRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="flourNever" id="flourNever"/> Never </Label>
            }],
            physicalMotorColumns: [{
                Header: '',
                accessor: 'physicalMotor'
            }, {
                Header: 'Select Yes or No',
                accessor: 'physicalMotorYN'
            }],
            physicalMotorData: [{
                physicalMotor: 'Low muscle tone',
                physicalMotorYN: <Input type="select"
                                        name="lowMuscleTone"
                                        id="lowMuscleTone">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'High muscle tone',
                physicalMotorYN: <Input type="select"
                                        name="highMuscleTone"
                                        id="highMuscleTone">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Coordination challenges',
                physicalMotorYN: <Input type="select"
                                        name="coordination"
                                        id="coordination">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Crawling challenges',
                physicalMotorYN: <Input type="select"
                                        name="crawling"
                                        id="crawling">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Walking challenges',
                physicalMotorYN: <Input type="select"
                                        name="walking"
                                        id="walking">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Running challenges',
                physicalMotorYN: <Input type="select"
                                        name="running"
                                        id="running">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Athetoid movement',
                physicalMotorYN: <Input type="select"
                                        name="athetoid"
                                        id="athetoid">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Ataxic',
                physicalMotorYN: <Input type="select"
                                        name="ataxic"
                                        id="ataxic">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Weak',
                physicalMotorYN: <Input type="select"
                                        name="weak"
                                        id="weak">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Balance challenges',
                physicalMotorYN: <Input type="select"
                                        name="balance"
                                        id="balance">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Other',
                physicalMotorYN: <Input type="select"
                                        name="otherPhysicalMotor"
                                        id="otherPhysicalMotor">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            handPreferenceColumns: [{
                Header: 'Activity',
                accessor: 'activityHandPreference'
            }, {
                Header: 'Hand Preference',
                accessor: 'handPreference'
            }],
            handPreferenceData: [{
                activityHandPreference: "Writing",
                handPreference: <Input type="select"
                                       name="handPreference1"
                                       id="handPreference1">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Eating",
                handPreference: <Input type="select"
                                       name="handPreference2"
                                       id="handPreference2">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Throwing",
                handPreference: <Input type="select"
                                       name="handPreference3"
                                       id="handPreference3">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Brushing Teeth",
                handPreference: <Input type="select"
                                       name="handPreference4"
                                       id="handPreference4">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Combing Hair",
                handPreference: <Input type="select"
                                       name="handPreference5"
                                       id="handPreference5">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Other",
                handPreference: <Input type="text"
                                       placeholder="If other, please explain"
                                       name="handPreference6"
                                       id="handPreference6">

                </Input>
            }],
            skillsColumns: [{
                Header: 'Skill',
                accessor: 'skill'
            }, {
                Header: 'Check all that apply',
                accessor: 'checkApplied'
            }],
            skillsData: [{
                skill: "Poor Pencil Grip",
                checkApplied: <Input type="select"
                                     name="skill1"
                                     id="skill1">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Sloppy Writing",
                checkApplied: <Input type="select"
                                     name="skill2"
                                     id="skill2">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Letter Reversals",
                checkApplied: <Input type="select"
                                     name="skill3"
                                     id="skill3">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, , {
                skill: "Right/Left Confusion",
                checkApplied: <Input type="select"
                                     name="skill4"
                                     id="skill4">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Poor reading ability",
                checkApplied: <Input type="select"
                                     name="skill5"
                                     id="skill5">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Computation Challenges",
                checkApplied: <Input type="select"
                                     name="skill6"
                                     id="skill6">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Concept Challenges",
                checkApplied: <Input type="select"
                                     name="skill7"
                                     id="skill7">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Word Problem Challenges",
                checkApplied: <Input type="select"
                                     name="skill8"
                                     id="skill8">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Logic Challenges",
                checkApplied: <Input type="select"
                                     name="skill9"
                                     id="skill9">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Other related Challenges",
                checkApplied: <Input type="text"
                                     name="skill10"
                                     id="skill10"
                                     placeholder="Please Explain">
                </Input>
            }],
            communicationProblemsColumns: [{
                Header: 'Issue',
                accessor: 'communicationIssue'
            }, {
                Header: 'Yes/No/Not Sure',
                accessor: 'communicationResponse'
            }],
            communicationProblemsData: [{
                communicationIssue: "Articulation Problems",
                communicationResponse: <Input type="select"
                                   name="communicationIssue1"
                                   id="communicationIssue1">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            },{communicationIssue: "Stammer or Stutter",
                communicationResponse: <Input type="select"
                                              name="communicationIssue2"
                                              id="communicationIssue2">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            }, {
                communicationIssue: "Aphasia",
                communicationResponse: <Input type="select"
                                              name="communicationIssue3"
                                              id="communicationIssue3">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            }],


            collapseVerbal: false,
            collapseCommunication: false,
            collapseCommunicationBinder: false,
            collapseSignLanguage: false,
            collapseCommunicationOther:false
        };

        this.goBack = this.goBack.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }

    toggleVerbal() {
        this.setState(state => ({collapseVerbal: !state.collapseVerbal}));
    }

    toggleCommunication() {
        this.setState(state => ({collapseCommunication: !state.collapseCommunication}));
    }

    toggleCommunicationBinder() {
        this.setState(state => ({collapseCommunicationBinder: !state.collapseCommunicationBinder}));
    }
    toggleCommunicationOther() {
        this.setState(state => ({collapseCommunicationOther: !state.collapseCommunicationOther}));
    }

    toggleSignLanguage() {
        this.setState(state => ({collapseSignLanguage: !state.collapseSignLanguage}));
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }
    checkValue(name) {
        let fields = this.state.fields;
        if (fields[name] >= 1){
            console.log("greater")
            return true;
        } else {
            console.log("nope")
            return false;
        }
    }

    handleCheckBoxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            //SECTION ONE
            if (!fields["dob"]) {
                formIsValid = false;
                errors["dob"] = "Cannot be empty";
            }
            if (!fields["age"]) {
                formIsValid = false;
                errors["age"] = "Cannot be empty";
            }
            if (!fields["diagnosis"]) {
                formIsValid = false;
                errors["diagnosis"] = "Cannot be empty";
            }
            if (!fields["height"]) {
                formIsValid = false;
                errors["height"] = "Cannot be empty";
            }
            if (!fields["weight"]) {
                formIsValid = false;
                errors["weight"] = "Cannot be empty";
            }
            if (!fields["street"]) {
                formIsValid = false;
                errors["street"] = "Cannot be empty";
            }
            if (!fields["city"]) {
                formIsValid = false;
                errors["city"] = "Cannot be empty";
            }
            if (!fields["state"]) {
                formIsValid = false;
                errors["state"] = "Cannot be empty";
            }
            if (!fields["zip"]) {
                formIsValid = false;
                errors["zip"] = "Cannot be empty";
            }
            if (!fields["country"]) {
                formIsValid = false;
                errors["country"] = "Cannot be empty";
            }

            if (!fields["homeNumber"]) {
                formIsValid = false;
                errors["homeNumber"] = "Cannot be empty";
            }
            //SECTION TWO
            if (!fields["motherName"]) {
                formIsValid = false;
                errors["motherName"] = "Cannot be empty";
            }
            if (!fields["motherAge"]) {
                formIsValid = false;
                errors["motherAge"] = "Cannot be empty";
            }
            if (!fields["motherCell"]) {
                formIsValid = false;
                errors["motherCell"] = "Cannot be empty";
            }
            if (!fields["motherEmail"]) {
                formIsValid = false;
                errors["motherEmail"] = "Cannot be empty";
            }
            if (!fields["motherOccupation"]) {
                formIsValid = false;
                errors["motherOccupation"] = "Cannot be empty";
            }
            if (!fields["fatherName"]) {
                formIsValid = false;
                errors["fatherName"] = "Cannot be empty";
            }
            if (!fields["fatherAge"]) {
                formIsValid = false;
                errors["fatherAge"] = "Cannot be empty";
            }
            if (!fields["fatherCell"]) {
                formIsValid = false;
                errors["fatherCell"] = "Cannot be empty";
            }
            if (!fields["fatherEmail"]) {
                formIsValid = false;
                errors["fatherEmail"] = "Cannot be empty";
            }
            if (!fields["fatherOccupation"]) {
                formIsValid = false;
                errors["fatherOccupation"] = "Cannot be empty";
            }
            // Section 3
            if (!fields["birthWeek"]) {
                formIsValid = false;
                errors["birthWeek"] = "Cannot be empty";
            }
            if (!fields["birthWeight"]) {
                formIsValid = false;
                errors["birthWeight"] = "Cannot be empty";
            }


            //SECTION FOUR

            //SECTION SEVEN
            if (!fields["educationalChallenges"]) {
                formIsValid = false;
                errors["educationalChallenges"] = "Cannot be empty";
            }
            if (!fields["exceptionalTalents"]) {
                formIsValid = false;
                errors["exceptionalTalents"] = "Cannot be empty";
            }
            if (!fields["academicGoal"]) {
                formIsValid = false;
                errors["academicGoal"] = "Cannot be empty";
            }
            if (!fields["skill1"]) {
                formIsValid = false;
                errors["skill1"] = "Cannot be empty";
            }

            //SECTION 14
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
        this.setState({submitButtonPressed: true}, () => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.props.history.push("/parenthome")
    }

    renderSection1() {
        return (
            <fieldset>
                <div className={"section"}>Section 1: Client Information</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Date of Birth</Label>
                            <Input
                                type="text"
                                ref="dob"
                                value={this.state.fields["dob"] || ""}
                                onChange={this.handleChange.bind(this, "dob")}
                                className="error"
                                invalid={this.state.errors["dob"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["dob"]}>{this.state.errors["dob"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Age</Label>
                            <Input
                                type="text"
                                ref="age"
                                value={this.state.fields["age"] || ""}
                                onChange={this.handleChange.bind(this, "age")}
                                className="error"
                                invalid={this.state.errors["age"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["age"]}>{this.state.errors["age"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Referring Diagnosis</Label>
                            <Input
                                type="text"
                                ref="diagnosis"
                                value={this.state.fields["diagnosis"] || ""}
                                onChange={this.handleChange.bind(this, "diagnosis")}
                                className="error"
                                invalid={this.state.errors["diagnosis"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["diagnosis"]}>{this.state.errors["diagnosis"]}
                            </FormFeedback>
                            <Label className={"additional-note"}>
                                *If you wish to use private insurance funds, please discuss diagnosis (and resulting
                                diagnosis code(s)) with our insurance biller.
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Height</Label>
                            <Input
                                type="text"
                                ref="height"
                                value={this.state.fields["height"] || ""}
                                onChange={this.handleChange.bind(this, "height")}
                                className="error"
                                invalid={this.state.errors["height"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["height"]}>{this.state.errors["height"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Weight</Label>
                            <Input
                                type="text"
                                ref="weight"
                                value={this.state.fields["weight"] || ""}
                                onChange={this.handleChange.bind(this, "weight")}
                                className="error"
                                invalid={this.state.errors["weight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["weight"]}>{this.state.errors["weight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Street Name</Label>
                            <Input
                                type="text"
                                ref="street"
                                value={this.state.fields["street"] || ""}
                                onChange={this.handleChange.bind(this, "street")}
                                className="error"
                                invalid={this.state.errors["street"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["street"]}>{this.state.errors["street"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="city"
                                value={this.state.fields["city"] || ""}
                                onChange={this.handleChange.bind(this, "city")}
                                className="error"
                                invalid={this.state.errors["city"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["city"]}>{this.state.errors["city"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="state"
                                value={this.state.fields["state"] || ""}
                                onChange={this.handleChange.bind(this, "state")}
                                className="error"
                                invalid={this.state.errors["state"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["state"]}>{this.state.errors["state"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="zip"
                                value={this.state.fields["zip"] || ""}
                                onChange={this.handleChange.bind(this, "zip")}
                                className="error"
                                invalid={this.state.errors["zip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["zip"]}>{this.state.errors["zip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="country"
                                value={this.state.fields["country"] || ""}
                                onChange={this.handleChange.bind(this, "country")}
                                className="error"
                                invalid={this.state.errors["country"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["country"]}>{this.state.errors["country"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Home Phone Number</Label>
                            <Input
                                type="text"
                                ref="homeNumber"
                                value={this.state.fields["homeNumber"] || ""}
                                onChange={this.handleChange.bind(this, "homeNumber")}
                                className="error"
                                invalid={this.state.errors["homeNumber"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["homeNumber"]}>{this.state.errors["homeNumber"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>


            </fieldset>


        );
    }

    renderSection2() {
        return (
            <fieldset>
                <div className={"section"}>Section 2: Family Information</div>
                <div className={"sub-section"}>Mother's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Name</Label>
                            <Input
                                type="text"
                                ref="motherName"
                                value={this.state.fields["motherName"] || ""}
                                onChange={this.handleChange.bind(this, "motherName")}
                                className="error"
                                invalid={this.state.errors["motherName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherName"]}>{this.state.errors["motherName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Age</Label>
                            <Input
                                type="text"
                                ref="motherAge"
                                value={this.state.fields["motherAge"] || ""}
                                onChange={this.handleChange.bind(this, "motherAge")}
                                className="error"
                                invalid={this.state.errors["motherAge"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherAge"]}>{this.state.errors["motherAge"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="motherCell"
                                value={this.state.fields["motherCell"] || ""}
                                onChange={this.handleChange.bind(this, "motherCell")}
                                className="error"
                                invalid={this.state.errors["motherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherCell"]}>{this.state.errors["motherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Email</Label>
                            <Input
                                type="text"
                                ref="motherEmail"
                                value={this.state.fields["motherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "motherEmail")}
                                className="error"
                                invalid={this.state.errors["motherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherEmail"]}>{this.state.errors["motherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Mother's Occupation</Label>
                            <Input
                                type="text"
                                ref="motherOccupation"
                                value={this.state.fields["motherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "motherOccupation")}
                                className="error"
                                invalid={this.state.errors["motherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherOccupation"]}>{this.state.errors["motherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Father's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Father's Name</Label>
                            <Input
                                type="text"
                                ref="fatherName"
                                value={this.state.fields["fatherName"] || ""}
                                onChange={this.handleChange.bind(this, "fatherName")}
                                className="error"
                                invalid={this.state.errors["fatherName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherName"]}>{this.state.errors["fatherName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Father's Age</Label>
                            <Input
                                type="text"
                                ref="fatherAge"
                                value={this.state.fields["fatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "fatherAge")}
                                className="error"
                                invalid={this.state.errors["fatherAge"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherAge"]}>{this.state.errors["fatherAge"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Father's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="fatherCell"
                                value={this.state.fields["fatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "fatherCell")}
                                className="error"
                                invalid={this.state.errors["fatherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherCell"]}>{this.state.errors["fatherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Father's Email</Label>
                            <Input
                                type="text"
                                ref="fatherEmail"
                                value={this.state.fields["fatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "fatherEmail")}
                                className="error"
                                invalid={this.state.errors["fatherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherEmail"]}>{this.state.errors["fatherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Father's Occupation</Label>
                            <Input
                                type="text"
                                ref="fatherOccupation"
                                value={this.state.fields["fatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "fatherOccupation")}
                                className="error"
                                invalid={this.state.errors["fatherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherOccupation"]}>{this.state.errors["fatherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Marital Status</Label>
                            <Input type="select"
                                   name="maritalStatus"
                                   id="maritalStatus">
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Separated</option>
                                <option>Widowed</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className={"pt-3"}>If Divorced or Separated, who is the legal guardian?</Label>
                            <Input type="text"
                                   ref="legalGuardian"
                                   value={this.state.fields["legalGuardian"] || ""}
                                   onChange={this.handleChange.bind(this, "legalGuardian")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Mother's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label>Step Mother's Name</Label>
                            <Input
                                type="text"
                                ref="sMotherName"
                                value={this.state.fields["sMotherName"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Step Mother's Age</Label>
                            <Input
                                type="text"
                                ref="sMotherAge"
                                value={this.state.fields["sMotherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Step Mother's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sMotherCell"
                                value={this.state.fields["sMotherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Mother's Email</Label>
                            <Input
                                type="text"
                                ref="sMotherEmail"
                                value={this.state.fields["sMotherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Step Mother's Occupation</Label>
                            <Input
                                type="text"
                                ref="sMotherOccupation"
                                value={this.state.fields["sMotherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Father's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label>Step Father's Name</Label>
                            <Input
                                type="text"
                                ref="sFatherName"
                                value={this.state.fields["sFatherName"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Step Father's Age</Label>
                            <Input
                                type="text"
                                ref="sFatherAge"
                                value={this.state.fields["sFatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Step Father's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sFatherCell"
                                value={this.state.fields["sFatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Father's Email</Label>
                            <Input
                                type="text"
                                ref="sFatherEmail"
                                value={this.state.fields["sFatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Step Father's Occupation</Label>
                            <Input
                                type="text"
                                ref="sFatherOccupation"
                                value={this.state.fields["sFatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Is your child adopted?</Label>
                            <Input type="select"
                                   name="isAdopted"
                                   id="isAdopted">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                    <Col sm={1} className={"text-right align-bottom"}>
                        <Label>If yes:</Label>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>What Age?</Label>
                            <Input type="text"
                                   name="isAdopted"
                                   id="isAdopted">
                            </Input>

                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Country of Birth?</Label>
                            <Input type="text"
                                   name="birthCountry"
                                   id="birthCountry">
                            </Input>

                        </FormGroup>
                    </Col>
                </Row>
                <Label className="pr-2">Please list siblings in the table below. </Label>
                <ReactTable
                    className={"-striped -highlight"}
                    data={this.state.siblingData}
                    columns={this.state.siblingColumns}
                    defaultPageSize={4}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />

            </fieldset>

        );
    }

    renderSection3() {
        return (
            <fieldset>
                <div className={"section"}>Section 3: Prenatal and Birth History</div>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">At how many weeks was the client
                                born?</Label>
                            <Input
                                type="text"
                                ref="birthWeek"
                                value={this.state.fields["birthWeek"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeek")}
                                className="error"
                                invalid={this.state.errors["birthWeek"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["birthWeek"]}>{this.state.errors["birthWeek"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Birth Weight</Label>
                            <Input
                                type="text"
                                ref="birthWeight"
                                value={this.state.fields["birthWeight"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeight")}
                                className="error"
                                invalid={this.state.errors["birthWeight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["birthWeight"]}>{this.state.errors["birthWeight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Delivery Type:</Label>
                            <Input type="select"
                                   name="deliveryType"
                                   id="deliveryType">
                                <option>Vaginal</option>
                                <option>Cesarean</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Were there any complications during the
                                pregnancy or delivery?</Label>
                            <Input type="select"
                                   name="pregComplications"
                                   id="pregComplications">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
                                ref="pregComplicationDescription"
                                value={this.state.fields["pregComplicationDescription"] || ""}
                                onChange={this.handleChange.bind(this, "pregComplicationDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Was your child hospitalized after
                                birth?</Label>
                            <Input type="select"
                                   name="hospitaliedAfterBirth"
                                   id="hospitaliedAfterBirth">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
                                ref="hospitaliedAfterBirthDescription"
                                value={this.state.fields["hospitaliedAfterBirthDescription"] || ""}
                                onChange={this.handleChange.bind(this, "hospitaliedAfterBirthDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }


    renderSection4() {
        return (
            <fieldset>
                <div className={"section"}>Section 4: Developmental History</div>
                <div className={"sub-section"}>If your child is over 18 years of age, please mark what is known.</div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.devHistoryData}
                    columns={this.state.devHistoryColumns}
                    defaultPageSize={9}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
            </fieldset>
        );
    }

    renderSection5() {
        return (
            <fieldset>
                <div className={"section"}>Section 5: Medical History/Past Therapies</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Name</Label>
                            <Input
                                type="text"
                                ref="drName"
                                value={this.state.fields["drName"] || ""}
                                onChange={this.handleChange.bind(this, "drName")}
                                className="error"
                                invalid={this.state.errors["drName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drName"]}>{this.state.errors["drName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Phone Number</Label>
                            <Input
                                type="text"
                                ref="drPhone"
                                value={this.state.fields["drPhone"] || ""}
                                onChange={this.handleChange.bind(this, "drPhone")}
                                className="error"
                                invalid={this.state.errors["drPhone"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drPhone"]}>{this.state.errors["drPhone"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Address</Label>
                            <Input
                                type="text"
                                ref="drStreet"
                                value={this.state.fields["drStreet"] || ""}
                                onChange={this.handleChange.bind(this, "drStreet")}
                                className="error"
                                invalid={this.state.errors["drStreet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drStreet"]}>{this.state.errors["drStreet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="drCity"
                                value={this.state.fields["drCity"] || ""}
                                onChange={this.handleChange.bind(this, "drCity")}
                                className="error"
                                invalid={this.state.errors["drCity"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCity"]}>{this.state.errors["drCity"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="drState"
                                value={this.state.fields["drState"] || ""}
                                onChange={this.handleChange.bind(this, "drState")}
                                className="error"
                                invalid={this.state.errors["drState"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drState"]}>{this.state.errors["drState"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="drZip"
                                value={this.state.fields["drZip"] || ""}
                                onChange={this.handleChange.bind(this, "drZip")}
                                className="error"
                                invalid={this.state.errors["drZip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drZip"]}>{this.state.errors["drZip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="drCountry"
                                value={this.state.fields["drCountry"] || ""}
                                onChange={this.handleChange.bind(this, "drCountry")}
                                className="error"
                                invalid={this.state.errors["drCountry"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCountry"]}>{this.state.errors["drCountry"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Does the client currently receive therapy
                                services outside of Jacob's Ladder?</Label>
                            <Input type="select"
                                   name="outsideTherapy"
                                   id="outsideTherapy">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <ReactTable
                    className={"otherDoctorsTable -striped -highlight"}
                    data={this.state.otherDoctorsData}
                    columns={this.state.otherDoctorsColumns}
                    defaultPageSize={4}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please list any hospitalizations and/or medical
                                procedures the client has received.</Label>
                            <Input
                                type="text"
                                ref="hospital"
                                value={this.state.fields["hospital"] || ""}
                                onChange={this.handleChange.bind(this, "hospital")}
                                className="error"
                                invalid={this.state.errors["hospital"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hospital"]}>{this.state.errors["hospital"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Label className="control-label required">Please indicate whether the following apply to the
                        client.</Label>
                </Row>
                <ReactTable
                    className={"medicalConditionsTable -striped -highlight"}
                    data={this.state.medicalConditionsData}
                    columns={this.state.medicalConditionsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please list other medical conditions here.</Label>
                            <Input
                                type="text"
                                ref="hospital"
                                value={this.state.fields["hospital"] || ""}
                                onChange={this.handleChange.bind(this, "hospital")}
                                className="error"
                                invalid={this.state.errors["hospital"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hospital"]}>{this.state.errors["hospital"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Label className="control-label required">Please indicate if the client uses any of the following
                        supplies/equipment.</Label>
                </Row>
                <ReactTable
                    className={"suppliesTable -striped -highlight"}
                    data={this.state.suppliesData}
                    columns={this.state.suppliesColumns}
                    defaultPageSize={8}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please list other supplies/equipment here.</Label>
                            <Input
                                type="text"
                                ref="hospital"
                                value={this.state.fields["hospital"] || ""}
                                onChange={this.handleChange.bind(this, "hospital")}
                                className="error"
                                invalid={this.state.errors["hospital"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hospital"]}>{this.state.errors["hospital"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Label className="control-label required">Please list all current medications, dietary supplement,
                        and vitamins.</Label>
                </Row>
                <ReactTable
                    className={"medsTable -striped -highlight"}
                    data={this.state.medsData}
                    columns={this.state.medsColumns}
                    defaultPageSize={6}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Label className="control-label required">Please list any pertinent medical, neurological, visual,
                        hearing, therapeutic, psychological, and/or educational testing.</Label>
                </Row>
                <ReactTable
                    className={"testingTable -striped -highlight"}
                    data={this.state.testingData}
                    columns={this.state.testingColumns}
                    defaultPageSize={6}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
            </fieldset>
        );
    }

    renderSection6() {
        return (
            <fieldset>
                <div className={"section"}>Section 6: General Health</div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please describe the client's diet.</Label>
                            <Input
                                type="text"
                                ref="diet"
                                value={this.state.fields["diet"] || ""}
                                onChange={this.handleChange.bind(this, "diet")}
                                className="error"
                                invalid={this.state.errors["diet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["diet"]}>{this.state.errors["diet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Label className="control-label required">Please check all that apply:</Label>
                </Row>
                <ReactTable
                    className={"foodGroupTable -striped -highlight"}
                    data={this.state.foodGroupData}
                    columns={this.state.foodGroupColumns}
                    defaultPageSize={8}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Does the client have any allergies?</Label>
                            <Input type="select"
                                   name="allergies"
                                   id="allergies">
                                <option></option>
                                <option>Yes</option>
                                <option>None Known</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">If yes, please describe.</Label>
                            <Input
                                type="text"
                                ref="describeAllergies"
                                value={this.state.fields["describeAllergies"] || ""}
                                onChange={this.handleChange.bind(this, "describeAllergies")}
                                className="error"
                                invalid={this.state.errors["describeAllergies"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["describeAllergies"]}>{this.state.errors["describeAllergies"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Daily Meal Schedule</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Breakfast Time</Label>
                            <Input
                                type="text"
                                ref="breakfastTime"
                                value={this.state.fields["breakfastTime"] || ""}
                                onChange={this.handleChange.bind(this, "breakfastTime")}
                                className="error"
                                invalid={this.state.errors["breakfastTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["breakfastTime"]}>{this.state.errors["breakfastTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Lunch Time</Label>
                            <Input
                                type="text"
                                ref="lunchTime"
                                value={this.state.fields["lunchTime"] || ""}
                                onChange={this.handleChange.bind(this, "lunchTime")}
                                className="error"
                                invalid={this.state.errors["lunchTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["lunchTime"]}>{this.state.errors["lunchTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Dinner Time</Label>
                            <Input
                                type="text"
                                ref="dinnerTime"
                                value={this.state.fields["dinnerTime"] || ""}
                                onChange={this.handleChange.bind(this, "dinnerTime")}
                                className="error"
                                invalid={this.state.errors["dinnerTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["dinnerTime"]}>{this.state.errors["dinnerTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Snack Times</Label>
                            <Input
                                type="text"
                                ref="snackTime"
                                value={this.state.fields["snackTime"] || ""}
                                onChange={this.handleChange.bind(this, "snackTime")}
                                className="error"
                                invalid={this.state.errors["snackTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["snackTime"]}>{this.state.errors["snackTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Sleep</div>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <Label className="control-label required">Approximately how many hours of sleep does the
                                client get each night?</Label>
                            <Input
                                type="text"
                                ref="hoursOfSleep"
                                value={this.state.fields["hoursOfSleep"] || ""}
                                onChange={this.handleChange.bind(this, "hoursOfSleep")}
                                className="error"
                                invalid={this.state.errors["hoursOfSleep"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hoursOfSleep"]}>{this.state.errors["hoursOfSleep"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Typical bedtime</Label>
                            <Input
                                type="text"
                                ref="bedTime"
                                value={this.state.fields["bedTime"] || ""}
                                onChange={this.handleChange.bind(this, "bedTime")}
                                className="error"
                                invalid={this.state.errors["bedTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["bedTime"]}>{this.state.errors["bedTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Typical morning wake time</Label>
                            <Input
                                type="text"
                                ref="wakeTime"
                                value={this.state.fields["wakeTime"] || ""}
                                onChange={this.handleChange.bind(this, "wakeTime")}
                                className="error"
                                invalid={this.state.errors["wakeTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["wakeTime"]}>{this.state.errors["wakeTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Label>Does the client experience any of the following?</Label>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Trouble falling asleep</Label>
                            <Input type="select"
                                   name="troubleFallingAsleep"
                                   id="troubleFallingAsleep">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Trouble staying asleep/wakes
                                frequently</Label>
                            <Input type="select"
                                   name="troubleStayingAsleep"
                                   id="troubleStayingAsleep">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Wakes Early</Label>
                            <Input type="select"
                                   name="wakesEarly"
                                   id="wakesEarly">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Physical Motor</div>
                <Row>
                    <Label className="control-label required">Please select whether the follow apply.</Label>
                </Row>
                <ReactTable
                    className={"physicalMotorTable -striped -highlight"}
                    data={this.state.physicalMotorData}
                    columns={this.state.physicalMotorColumns}
                    defaultPageSize={11}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please list other physical motor challenges
                                here.</Label>
                            <Input
                                type="text"
                                ref="otherPhysicalMotor"
                                value={this.state.fields["otherPhysicalMotor"] || ""}
                                onChange={this.handleChange.bind(this, "otherPhysicalMotor")}
                                className="error"
                                invalid={this.state.errors["otherPhysicalMotor"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["otherPhysicalMotor"]}>{this.state.errors["otherPhysicalMotor"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection7() {
        return (
            <fieldset>
                <div className={"section"}>Section 7: Educational History</div>
                <p>List current and past educational and/or treatment placement(s).</p>
                <ReactTable
                    className={"otherSchoolTable -striped -highlight"}
                    data={this.state.otherProgramsData}
                    columns={this.state.otherProgramsColumns}
                    defaultPageSize={4}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">List any education challenges (past or current)</Label>
                    <Input
                        type="text"
                        ref="educationalChallenges"
                        value={this.state.fields["educationalChallenges"] || ""}
                        onChange={this.handleChange.bind(this, "educationalChallenges")}
                        className="error"
                        invalid={this.state.errors["educationalChallenges"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["educationalChallenges"]}>{this.state.errors["educationalChallenges"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">List any exceptional abilities – academic, physical,
                        artistic, musical, etc.</Label>
                    <Input
                        type="text"
                        ref="exceptionalTalents"
                        value={this.state.fields["exceptionalTalents"] || ""}
                        onChange={this.handleChange.bind(this, "exceptionalTalents")}
                        className="error"
                        invalid={this.state.errors["exceptionalTalents"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["exceptionalTalents"]}>{this.state.errors["exceptionalTalents"]}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label className="control-label required">Does your child have a current Individualized Education
                        Plan (IEP)?</Label>
                    <Col sm={2}>
                        <Input type="select"
                               name="iepPlan"
                               id="iepPlan">
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </Col>

                </FormGroup>
                <p>Indicate your child’s hand preference for each activity: Right/Left/Mixed/Not Applicable.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.handPreferenceData}
                    columns={this.state.handPreferenceColumns}
                    defaultPageSize={6}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <p>Please check all that apply.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.skillsData}
                    columns={this.state.skillsColumns}
                    defaultPageSize={11}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">What is your specific academic goal for your
                        child?</Label>
                    <Input
                        type="text"
                        ref="academicGoal"
                        value={this.state.fields["academicGoal"] || ""}
                        onChange={this.handleChange.bind(this, "academicGoal")}
                        className="error"
                        invalid={this.state.errors["academicGoal"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["academicGoal"]}>{this.state.errors["academicGoal"]}
                    </FormFeedback>
                </FormGroup>

            </fieldset>

        );
    }

    renderSection8() {
        return (
            <fieldset>
                <div className={"section"}>Section 8: Communication</div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleVerbal.bind(this)}>

                            <Input type="checkbox"/>
                            Verbal
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseVerbal}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Input
                                    type="select"
                                    placeholder="why">
                                    <option>Select Current Independent Level</option>
                                    <option>fully conversational with original thought language</option>
                                    <option>sentences with some rote language</option>
                                    <option>1-2 word verbalizations</option>

                                </Input>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"/>
                        Pointing/Grabbing
                    </Label>
                </FormGroup>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleSignLanguage.bind(this)}>

                            <Input type="checkbox"/>
                            Sign Language
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseSignLanguage}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Label> Types of signs used (i.e.ALS or modified):</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label> Number of signs known:</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunication.bind(this)}>

                            <Input type="checkbox"/>
                            Communication Device
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunication}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Label>Name of Device and Software Used</Label>
                                    <Input
                                        type="text"
                                        ref="nameOfDevice"
                                        value={this.state.fields["nameOfDevice"] || ""}
                                        onChange={this.handleChange.bind(this, "nameOfDevice")}
                                        className="error"
                                        invalid={this.state.errors["nameOfDevice"] != null}/>
                                    <FormFeedback
                                        invalid={this.state.errors["nameOfDevice"]}>{this.state.errors["nameOfDevice"]}
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="select">
                                        <option>Select Current Independent Level</option>
                                        <option>Fully Independent</option>
                                        <option>Emerging Independence</option>
                                        <option>Heavy Prompting Required</option>

                                    </Input>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunicationBinder.bind(this)}>

                            <Input type="checkbox"/>
                            Communication Binder
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunicationBinder}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Input
                                        type="select">
                                        <option>Select Current Independent Level</option>
                                        <option>Fully Independent</option>
                                        <option>Emerging Independence</option>
                                        <option>Heavy Prompting Required</option>

                                    </Input>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunicationOther.bind(this)}>

                            <Input type="checkbox"/>
                            Other
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunicationOther}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Label> Please Explain</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.communicationProblemsData}
                    columns={this.state.communicationProblemsColumns}
                    defaultPageSize={3}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">Primary language Spoken at home</Label>
                    <Input
                        type="text"
                        ref="languageAtHome"
                        value={this.state.fields["languageAtHome"] || ""}
                        onChange={this.handleChange.bind(this, "languageAtHome")}
                        className="error"
                        invalid={this.state.errors["languageAtHome"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["languageAtHome"]}>{this.state.errors["languageAtHome"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label">Other Languages Known</Label>
                    <Input
                        type="text"
                        ref="otherLanguages"
                        value={this.state.fields["otherLanguages"] || ""}
                        onChange={this.handleChange.bind(this, "otherLanguages")}
                        className="error"
                        invalid={this.state.errors["otherLanguages"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["otherLanguages"]}>{this.state.errors["otherLanguages"]}
                    </FormFeedback>
                </FormGroup>
            </fieldset>

        );
    }



    renderSection9() {
        return (
            <fieldset>
                <div className={"section"}>Section 9: Emotional/Behavioral History</div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"schoolConcentration")}>
                            School Concentration Difficulties
                            <Input type="select"
                                   ref="languageAtHome"
                                   value={this.state.fields["schoolConcentration"] || ""}
                                   onChange={this.handleChange.bind(this, "schoolConcentration")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("schoolConcentration")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                    <Label> Behaviors (past and current) seen at home/school</Label>
                                    <Input
                                        type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                            <Input
                                type="text"
                                className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                            <Input
                                type="text"
                                className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"socialAnxiety")}>
                            Social Anxiety
                            <Input type="select"
                                   ref="socialAnxiety"
                                   value={this.state.fields["socialAnxiety"] || ""}
                                   onChange={this.handleChange.bind(this, "socialAnxiety")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("socialAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"lowGrades")}>
                            Grades dropping or consistently low
                            <Input type="select"
                                   ref="lowGrades"
                                   value={this.state.fields["lowGrades"] || ""}
                                   onChange={this.handleChange.bind(this, "lowGrades")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("lowGrades")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"makingFriends")}>
                            Problems Making or Keeping Friends
                            <Input type="select"
                                   ref="makingFriends"
                                   value={this.state.fields["makingFriends"] || ""}
                                   onChange={this.handleChange.bind(this, "makingFriends")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("makingFriends")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"oppositionalBehavior")}>
                            Oppositional, defiant behavior
                            <Input type="select"
                                   ref="oppositionalBehavior"
                                   value={this.state.fields["oppositionalBehavior"] || ""}
                                   onChange={this.handleChange.bind(this, "oppositionalBehavior")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("oppositionalBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"problemsWithAuthority")}>
Problems With Authority
                            <Input type="select"
                                   ref="problemsWithAuthority"
                                   value={this.state.fields["problemsWithAuthority"] || ""}
                                   onChange={this.handleChange.bind(this, "provlemsWithAuthority")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("problemsAuthority")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"sociallyIsolated")}>
                            Isolated socially from peers
                            <Input type="select"
                                   ref="sociallyIsolated"
                                   value={this.state.fields["sociallyIsolated"] || ""}
                                   onChange={this.handleChange.bind(this, "sociallyIsolated")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sociallyIsolated")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"aggressiveBehavior")}>
                            Agressive Behavior towards others
                            <Input type="select"
                                   ref="aggressiveBehavior"
                                   value={this.state.fields["aggressiveBehavior"] || ""}
                                   onChange={this.handleChange.bind(this, "aggressiveBehavior")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("aggressiveBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"generalizedAnxiety")}>
                            Genralized Anxiety (across many situations)
                            <Input type="select"
                                   ref="generalizedAnxiety"
                                   value={this.state.fields["generalizedAnxiety"] || ""}
                                   onChange={this.handleChange.bind(this, "generalizedAnxiety")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("generalizedAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"hyperactive")}>
                            Hyperactive, difficulty being still
                            <Input type="select"
                                   ref="hyperactive"
                                   value={this.state.fields["hyperactive"] || ""}
                                   onChange={this.handleChange.bind(this, "hyperactive")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("hyperactive")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"sensoryProblems")}>
                            Sensory problems
                            <Input type="select"
                                   ref="sensoryProblems"
                                   value={this.state.fields["sensoryProblems"] || ""}
                                   onChange={this.handleChange.bind(this, "sensoryProblems")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sensoryProblems")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                



            </fieldset>
        );
    }
    renderSection10() {
        return (
            <fieldset>
                <div className={"section"}>Section 10: Current Schedule and Typical Day</div>
            </fieldset>

        );
    }

    renderSection11() {
        return (
            <fieldset>
                <div className={"section"}>Section 11: Independent Skill</div>
            </fieldset>

        );
    }

    renderSection12() {
        return (
            <fieldset>
                <div className={"section"}>Section 12: Additional Information for Evaluation Day</div>
            </fieldset>

        );
    }

    renderSection13() {
        return (
            <fieldset>
                <div className={"section"}>Section 13: Goals and Additional Information</div>
            </fieldset>

        );
    }

    renderSection14() {
        return (
            <fieldset>
                <div className={"section"}>Section 14: Signature</div>
                <div>
                    <FormGroup>
                        <Col sm={12}>
                            <Label sm={12} className={"checkBox"}>
                                <Input type="checkbox"
                                       ref="consentCheck"
                                       className="error"/>
                                I acknowledge that I have read and completed this information to the best of my
                                knowledge and ability.
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
                                invalid={this.state.errors["studentName"]}>{this.state.errors["studentName"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Parent/Guardian First Name</Label>
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


    render() {
        return (
            <div>
                <Header loggedIn={true}/>
                <div className="form-title">
                    <div className="row">
                        <a className="parent-top col-9">
                            <h2>Client History and Information</h2>
                        </a>
                    </div>
                </div>
                <div className={"frame p-4"} data-spy="scroll">
                    <div> {this.renderSection1()} </div>
                    <div> {this.renderSection2()} </div>
                    <div> {this.renderSection3()} </div>
                    <div> {this.renderSection4()} </div>
                    <div> {this.renderSection5()} </div>
                    <div> {this.renderSection6()} </div>
                    <div> {this.renderSection7()} </div>
                    <div> {this.renderSection8()} </div>
                    <div> {this.renderSection9()} </div>
                    <div> {this.renderSection10()} </div>
                    <div> {this.renderSection11()} </div>
                    <div> {this.renderSection12()} </div>
                    <div> {this.renderSection13()} </div>
                    <div> {this.renderSection14()} </div>

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

export default ClientHistoryAndInformation;