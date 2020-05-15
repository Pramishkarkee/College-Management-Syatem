import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Subject.module.css'
class Subjects extends Component {
    state = { 
        courseId:[],
        semister:[],
        faculty:'',
        sem:'',
        subject:[],
        code:[],
        showSub:0,
        disable:1
     }
    async componentDidMount(){
        
        try{
            const {data} =await axios.get('http://127.0.0.1:8000/ShowSubject/')
            this.setState({courseId:data.courseId})
            console.log("data",data)
            
        }catch(error){

        }
        console.log("data fff",this.state.courseId[0])
    }
    selectStdId=(e)=>{
        const chooseIdSem={'courseId':e.target.value}
        this.setState({'faculty':e.target.value})
        console.log(chooseIdSem)
        try {
            axios.post('http://127.0.0.1:8000/fetchSemister/',chooseIdSem).then((responseData)=>{
                console.log("this is data semister*&%$##",responseData.data.semister)
                this.setState({'semister':responseData.data.semister})
            })
        } catch (error) {
            
        }
    }
    onChangeSem=(e)=>{
        this.setState({'sem':e.target.value})
        console.log("vvvvvvvvvvvvvvvvvvvvvvvv",e.target.value)
        if(e.target.value){
            this.setState({disable:0})
        }
        else{
            this.setState({disable:1})
        }
    }
    findSubonClick=()=>{
        var semister=this.state.sem
        var courseId=this.state.faculty
        const choseSub={'semister':semister,'courseId':courseId}
        axios.post('http://127.0.0.1:8000/searchSubject/',choseSub).then((responseData)=>{
            console.log("######################################################",responseData.data)
            this.setState({subject:responseData.data.subject,code:responseData.data.Code,showSub:1})
        })
    }
    closeTable=()=>{
        this.setState({showSub:0})
    }
    render() { 
        console.log("^^^^facult and sem",this.state.faculty,this.state.sem)
        console.log("subject and code is ",this.state.disable)
        if(this.state.showSub){
            return(
                <div >
                    <div className={styles.tableBorder}>
                        
                    <div className="text-right">
                        <button onClick={this.closeTable} className="btn btn-danger btn-sm">X</button>
                    </div>
                        <div className={styles.tableMargin}>
                        <table className="table table-bordered" style={{margin:"20px 30px 10px 20px"}}>
                            <thead>
                                <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Subject Code</th>
                                    <th scope="col">Subject</th>
                                </tr>
                                </thead>
                                <tbody>
                                    
                                        {this.state.code.map((code,i)=>
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{code}</td>
                                        <td>{this.state.subject[i]}</td>
                                        </tr>
                                        )}
                                    
                                    
                                </tbody>
                            
                        </table>
                        </div>
                    </div>
                </div>
            )
        }
        return ( 
            <div>
                <div className="row">
                   <div className="col-sm-4">
                        <select onChange={this.selectStdId} className="form-control">
                            <option value="">--Select Faculty--</option>
                            {this.state.courseId.map((cid,i)=><option key={i} value={cid}>{cid}</option>)}
                        </select>
                    </div>
                    <div className="col-sm-4" onChange={this.onChangeSem}>
                        <select  className="form-control">
                            <option value="">--Select Semister--</option>
                            {this.state.semister.map((sem,i)=><option key={i} value={sem}>{sem}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary btn-sm" onClick={this.findSubonClick} disabled={this.state.disable? true :false}>Show Subject</button>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Subjects;