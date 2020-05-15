import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextField,Select,InputLabel,MenuItem} from '@material-ui/core';
import styles from './Teacher.module.css'
import TeacherData from './TeacherData'
import Teacher from './Teacher'
class TeacherHome extends Component {
    state = { 
        teacher:[],
        img:null,
        teacherKey:{},
        Focus:true,
        search:'',
        name:{},
        lis:[],
        addTeacher:0,
     }
    async componentDidMount(){
        const {data}=await axios.get('http://127.0.0.1:8000/FetchTeacher/')
        console.log("this os data",data[0].image,data)
        this.setState({teacher:data,img:data[0].image})
    }
    imageClick=(e)=>{
        console.log(e.target,e.target.id,this.state.teacher.length)
        const teacher=new Map([])
        for(let i=0 ;i<this.state.teacher.length ;i++){
            for(const [key,value] of Object.entries(this.state.teacher[i])){
                if(value==e.target.id){
                    console.log("id",value)
                    for(const [k,v] of Object.entries(this.state.teacher[i])){
                        if(v!=''){
                            teacher[k]=v
                        }
                    }
                }
            }
        }
        console.log(teacher.teacherID)
        this.setState({teacherKey:teacher})

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
        axios.post('http://127.0.0.1:8000/searchTeacher/',{'fleater':val}).then((responseData)=>{
            this.setState({teacher:responseData.data})
            console.log("response",responseData.data)
        })
    }
    AddTeacher=()=>
    {
        this.setState({addTeacher:1})
    }
    crossTeacherDetail=()=>this.setState({teacherKey:'',addTeacher:0})
    render() { 
        const url="http://127.0.0.1:8000"
        // console.log('name jashfj',this.state.name,this.state.lis)
        console.log("teacher key",Object.keys(this.state.teacherKey).length)
        const length=Object.keys(this.state.teacherKey).length
        const {name,lis}=this.state
        if(length>0){
            return(
                <div className={styles.teacherDetail}>
                    <button className="btn btn-danger btn-sm" style={{float:'right'}} onClick={this.crossTeacherDetail}>X</button>
                    <TeacherData teacher={this.state.teacherKey}/>
                </div>
            )
        }
        if(this.state.addTeacher){
            return(
                <div className={styles.teacherinputDetail}>
                    <button className="btn btn-danger btn-sm" style={{float:'right',margin:'0px,15px,0px,0px'}} onClick={this.crossTeacherDetail}>X</button>
                    <Teacher/>
                </div>
            )
        }
        return ( 
            <div className={styles.fullPage}>
                <div className={styles.searchBlock}>
                    <div className="row">
                        <div className="input-group col-6"  style={{margin:"4px 20px 4px 150px"}} >
                            <input type="text" className={styles.searchinput} style={{padding:"6px 100px 5px 5px"}}  onFocus={this.searchFocus} onBlur={this.searchBlur} placeholder="Search Teacher Name" name="search" value={this.state.search}
                            onChange={this.searchChange}/>
                            <div class="input-group-append">
                                <button >Search</button>
                            </div>
                        </div>
                    
                        <div className="col">
                            <button className="btn btn-danger btn-sm" style={{margin:"10px 10px 1px 100px"}} onClick={this.AddTeacher}>+ Add Teacher</button>
                        </div>
                    </div>
                </div>
                
                
               <div className="row"> 
                    {this.state.teacher.map((teach)=>
                        <div className={styles.imgBorder} id={teach.teacherID} onClick={this.imageClick}>
                            <img className={styles.showImg} id={teach.teacherID} src={`${url}${teach.image}`}/>
                            <p className={styles.styleName} id={teach.teacherID}>{teach.teacherfirstName}{" "}{teach.teacherlastName}</p>
                            <p className={styles.styleName}  id={teach.teacherID}>{teach.courseId}</p>
                        </div>
                    )}
                </div>
                
                
            </div>
         );
    }
}
export default TeacherHome;