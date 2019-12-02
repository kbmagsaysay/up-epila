import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './resources/tmc-logo.jpg';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.stepOne   = firebase.firestore().collection('queue').where("queue_type", "==", "1").orderBy('updated').limit(3);
	this.stepTwo   = firebase.firestore().collection('queue').where("queue_type", "==", "2").orderBy('updated').limit(3);
	this.stepThree = firebase.firestore().collection('queue').where("queue_type", "==", "3").orderBy('updated').limit(3);
	this.stepFour   = firebase.firestore().collection('queue').where("queue_type", "==", "4").orderBy('updated').limit(3);
	this.stepFive   = firebase.firestore().collection('queue').where("queue_type", "==", "5").orderBy('updated').limit(3);
	
	
	
    this.unsubscribe = null;
    this.state = {
      queueOne: [],
	  queueTwo : [],
	  queueThree: [],
	  queueFour: [],
	  queueFive:[]
    };
	
	 
	
  }

  onCollectionUpdateThree = (querySnapshot) => {
    const queueThree = [];
    querySnapshot.forEach((doc) => {
      const { student_id, queue_id, queue_type , queue_status} = doc.data();
      queueThree.push({
        key: doc.id,
        doc, // DocumentSnapshot
        student_id,
        queue_id,
        queue_type,
		queue_status,
      });
    });
    this.setState({
      queueThree
   });
  }
  
   onCollectionUpdateOne = (querySnapshot) => {
    const queueOne = [];
    querySnapshot.forEach((doc) => {
      const { student_id, queue_id, queue_type ,queue_status} = doc.data();
      queueOne.push({
        key: doc.id,
        doc, // DocumentSnapshot
        student_id,
        queue_id,
        queue_type,
		queue_status,
      });
    });
    this.setState({
      queueOne
   });
  }
  
  onCollectionUpdateTwo = (querySnapshot) => {
    const queueTwo = [];
    querySnapshot.forEach((doc) => {
      const { student_id, queue_id, queue_type ,queue_status} = doc.data();
      queueTwo.push({
        key: doc.id,
        doc, // DocumentSnapshot
        student_id,
        queue_id,
        queue_type,
		queue_status,
      });
    });
    this.setState({
      queueTwo
   });
  }
  
  onCollectionUpdateFour = (querySnapshot) => {
    const queueFour = [];
    querySnapshot.forEach((doc) => {
      const { student_id, queue_id, queue_type ,queue_status } = doc.data();
      queueFour.push({
        key: doc.id,
        doc, // DocumentSnapshot
        student_id,
        queue_id,
        queue_type,
		queue_status,
      });
    });
    this.setState({
      queueFour
   });
  }
  
    onCollectionUpdateFive = (querySnapshot) => {
    const queueFive = [];
    querySnapshot.forEach((doc) => {
      const { student_id, queue_id, queue_type,queue_status } = doc.data();
      queueFive.push({
        key: doc.id,
        doc, // DocumentSnapshot
        student_id,
        queue_id,
        queue_type,
		queue_status,
      });
    });
    this.setState({
      queueFive
   });
  }
  
  

  componentDidMount() {
    this.unsubscribe = this.stepOne.onSnapshot(this.onCollectionUpdateOne);
	this.unsubscribe = this.stepTwo.onSnapshot(this.onCollectionUpdateTwo);
	this.unsubscribe = this.stepThree.onSnapshot(this.onCollectionUpdateThree);
	this.unsubscribe = this.stepFour.onSnapshot(this.onCollectionUpdateFour);
	this.unsubscribe = this.stepFive.onSnapshot(this.onCollectionUpdateFive);
	
	
  }

  render() {
    return (
	
      <div class="container">
	  <div class="menu-container"> 
	  <div class="menu">

		<div class="title">
		<table>
		<tr>
		<td align="center">
		<img src={logo} style={{height : '50px', width : '50px'}} />
		</td>
		<td>
		<h1>EPILA - Enrollment &nbsp;&nbsp;&nbsp;</h1>
		
		</td>

		</tr>
		</table>
		</div>
	    </div>
		
		<div class='queue-grid-container'>
  <div class='queue-grid'>
    <div class='queue-grid-item first-item'>
      <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              Pre-Advising
            </h4>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Queue ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queueOne.map(queueOne =>
                  <tr class={queueOne.queue_status}>
                    <td>{queueOne.student_id}</td>
                    <td>{queueOne.queue_id}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
		
 
    </div>
    <div class='queue-grid-item'>
            <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              Validation
            </h4>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Queue ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queueTwo.map(queueTwo =>
                  <tr class ={queueTwo.queue_status}>
                    <td>{queueTwo.student_id}</td>
                    <td>{queueTwo.queue_id}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    </div>
    <div class='queue-grid-item'>
          <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              Post-Advising
            </h4>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Queue ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queueThree.map(queueThree =>
                  <tr class ={queueThree.queue_status}>
                    <td>{queueThree.student_id}</td>
                    <td>{queueThree.queue_id}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    </div>
	<div class='queue-grid-item'>
            <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              Assessement and Printing
            </h4>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Queue ID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.queueFour.map(queueFour =>
                  <tr class={queueFour.queue_status}>
                    <td>{queueFour.student_id}</td>
                    <td>{queueFour.queue_id}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    </div>

  
  </div>
</div>
<div>
<table>
<tr>
		<td>
		<h6>** queue records in process display as &nbsp;</h6>
		</td>

		<td  bgColor="green"style={{color : 'yellow'}}>In Process
		
		</td>
		</tr>
		</table>
	
</div>
      </div>
	  </div>
	  
    );
  }
}

export default App;
