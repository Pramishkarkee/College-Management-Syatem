import React ,{ Component} from 'react';
import styles from './login.module.css'
import axios from "axios";
import App from '../../App'
import {Router,Redirect} from 'react-router-dom';
import {FormControl,TextField,Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component{
    state={
        status:false,
        username:'',
        password:'',
        datafromBackend:{},
        usernameSent:'',
        passwordSent:''
    }
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        let status=true
        if(token==null){
            status=false
        }
        this. state={
            status,
            username:'',
            password:'',
            error:0
        }
        this.valueOnChange=this.valueOnChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    
    valueOnChange=(event)=>{
        console.log(event.target.name)
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=async (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/loginPost/',this.state).then((responseData)=>{
            const login=responseData.data.status
            if(login==1){
                localStorage.setItem("token","logindata%$#*&^()&*")
                this.setState({status:true})
                localStorage.setItem('token',"settokenlogin&%$#*&%$)*(")
            }
            else{
                this.setState({error:1})
            }
            this.resetState();
            console.log(responseData.data.status)
        })
    }
    resetState=()=>
    {
      this.setState({username:'',password:''})
    }
    render(){
        console.log("********************username***",this.state.status)
        const {status}=this.state
    if(this.state.status){
        return <Redirect to="/admin"/>
    }
    return(
        <form className={styles.bigblue} onSubmit={this.handleSubmit}>
           <PersonIcon style={{fontSize:25}} className={styles.icone} />
           <TextField label="username" type="text" name="username" value={this.state.username} onChange={this.valueOnChange}/><br/>
           <small style={{color:"red"}}>{this.state.error ? "Please enter username":''}</small><br/>

           <LockOutlinedIcon style={{fontsize:40}} className={styles.icone}/>
           <TextField label="password" type="password" name="password" value={this.state.password} onChange={this.valueOnChange}/><br/>
           <small style={{color:"red"}}>{this.state.error ? "Please enter password" :""}</small><br/>
           <button type="submit" className="btn btn-primary md" style={{padding:"2px 70px 2px " ,margin:"10px 10px"}}>Login</button>
        </form>
    )
}
}
export default Login;