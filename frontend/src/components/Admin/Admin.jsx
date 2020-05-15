import React ,{Component} from 'react';
import {Link,Router} from 'react-router-dom'
import styles from './Admin.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/logo.jpeg'
import Choice from './Choice';
import Button from '@material-ui/core/Button';



class Admin extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        let status=true
        if(token==null){
            status=false
        }
        this.state={
            status,
            fetchData:'home'
        }
    }
    clickLogout=()=>{
        localStorage.removeItem("token")
    }
    onClickChangeRouting=(event)=>{
        console.log("event",event.target.value)
        this.setState({fetchData:event.target.name})
        console.log("fetch data",this.state.fetchData)
     }
    render() { 
         console.log("fetch data",this.state.fetchData)
        return ( 
        <div>
            <div className={styles.topsid}>
                <img src="http://kcc.edu.np/wp-content/uploads/2018/08/logo-sdsn.jpg" style={{height:"100%"}}/>
                <Link to="/">
                     <button className="btn btn-primary btn-sm" style={{float:'right',margin:"20px"}} onClick={this.clickLogout}>logout</button>
                 </Link>
         
            </div>
            <div className={styles.buttonsid}>
                <div className={styles.left}>
                    <div className={styles.bodyContain}>
                        <button  value="home" name="home" onClick={this.onClickChangeRouting} className={styles.linkButton}>Home</button><br/>
                        <button  value="course" name="course" onClick={this.onClickChangeRouting} className={styles.linkButton}>Course</button><br/>
                        <button  value="student" name="student" onClick={this.onClickChangeRouting} className={styles.linkButton}>Students</button><br/>
                        <button  value="subjects" name="subjects" onClick={this.onClickChangeRouting} className={styles.linkButton}>Subjects</button><br/>
                        <button  value="teacher" name="teacher" onClick={this.onClickChangeRouting} className={styles.linkButton}>Teacher</button><br/>
                        <button  value="timeTable" name="timeTable" onClick={this.onClickChangeRouting} className={styles.linkButton}>Routine</button><br/>
                        <button  value="projectReport" name="projectReport" onClick={this.onClickChangeRouting} className={styles.linkButton}>Project Report</button><br/>
                        <button  value="syllabus" name="syllabus" onClick={this.onClickChangeRouting} className={styles.linkButton}>Syllabus</button><br/>
                        <button  value="Assignments" name="Assignments" onClick={this.onClickChangeRouting} className={styles.linkButton}>Assignments</button><br/>
                        <button  value="assignSubject" name="assignSubject" onClick={this.onClickChangeRouting} className={styles.linkButton}>Assign Subject</button><br/>
                        <button  value="enterMarks" name="enterMarks" onClick={this.onClickChangeRouting} className={styles.linkButton}>Marks</button><br/>
                        <button  value="attendanceReport" name="attendanceReport" onClick={this.onClickChangeRouting} className={styles.linkButton}>Attendance Report</button><br/>
                        <button  value="searchStudent" name="searchStudent" onClick={this.onClickChangeRouting} className={styles.linkButton}>Search Student</button><br/>
                    </div>
                </div>
                <div className={styles.right}> 
                    <Choice pageValue={this.state.fetchData}/> 
                </div>
            </div>
        </div>
         
        );
    }
}
 
export default Admin;