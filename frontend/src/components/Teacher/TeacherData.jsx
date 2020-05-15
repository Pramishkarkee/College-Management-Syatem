import React, { Component } from 'react';
import styles from './Teacher.module.css'
class TeacherData extends Component {
    state = { 
        teacher:this.props.teacher,
        showTable:0,
        days:['sunday','Monday','Tuesday','Wednesday','Thursday','Frieday','Saturday'],
        m:0,t:0,w:0,th:0,f:0,s:0,
     }
     componentDidMount(){
         for(const [key,value] of Object.entries(this.state.teacher)){
             if(value=="parttime"){
                 this.setState({showTable:1})
             }
             if(key=="monday" || key=="tuesday" || key=="wednesday" || key=="thrusday" || key=="friday" || key=="saturday"){
                 var l=value.length
                 for(var i=0 ;i<l;i++){
                     if(value[i]=='no'){
                        if(key=="monday"){
                            this.setState({m:1})
                        }
                        if(key=="tuesday"){
                            this.setState({t:1})
                        }
                        if(key=="wednesday"){
                            this.setState({w:1})
                        }
                        if(key=="thrusday"){
                            this.setState({th:1})
                        }
                        if(key=="friday"){
                            this.setState({f:1})
                        }
                        if(key=="saturday"){
                            this.setState({s:1})
                        }
                     }
                 }
             }
         }
         let lis=this.state.teacher.chooseSubList
         console.log("jhsdgfjsdg",lis.length)
     }
    render() { 
        console.log("teacher$$data",this.state.teacher.chooseSubList)
        const url="http://127.0.0.1:8000"
        const {teacher}=this.state
        const {m}=this.state
        const {t,w,th,f,s}=this.state
        return ( 
            <div>
                
                    <img src={`${url}${teacher.image}`} className={styles.showDataImg}/>
                    <div className={styles.block1}>
                        <table>
                            <tr>
                                <td>Teacher Name:</td>
                                <td>{teacher.teacherfirstName}{" "}{teacher.teacherlastName}</td>
                                
                            </tr>
                            <tr>
                                <td>Teacher Id</td>
                                <td>{teacher.teacherID}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{teacher.contact}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{teacher.email}</td>
                            </tr>
                            <tr>
                                <td>Current Address</td>
                                <td>{teacher.address}</td>
                            </tr>
                            <tr>
                                <td>sex</td>
                                <td>{teacher.sex}</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>{teacher.timeType}</td>
                            </tr>
                            <tr>
                                <td>Course</td>
                                <td>{teacher.courseId}</td>
                            </tr>
                            <tr>
                                <td>Semister</td>
                                <td>
                                    <ul>
                                    <small>{teacher.checkSemList.map((sem,i)=><li>{sem}</li>)}</small>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Subject</td>
                                <td>
                                    <ul>
                                    <small>{teacher.chooseSubList.map((sub,i)=><li>{sub}</li>)}</small>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                        {/* {this.state.teacher.chooseSubList.map((sub)=>sub)} */}
        
                        {this.state.showTable?
                        <div>
                            <table className="table">
                                <tr>
                                    <th>Days</th>
                                    <th>Start</th>
                                    <th>End</th>
                                </tr>
                                <tbody>
                                    <tr style={m?{color:'red'}:{color:''}}>
                                        <td>{this.state.days[0]}</td>
                                        <td>{teacher.monday[0]}{":"}{teacher.monday[1]}{" "}{teacher.monday[2]}</td>
                                        <td>{teacher.monday[3]}{":"}{teacher.monday[4]}{" "}{teacher.monday[5]}</td>
                                    </tr>
                                    <tr style={t ?{color:'red'} :{color:''}}>
                                        <td>{this.state.days[1]}</td>
                                        <td>{teacher.tuesday[0]}{":"}{teacher.tuesday[1]}{" "}{teacher.tuesday[2]}</td>
                                        <td>{teacher.tuesday[3]}{":"}{teacher.tuesday[4]}{" "}{teacher.tuesday[5]}</td>
                                    </tr>
                                    <tr style={w ?{color:'red'} :{color:''}}>
                                        <td>{this.state.days[2]}</td>
                                        <td>{teacher.wednesday[0]}{":"}{teacher.wednesday[1]}{" "}{teacher.wednesday[2]}</td>
                                        <td>{teacher.wednesday[3]}{":"}{teacher.wednesday[4]}{" "}{teacher.wednesday[5]}</td>
                                    </tr>
                                    
                                    <tr style={th ?{color:'red'} :{color:''}}>
                                        <td>{this.state.days[3]}</td>
                                        <td>{teacher.thrusday[0]}{":"}{teacher.thrusday[1]}{" "}{teacher.thrusday[2]}</td>
                                        <td>{teacher.thrusday[3]}{":"}{teacher.thrusday[4]}{" "}{teacher.thrusday[5]}</td>
                                    </tr>
                                    <tr style={f ?{color:'red'} :{color:''}}>
                                        <td>{this.state.days[4]}</td>
                                        <td>{teacher.friday[0]}{":"}{teacher.friday[1]}{" "}{teacher.friday[2]}</td>
                                        <td>{teacher.friday[3]}{":"}{teacher.friday[4]}{" "}{teacher.friday[5]}</td>
                                    </tr>
                                    <tr style={s ?{color:'red'} :{color:''}}>
                                        <td>{this.state.days[5]}</td>
                                        <td>{teacher.saturday[0]}{":"}{teacher.saturday[1]}{" "}{teacher.saturday[2]}</td>
                                        <td>{teacher.saturday[3]}{":"}{teacher.saturday[4]}{" "}{teacher.saturday[5]}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        :'' }
                        </div>
            </div>
         );
    }
}
 
export default TeacherData;