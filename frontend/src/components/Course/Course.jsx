import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl,TextField,Button} from '@material-ui/core';
import styles from './Course.module.css'
import axios from 'axios'
import CourseTable from './courseTable'
class Course extends Component {
    state = {  
        course:0,
        addSemister:0,
        courseName:'',
        courseId:'',
        semister:'',
        allCourse:[],
        showTable:1,
        subCode1:'',subName1:'',
        subCode2:'', subName2:'',
        subCode3:'',subName3:'',
        subCode4:'',subName4:'',
        subCode5:'',subName5:'',
        subCode6:'',subName6:'',
        subCode7:'',subName7:'',
        subCode8:'',subName8:'',   
    }
    componentDidMount(){
        this.getDataDatabase()
        // setInterval(this.getDataDatabase(), 5000); 
    //    this.setState({allCourse:'pramish'})
    }
    getDataDatabase=async ()=>{
        try {
            const {data} =await axios.get('http://127.0.0.1:8000/addFaculty/')
            // fetch('http://127.0.0.1:8000/addFaculty/').then(response => response.json())
            // setInterval(data, 5000);
            console.log("thisis data from backend",data)
            this.setState({allCourse:data})
        } catch (error) {
            
        }
    }
    // +++++++++++++++++++++++++++++++++++++ADD Course+++++++++++++++++++++++++++++++++++++++++++
    AddCourse=()=>{
        this.setState({course:1})
    }
    CourseSubmit=(event)=>{
        event.preventDefault()
        const courseName=this.state.courseName
        const courseId=this.state.courseId
        axios.post('http://127.0.0.1:8000/addFaculty/',{courseName:courseName,courseId:courseId}).then((responseData)=>{
            // this.setState({})
            console.log("response",responseData.data)
            this.setState({allCourse:responseData.data,course:0,addSemister:1,showTable:0})
            
        })
    }
    
    changeData=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    resetState=()=>{
        this.setState({
            subCode1:'',subName1:'',
            subCode2:'', subName2:'',
            subCode3:'',subName3:'',
            subCode4:'',subName4:'',
            subCode5:'',subName5:'',
            subCode6:'',subName6:'',
            subCode7:'',subName7:'',
            subCode8:'',subName8:'',
         })
    }

// ++++++++++++++++++++++++++++++++++++++Add Faculty+++++++++++++++++++++++++++++++++++++++++++++++++++++


    inputSubject=(event)=>{
        event.preventDefault()
        const dataDict=new Map([])
        var data={}
        for(const[key,value] of Object.entries(this.state))
        {
            if(key!='course' && key!='addSemister' && key!='courseName' && key!='allCourse' && key!='showTable'){
                if(value)
                    {
                        // console.log("key and value",key,value)
                        data[key]=value
                        // dataDict.set(key,value)
                    }
            }
        }
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/addSemister/',data).then((responseData)=>{
            
            this.resetState()
            console.log("response",responseData.data)
            
        })
        console.log("all data subCode1 $$$$$$$$$$$$$$$$$$$$$$$@@@@@@@@@@@@",data)
       
        
    
        if(event.target.value){
            console.log("input event%$######***",event.target.value)
            this.setState({addSemister:0,courseName:'',
            courseId:'',showTable:1})
            console.log("course ahgsfahg##@@***&&",this.state.showTable)
        }
        else{
            this.setState({showTable:0})
        }
        
       
    }
    onChangeFacultyData=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }



    render() { 
        console.log("course ahgsfahg##@@***&&",this.state.showTable)
        console.log("course",this.state.course)
        return ( 
            <div className="container">
                <div className="text-right" >
                    <button className="btn btn-primary btn-sm" onClick={this.AddCourse}>Add Course</button>
                </div>


                {/* +++++++++++++++++++++++++++++++++++++ADD Course+++++++++++++++++++++++++++++++++++++++++++ */}
                {   this.state.course ? 
                <div>
                    <form onSubmit={this.CourseSubmit} className={styles.textSpacing}>
                        <TextField variant="outlined" label="Course Name" style={{margin:10}} size="small" name="courseName" value={this.state.courseName}
                        onChange={this.changeData}/>
                        <TextField variant="outlined"  label="Course Id" style={{margin:10}} size="small" name="courseId" value={this.state.courseId}
                        onChange={this.changeData} />
                        <button type="submit" className="btn btn-primary btn-sm" style={{margin:13}}>Add Course</button>
                    </form>
                    
                </div>
                
                :""}
                {/* ++++++++++++++++++++++++++++++++++++++Add Faculty+++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                    {this.state.addSemister?
                    <div>
                        <form onSubmit={this.inputSubject}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <select name="semister" onChange={this.onChangeFacultyData} className="form-control">
                                        <option >--SELECT SEMISTER--</option>
                                        <option value="First Semister">First Semister</option>
                                        <option value="Secound Semister">secound Semister</option>
                                        <option value="Third Semister">Third Semister</option>
                                        <option value="Fourth Semister">Fourth Semister</option>
                                        <option value="Fifth Semister">Fifth Semister</option>
                                        <option value="Sixth Semister">Sixth Semister</option>
                                        <option value="Seventh Semister">Seventh Semister</option>
                                        <option value="Eight Semister">Eight Semister</option>
                                    </select>
                                   
                                </div>
                                <div className="row">
                                     {this.state.semister ? '':<small style={{color:'red'}}>*please choose Semister</small>}
                                </div>
                            </div>
                            <TextField variant="outlined" label="subject code1" size="small" name="subCode1" value={this.state.subCode1} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name1" size="small" name="subName1" value={this.state.subName1} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code2" size="small" name="subCode2" value={this.state.subCode2} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name2" size="small" name="subName2" value={this.state.subName2} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code3" size="small" name="subCode3" value={this.state.subCode3} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name3" size="small" name="subName3" value={this.state.subName3} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code4" size="small" name="subCode4" value={this.state.subCode4} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name4" size="small" name="subName4" value={this.state.subName4} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code5" size="small" name="subCode5" value={this.state.subCode5} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name5" size="small" name="subName5" value={this.state.subName5} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code6" size="small" name="subCode6" value={this.state.subCode6} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name6" size="small" name="subName6" value={this.state.subName6} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code7" size="small" name="subCode7" value={this.state.subCode7} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name7" size="small" name="subName7" value={this.state.subName7} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <TextField variant="outlined" label="subject code8" size="small" name="subCode8" value={this.state.subCode8} onChange={this.onChangeFacultyData} style={{margin:10}}/>
                            <TextField variant="outlined" label="subject Name8" size="small" name="subName8" value={this.state.subName8} onChange={this.onChangeFacultyData} style={{margin:10}}/><br/>
                            <button type="submit" className="btn btn-primary btn-sm" value="add"  style={{margin:13}} disabled={this.state.semister ? false :true}>Add Semister</button>
                            
                        </form>
                        <button onClick={this.inputSubject} className="btn btn-danger btn-sm" value="finish" style={{margin:13}} disabled={this.state.semister ? false :true}>Close</button>
                    </div>
                    :''}

                {/* ++++++++++++++++++++++++++++++++++++++SHOW COURSE+++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {this.state.showTable ? <CourseTable course={this.state.allCourse}/>:""}
            </div>
         );
    }
}
 
export default Course;