import React, {Component } from 'react';
import Home from '../Home/Home'
import Course from '../Course/Course'
import StudentHome from '../Student/StudentHome' 
import Subjects from '../subject/Subject'
import Teacher from '../Teacher/Teacher' 
import TeacherHome from '../Teacher/TeacherHome'
class Choice extends Component {
    state = { 
        fetchData:''
     }
     onClickChangeRouting=(event)=>{
        this.setState({fetchData:event.target.name})
        
     }
    render() { 
        console.log("fetch data pageValue",this.props.pageValue)
        const {pageValue}=this.props
        if(pageValue=='course'){
            return ( 
                <div>
                    
                    <Course/>
                </div>
             );
        }
        if(pageValue=='student'){
            return ( 
                <div>
                    
                    <StudentHome/>
                </div>
             );
        }
        if(pageValue=='subjects')
        {
            return(
                <div>
                
                    <Subjects/>
                </div>
            )
        }
        if(pageValue=='teacher')
        {
            return(
                <TeacherHome/>
            )
        }
        return ( 
            <div>
                
                <Home/>
            </div>
         );
    }
}
 
export default Choice;