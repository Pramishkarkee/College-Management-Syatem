import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl,TextField,Button} from '@material-ui/core';
class Student extends Component {
    state = { 
        courseIdarr:[],
        semisterNo:['First Semister','Secound Semister','Third Semister','Fourth Semister','Fifth Semister','Sixth Semister','Seventh Semister','Eight Semister'],
        courseId:'',
        semister:'First Semister',
        noSelect:0,
        addStudent:0,
        studentName:'',
        contactNo:'',
        email:'',
        parAddress:'',
        currentAdddress:'',
        parentsName:'',
        parentsContact:'',
        image:'',
        blankError:0
        
        
     }
    async componentDidMount(){
        try{
            const {data}=await axios.get('http://127.0.0.1:8000/addFaculty/')
            console.log(data)
            this.setState({courseIdarr:data})
        }catch(error){

        }
    }
    AddStudentInFaculty=(event)=>{
        event.preventDefault()
        if(this.state.courseId){
            this.setState({addStudent:1})
        }
        else{
            this.setState({noSelect:1})
        }
    }
    ChooseFaculty=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log("data.courseId",e.target.name)
    }
    changeTextTract=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    
    submitStudentData=(e)=>{
        e.preventDefault()
        console.log(e)
        const studentDetail=new Map([])
        var length=0
        for(const [key,value] of Object.entries(this.state)){
            if(key!="courseIdarr" && key!="semisterNo" && key!="noSelect" && key!="addStudent",key!="blankError")
            {
                if(value!=''){
                    studentDetail[key]=value
                    length=length+1
                }
                
            }
        }
        console.log("length$##$$#",length)
        if(length>=10){
            let catchForm=e.target
            let studentDetail = new FormData(catchForm);
            studentDetail.append('courseId', this.state.courseId);
            studentDetail.append('semister',this.state.semister)
            
        

            try {
                axios.post('http://127.0.0.1:8000/inputStudentDetail/',studentDetail).then((responsedata)=>{
                    console.log(responsedata.data)
                    alert("Student id of "+this.state.studentName+" is "+responsedata.data.studentID)
                })
            } catch (error) {
                
            }
        }
        else{
            this.setState({blankError:1})
        }
        
        
    }
    cancleForAdd=()=>{
        this.setState({addStudent:0})
    }
    render() { 
        console.log("check student ip",this.state.studentName)
        return ( 
            <div className="container">
                <form onSubmit={this.AddStudentInFaculty}>
                    <div className="row">
                        <div className="col-sm-4">
                            <select className="form-control" name="courseId"  onChange={this.ChooseFaculty}>
                                <option>---select Faculty---</option>
                                {this.state.courseIdarr.map((data)=><option value={data.courseId} >{data.courseId}</option>)}
                            </select>
                            {this.state.courseId ?'':<small style={this.state.noSelect?{color:"red"}:{color:""}}>*please select faculty</small>}
                        </div>
                        <div className="col-sm-4">
                        <select className="form-control" name="semister"  onChange={this.ChooseFaculty}>
                            {this.state.semisterNo.map((data)=><option value={data}>{data}</option>)}
                        </select>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary btn-sm">Add Student</button>
                        </div>
                    </div>
                </form>
                
                {/* +++++++++++++++++++++++++++++++++++++++++++Add Student ++++++++++++++++++++++++++++ */}
                

                 {this.state.addStudent?
                <div>
                    <form onSubmit={this.submitStudentData} name="submitStudentData" id="submitStudentData">
                        <table className="table">
                            <thead>
                                <th scope="col">SN</th>
                                <th scope="col">Contain</th>
                                <th scope="col">Input</th>
                            </thead>
                            <tbody>                                   
                                    

                                    <tr>
                                        <td>1</td> 
                                        <td>Student Name</td> 
                                        <td><TextField type="text" name="studentName" id="studentName" value={this.state.studentName} label="Student Name" onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.studentName ?{color:''}:{color:"red"}}>Please Enter Student Name</small> :''}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td> 
                                        <td>Contact Number</td> 
                                        <td><TextField type="number" name="contactNo" id="contactNo" value={this.state.contactNo} label="Contact Number" style={{border:"red"}} onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.contactNo ?{color:''}:{color:"red"}}>*Please Enter Contact Number</small> :''}</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>3</td> 
                                        <td>Email Address</td> 
                                        <td><TextField type="email" name="email" id="email" value={this.state.email} label="Email Address"  onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.email ?{color:''}:{color:"red"}}>*Please Enter Email Address</small> :''}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td> 
                                        <td>Parnament Address</td> 
                                        <td><TextField type="text" name="parAddress" id="parAddress" value={this.state.parAddress} label="Parnament Address" onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.parAddress ?{color:''}:{color:"red"}}>*Please Enter Parnament Address</small> :''}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td> 
                                        <td>Current Adddress</td> 
                                        <td><TextField type="text" name="currentAdddress" id="currentAdddress" value={this.state.currentAdddress} label="Current Adddress" onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.currentAdddress ?{color:''}:{color:"red"}}>*Please Enter Temporary Adddress</small> :''}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td> 
                                        <td>Student Image</td> 
                                        <td><input type="file" name="image" id="image" value={this.state.image} onChange={this.changeTextTract} /></td>
                                        
                                    </tr>
                                    <tr>
                                        <td>6</td> 
                                        <td>Parents Name</td> 
                                        <td><TextField type="text" name="parentsName" id="parentsName" value={this.state.parentsName} label="Parents Name" onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.parentsName ?{color:''}:{color:"red"}}>*Please Enter Parents Name</small> :''}</td>
                                    </tr>
                                    <tr>
                                        <td>7</td> 
                                        <td>Parents Contact Number</td> 
                                        <td><TextField type="number" name="parentsContact" id="parentsContact" value={this.state.parentsContact} label="Parents Contact Number" onChange={this.changeTextTract} />
                                        {this.state.blankError ?  <small style={this.state.parentsContact ?{color:''}:{color:"red"}}>Please Enter Student Name</small> :''}</td>
                                    </tr>
                            </tbody>
                        </table>
                        <button type="submit" className="btn btn-primary btn-sm">Add Student</button> 
                        
                    </form>
                    <button name="exit" onClick={this.cancleForAdd} className="btn btn-danger btn-sm">exit</button>
                </div>
                :""}
            </div>
         );
    }
}
 
export default Student;