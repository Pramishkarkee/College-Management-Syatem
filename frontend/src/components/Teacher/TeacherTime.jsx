import React,{ Component, createRef } from 'react'
import { Link,Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Teacher from './Teacher'
class TeacherTime extends Component {   
    constructor(props){
        super(props)
        this.state={
            fullName:'',
            monday:[],
            day:'',
            monday:[],
            tuesday:[],
            wednesday:[],
            thrusday:[],
            friday:[],
            saturday:[],
            submit:0,
            
            m1:'',m2:'',m3:'',m4:'',m5:'',m6:'',
            t1:'',t2:'',t3:'',t4:'',t5:'',t6:'',
            w1:'',w2:'',w3:'',w4:'',w5:'',w6:'',
            th1:'',th2:'',th3:'',th4:'',th5:'',th6:'',
            f1:'',f2:'',f3:'',f4:'',f5:'',f6:'',
            s1:'',s2:'',s3:'',s4:'',s5:'',s6:'',
        }
        this.monday1Ref =React.createRef();
        this.monday2Ref=React.createRef();
        this.monday3Ref=React.createRef();
        this.monday4Ref=React.createRef()
        this.monday1Select=React.createRef()
        this.monday2Select=React.createRef()
        this.tuesday1Ref=React.createRef()
        this.tuesday2Ref=React.createRef()
        this.tuesday3Ref=React.createRef()
        this.tuesday4Ref=React.createRef()
        this.tuesday5Ref=React.createRef()
        this.tuesday6Ref=React.createRef()
        this.wednesday1Ref=React.createRef()
        this.wednesday2Ref=React.createRef()
        this.wednesday3Ref=React.createRef()
        this.wednesday4Ref=React.createRef()
        this.wednesday5Ref=React.createRef()
        this.wednesday6Ref=React.createRef()
        this.thusday1Ref=React.createRef()
        this.thusday2Ref=React.createRef()
        this.thusday3Ref=React.createRef()
        this.thusday4Ref=React.createRef()
        this.thusday5Ref=React.createRef()
        this.thusday6Ref=React.createRef()
        this.friday1Ref=React.createRef()
        this.friday2Ref=React.createRef()
        this.friday3Ref=React.createRef()
        this.friday4Ref=React.createRef()
        this.friday5Ref=React.createRef()
        this.friday6Ref=React.createRef()
        this.saturday1Ref=React.createRef()
        this.saturday2Ref=React.createRef()
        this.saturday3Ref=React.createRef()
        this.saturday4Ref=React.createRef()
        this.saturday5Ref=React.createRef()
        this.saturday6Ref=React.createRef()
        
        this.changeinput1=this.changeinput1.bind(this)
    }
    componentDidMount(){
        this.monday1Ref.current.focus()
    }
    changeinput1=(e,d)=>{
        this.setState({day:e.target.value,[e.target.name]:e.target.value})
        
        console.log(d)
        var val=e.target.value
        var name=e.target.name
        var l=val.length
        
        if(l==2){
            if(name=='m1' || name=='m2' || name=='m3' || name=='m4' || name=='m5' ||name=='m6'){
                this.setState(state=>{
                    const monday = state.monday.concat(state.day)
                    return {monday,day:''}
                })
            }
            else if(name=='t1' || name=='t2' || name=='t3' || name=='t4' || name=='t5' ||name=='t6'){
                this.setState(state=>{
                    const tuesday = state.tuesday.concat(state.day)
                    return {tuesday,day:''}
                })
            }
            else if(name=='w1' || name=='w2' || name=='w3' || name=='w4' || name=='w5' ||name=='w6'){
                this.setState(state=>{
                    const wednesday = state.wednesday.concat(state.day)
                    return {wednesday,day:''}
                })
            }
            else if(name=='th1' || name=='th2' || name=='th3' || name=='th4' || name=='th5' ||name=='th6'){
                this.setState(state=>{
                    const thrusday = state.thrusday.concat(state.day)
                    return {thrusday,day:''}
                })
            }
            else if(name=='f1' || name=='f2' || name=='f3' || name=='f4' || name=='f5' ||name=='f6'){
                this.setState(state=>{
                    const friday = state.friday.concat(state.day)
                    return {friday,day:''}
                })
            }else if(name=='s1' || name=='s2' || name=='s3' || name=='s4' || name=='s5' ||name=='s6'){
                this.setState(state=>{
                    const saturday = state.saturday.concat(state.day)
                    return {saturday,day:''}
                })
            }
            if(e.target.name=='s6'){
                console.log(this.state.wednesday)
                console.log(this.state.monday)
                console.log(this.state.tuesday)
            }
            else{
                d.current.focus()
            }
            

        }
    }
    onSubmitTimeTable=()=>{
       var ml= this.state.monday.length
       var tl=this.state.tuesday.length
       var wl= this.state.wednesday.length
       var thl=this.state.thrusday.length
       var fl= this.state.friday.length
       var sl=this.state.saturday.length
       var t=0
       var m=0
       var w=0
       var th=0
       var f=0
       var s=0
       console.log(ml)
       if(ml==6){
            m=1
       }
       else{
           this.setState({monday:[],m1:'',m2:'',m3:'',m4:'',m5:'',m6:''})
       }
       if(tl==6){
           t=1
       }
       else{
        this.setState({tuesday:[]})
        }
        if(wl==6){
            w=1
       }
       else{
           this.setState({wednesday:[]})
       }
       if(thl==6){
           th=1
       }
       else{
        this.setState({thrusday:[]})
        }
        if(fl==6){
            f=1
       }
       else{
           this.setState({friday:[]})
       }
       if(sl==6){
           s=1
       }
       else{
        this.setState({saturday:[]})
        }
        if(m==0){
            alert("please fill the monday time properly")
        }else if(t==0){
            alert("please fill the tuesday time properly")
        }else if(w==0){
            alert("please fill the wednesday time properly ")
        }else if(th==0){
            alert("please fill the wednesday time properly ")
        }else if(f==0){
            alert("please fill the wednesday time properly ")
        }else if(s==0){
            alert("please fill the wednesday time properly ")
        }
        if(s==1,m==1,t==1,w==1,th==1,f==1,s==1){
            this.setState({submit:1})
        }
    }
    render() { 
       console.log(this.state.tuesday)
       console.log(this.state.wednesday)
       console.log(this.state.thrusday)
       console.log(this.state.friday)
       console.log(this.state.saturday)
       console.log(this.state.monday)

        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.monday1Ref} name="m1" value={this.state.m1} onChange={(event)=>this.changeinput1(event,this.monday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.monday2Ref} name="m2" value={this.state.m2} onChange={(event)=>this.changeinput1(event,this.monday1Select)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.monday1Select} className="form-control input-sm" name="m3" value={this.state.m3} onChange={(event)=>this.changeinput1(event,this.monday3Ref)} >
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.monday3Ref} name="m4" value={this.state.m4} onChange={(event)=>this.changeinput1(event,this.monday4Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.monday4Ref} name="m5" value={this.state.m5} onChange={(event)=>this.changeinput1(event,this.monday2Select)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.monday2Select} className="form-control input-sm" name="m6" value={this.state.m6} onChange={(event)=>this.changeinput1(event,this.tuesday1Ref)}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.tuesday1Ref} value={this.state.t1} name="t1"  onChange={(event)=>this.changeinput1(event,this.tuesday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.tuesday2Ref} name="t2" value={this.state.t2}  onChange={(event)=>this.changeinput1(event,this.tuesday3Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.tuesday3Ref} className="form-control input-sm" name="t3" value={this.state.t3} onChange={(event)=>this.changeinput1(event,this.tuesday4Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.tuesday4Ref} className="form-control input-sm" name="t4" value={this.state.t4} onChange={(event)=>this.changeinput1(event,this.tuesday5Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.tuesday5Ref} className="form-control input-sm" name="t5" value={this.state.t5} onChange={(event)=>this.changeinput1(event,this.tuesday6Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.tuesday6Ref} name="t6" className="form-control input-sm" value={this.state.t6} onChange={(event)=>this.changeinput1(event,this.wednesday1Ref)}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <input type="text" ref={this.wednesday1Ref} className="form-control input-sm" name="w1" value={this.state.w1} onChange={(event)=>this.changeinput1(event,this.wednesday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.wednesday2Ref} className="form-control input-sm" name="w2" value={this.state.w2} onChange={(event)=>this.changeinput1(event,this.wednesday3Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.wednesday3Ref} name="w3" className="form-control input-sm" value={this.state.w3} onChange={(event)=>this.changeinput1(event,this.wednesday4Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.wednesday4Ref} className="form-control input-sm" name="w4" value={this.state.w4} onChange={(event)=>this.changeinput1(event,this.wednesday5Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.wednesday5Ref} className="form-control input-sm" name="w5" value={this.state.w5} onChange={(event)=>this.changeinput1(event,this.wednesday6Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.wednesday6Ref} name="w6" className="form-control input-sm" value={this.state.w6} onChange={(event)=>this.changeinput1(event,this.thusday1Ref)}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <input type="text" ref={this.thusday1Ref} className="form-control input-sm" value={this.state.th1} name="th1"  onChange={(event)=>this.changeinput1(event,this.thusday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.thusday2Ref} className="form-control input-sm" name="th2" value={this.state.th2} onChange={(event)=>this.changeinput1(event,this.thusday3Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.thusday3Ref} name="th3" className="form-control input-sm" value={this.state.th3} onChange={(event)=>this.changeinput1(event,this.thusday4Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.thusday4Ref} className="form-control input-sm" name="th4" value={this.state.th4} onChange={(event)=>this.changeinput1(event,this.thusday5Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.thusday5Ref} className="form-control input-sm" name="th5" value={this.state.th5} onChange={(event)=>this.changeinput1(event,this.thusday6Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.thusday6Ref} className="form-control input-sm" name="th6" value={this.state.th6} onChange={(event)=>this.changeinput1(event,this.friday1Ref)}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.friday1Ref} name="f1" value={this.state.f1} onChange={(event)=>this.changeinput1(event,this.friday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.friday2Ref} name="f2" value={this.state.f2} onChange={(event)=>this.changeinput1(event,this.friday3Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.friday3Ref} name="f3" className="form-control input-sm" value={this.state.f3} onChange={(event)=>this.changeinput1(event,this.friday4Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.friday4Ref} className="form-control input-sm" name="f4" value={this.state.f4} onChange={(event)=>this.changeinput1(event,this.friday5Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.friday5Ref} className="form-control input-sm" name="f5" value={this.state.f5} onChange={(event)=>this.changeinput1(event,this.friday6Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.friday6Ref} name="f6" className="form-control input-sm" value={this.state.f6} onChange={(event)=>this.changeinput1(event,this.saturday1Ref)}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">

                        <input type="text" className="form-control input-sm" ref={this.saturday1Ref} name="s1" value={this.state.s1}  onChange={(event)=>this.changeinput1(event,this.saturday2Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" className="form-control input-sm" ref={this.saturday2Ref} name="s2" value={this.state.s2}  onChange={(event)=>this.changeinput1(event,this.saturday3Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.saturday3Ref} className="form-control input-sm" name="s3" value={this.state.s3}  onChange={(event)=>this.changeinput1(event,this.saturday4Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                        </select>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.saturday4Ref} className="form-control input-sm" name="s4" value={this.state.s4}  onChange={(event)=>this.changeinput1(event,this.saturday5Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <input type="text" ref={this.saturday5Ref}  className="form-control input-sm" name="s5" value={this.state.s5}   onChange={(event)=>this.changeinput1(event,this.saturday6Ref)}/>
                    </div>
                    <div className="col col-sm-2">
                        <select ref={this.saturday6Ref} name="s6" value={this.state.s6}  className="form-control input-sm" onChange={this.changeinput1}>
                            <option >--</option>
                            <option value="no">no</option>
                            <option value="am">Am</option>
                            <option value="pm">pm</option>
                        </select>
                    </div>
                </div>
                <button onClick={this.onSubmitTimeTable}>submit</button>
                {this.state.submit ?<Teacher monday={this.state.monday} submit={this.state.submit} tuesday={this.state.tuesday} wednesday={this.state.wednesday} thrusday={this.state.thrusday} friday={this.state.friday }saturday={this.state.saturday}/>:''}
            </div>
            
        );
    }
}
 
export default TeacherTime;