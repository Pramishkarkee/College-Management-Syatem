import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextField,Select,InputLabel,MenuItem} from '@material-ui/core';
import styles from './Student.module.css'
import StudentDetail from './StudentDetail';
import Student from './Student'
class StudentHome extends Component {
    state = { 
        student:[],
        img:null,
        studentKey:{},
        Focus:true,
        search:'',
        name:{},
        // lis:[]
        addstd:0
     }
    async componentDidMount(){
        const {data}=await axios.get('http://127.0.0.1:8000/FetchStudent/')
        console.log("this os data",data[0].image,data)
        this.setState({student:data,img:data[0].image})
    }
    imageClick=(e)=>{
        console.log(e.target,e.target.id,this.state.student.length)
        const student=new Map([])
        for(let i=0 ;i<this.state.student.length ;i++){
            for(const [key,value] of Object.entries(this.state.student[i])){
                if(value==e.target.id){
                    console.log("id",value)
                    for(const [k,v] of Object.entries(this.state.student[i])){
                        if(v!=''){
                            student[k]=v
                        }
                    }
                }
            }
        }
        console.log(student.studentID)
        this.setState({studentKey:student})

    }
    searchFocus=(e)=>{
        this.setState({Focus:true,search:e.target.value})
        console.log("focus is activate",e.target.value)
        if(this.state.focus==true){
            console.log("focus is activate data fetch")
        }
    }
    searchBlur=()=>{
        this.setState({Focus:false,name:[]})
    }


    searchChange=(e)=>{
        this.setState({Focus:true,search:e.target.value})
        console.log("focus is activate",e.target.value)
        var val=e.target.value
        axios.post('http://127.0.0.1:8000/searchStudent/',{'fleater':val}).then((responseData)=>{
            this.setState({student:responseData.data})
            console.log("response",responseData.data)
        })
    }
    crossstudentDetail=()=>this.setState({studentKey:'',addstd:0})
    AddStudent=()=>this.setState({addstd:1})
    render() { 
        const url="http://127.0.0.1:8000"
        // console.log('name jashfj',this.state.name,this.state.lis)
        console.log("student key",Object.keys(this.state.studentKey).length)
        const length=Object.keys(this.state.studentKey).length
        // const {name,lis}=this.state
        if(length>0){
            return(
                <div className={styles.studentinputDetail}>
                    <button className="btn btn-danger btn-sm" style={{float:'right',margin:'0px,15px,0px,0px'}} onClick={this.crossstudentDetail}>X</button>
                    <StudentDetail data={this.state.studentKey}/>
                </div>
            )
        }
        if(this.state.addstd){
            return(
                <div className={styles.studentinputDetail}>
                    <button className="btn btn-danger btn-sm" style={{float:'right',margin:'0px,15px,0px,0px'}} onClick={this.crossstudentDetail}>X</button>
                    <Student/>
                </div>
            )
        }
        
        return ( 
            <div>
                <div className={styles.searchBlock}>
                    <div className="row">
                        <div className="input-group col-6"  style={{margin:"4px 20px 4px 150px"}} >
                            <input type="text" className={styles.searchinput} style={{padding:"6px 100px 5px 5px"}}  onFocus={this.searchFocus} onBlur={this.searchBlur} placeholder="Search student Name" name="search" value={this.state.search}
                            onChange={this.searchChange}/>
                            <div class="input-group-append">
                                <button >Search</button>
                            </div>
                        </div>
                    
                        <div className="col">
                            <button className="btn btn-danger btn-sm" style={{margin:"10px 10px 1px 100px"}} onClick={this.AddStudent}>+ Add student</button>
                        </div>
                    </div>
                </div>
                
                
               
               
                    {this.state.student.map((stud)=>
                    <div className={styles.cardContain} onClick={this.imageClick}>
                        <div className="card mb-3" style={{width:"500px",height:'100px' ,margin:"10px 20px 0px 30px" , overflow: 'hidden'   }}>
                            <div className="row no gutters">
                                <div className="col-md-4"  id={stud.studentID}>
                                   
                                    <img className="card-img" id={stud.studentID} src={`${url}${stud.image}`} style={{height:'100px'}}/>
                                   
                                </div>
                                <div className="col-md-8"  id={stud.studentID}>
                                    <div className="card-body"  id={stud.studentID}>
                                        
                                        <p className={styles.styleName} id={stud.studentID}>{stud.studentName}</p>
                                        <p className={styles.styleName}  id={stud.studentID}>{stud.courseId}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                

               
                
                
                
            </div>
         );
    }
}
 
export default StudentHome;