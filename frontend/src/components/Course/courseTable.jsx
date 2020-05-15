import React,{Component} from 'react';
import Update from './Update'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class CourseTable extends Component{
    
    constructor(props){
        super(props)
        this.state={
            delete:'',
            update:'',
            courseTable:[],
            signal:0
    
        }
        this.onClickUpdate=this.onClickUpdate.bind(this)
        this.onClickDelete=this.onClickDelete.bind(this)
        console.log("this$$$$$$$$$$",this.state.delete)
    }
    onClickUpdate=(event)=>{
        this.setState({update:event.target.value})
    }
    onClickDelete=(event)=>{
        this.setState({delete:event.target.value})
        // event.preventDefault()
        axios.post('http://127.0.0.1:8000/deleteFaculty/',{courseId:event.target.value}).then((dataResponse)=>{
                console.log("this$$$$$$$$$$",dataResponse.data)
                this.setState({courseTable:dataResponse.data,signal:1})
        })
    }
    
    render(){
        
        const button="Update"
        const remove="Delete"
        const {course}=this.props
        console.log("this#########course data",course)
        const {courseTable}=this.state
        console.log("this#########",courseTable)
        console.log("this######### signal",this.state.signal)
        if(this.state.signal){
            return(
                <div>
                {this.state.update ? <Update/> :''}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Course Id</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                                {courseTable.map((c,i)=>
                                <tr>
                                    <td key={c.courseId+"cid"}>{c.courseId}</td>
                                    <td key={c.courseName+"cname"}>{c.courseName}</td>
                                    <td><button key={c.i+"button"} value={c.courseId} name={c.courseId} onClick={this.onClickUpdate} 
                                    className="btn btn-primary btn-sm">{button}</button></td>
                                    <td><button key={c.i} value={c.courseId} name={c.courseId} onClick={this.onClickDelete} 
                                    className="btn btn-danger btn-sm">{remove}</button></td>
                                </tr>
                                )}
                        
                    </tbody>
                </table>
            </div>
            )
        }
        return(
            <div>
                {this.state.update ? <Update/> :''}
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Course Id</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                                {course.map((c,i)=>
                                <tr>
                                    <td key={c.courseId+"cid"}>{c.courseId}</td>
                                    <td key={c.courseName+"cname"}>{c.courseName}</td>
                                    <td><button key={c.i+"button"} value={c.courseId} name={c.courseId} onClick={this.onClickUpdate} 
                                    className="btn btn-primary btn-sm">{button}</button></td>
                                    <td><button key={c.i} value={c.courseId} name={c.courseId} onClick={this.onClickDelete} 
                                    className="btn btn-danger btn-sm">{remove}</button></td>
                                </tr>
                                )}
                        
                    </tbody>
                </table>
            </div>
         )
    }
}
export default CourseTable;