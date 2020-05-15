import React, { Component } from 'react';
import styles from './Student.module.css'
class StudentDetail extends Component {
    state = { 
        student:this.props.data
     }
    render() { 
        console.log("props data",this.state.student)
        const {student}=this.state
        const url="http://127.0.0.1:8000"
        return ( 
            <div>
                 <img src={`${url}${student.image}`} className={styles.showDataImg}/>
                    <div className={styles.block1}>
                        <table>
                            <tr>
                                <td>Student Name</td>
                                <td>{student.studentName}</td>
                            </tr>
                            <tr>
                                <td>Student ID</td>
                                <td>{student.studentID}</td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>{student.email}</td>
                            </tr>
                            <tr>
                                <td>Parmanent Address</td>
                                <td>{student.parAddress}</td>
                            </tr>
                            <tr>
                                <td>Current Address</td>
                                <td>{student.currentAdddress}</td>
                            </tr>
                            <tr>
                                <td>Parents Name</td>
                                <td>{student.parentsName}</td>
                            </tr>
                            <tr>
                                <td>Parents Contact</td>
                                <td>{student.parentsContact}</td>
                            </tr>
                            <tr>
                                <td>Faculty</td>
                                <td>{student.courseId}</td>
                            </tr>
                            <tr>
                                <td>Current Semister</td>
                                <td>{student.semister}</td>
                            </tr>

                        </table>
                        
                    </div>
            </div>
         );
    }
}
 
export default StudentDetail;