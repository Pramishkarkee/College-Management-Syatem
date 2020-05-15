import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextField} from '@material-ui/core';
import styles from './Teacher.module.css'
class Teacher extends Component {
    state = {
        isFocused: true,
        emailIsValid :false,
        showSub:0,
        courseId:[],
        semister:[],
        fetchSub:0,
        
        checkValue:'',
        subject:[],
        checkSub:'',
        length:'',

        teacherfirstName:'',
        teacherlastName:'',
        contact:'',
        email:'',
        timeType:'',
        address:'',
        // monday:[],
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

        chooseSubList:[],

        teacherImage:null,
        chooseSubList:[],
        checkSemList:[],
        course:'',
        sex:'',
        
       
       
      }
      
    async componentDidMount(){
        
        try
        {
            const {data}=await axios.get("http://127.0.0.1:8000/ShowSubject/")
            console.log("&&&&&&&&&&&&&&&&&",data.courseId)
            this.setState({'courseId':data.courseId})
        }catch(error){
            console.log("error")
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
        
    }
    handleFocus = () => {this.setState({isFocused: true})}
    handleBlur = () => {
        this.setState({isFocused: false})
        if(this.state.email){
            this.setState({
               emailIsValid:this.isValidEmailAddress(this.state.email)
            })
            
        }
    }
    isValidEmailAddress=(address)=>{
        return !! address.match(/.+@.+/);
    }
    textChange=(e)=>{

        this.setState({[e.target.name]:e.target.value})

        if(e.target.value=='parttime'){
            this.setState({showSub:1})
        }

        if(e.target.value=='fullTime'){
            this.setState({showSub:0})
        }

    }
    chooseSemister=(e)=>{
        let course={courseId:e.target.value}
        this.setState({course:e.target.value})
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/fetchSemister/',course).then((responsedata)=>{
            this.setState({semister:responsedata.data.semister})
            
        })
    }
    checkOnChangeData=(event)=>{
            console.log(event.target.checked)
            if(event.target.checked==true){
                
                this.setState({checkValue:event.target.value})
                this.setState(state=>{
                    const checkSemList=state.checkSemList.concat(state.checkValue)
                    return {checkSemList}
                })
            }
            else{
                
                var arr=  this.state.checkSemList
                const index=arr.indexOf(event.target.value)
                console.log("index",index)
                if(index>-1){
                    arr.splice(index,1)
                    }
                        
            }
            
                this.setState({'fetchSub':1})
            
    }
    fetchSubjectFromBackend=(e)=>{
        const sendata={courseId:this.state.course,semister:this.state.checkSemList}
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/fetchSubjectFromBackend/',sendata).then((responsedata)=>{
           
            console.log("%%$#@@!$$$%response",responsedata.data.message)
            this.processData(responsedata.data.message)
        })
    }
    processData=(dat)=>{
        
        console.log("array data 77",dat)
        if(dat.length>1){
            for(var i=0 ; i< dat.length-1 ; i++){
                var subject= dat[i].concat(dat[i+1]);
               }
        }
        else{
            var subject=dat[0]
        }
        this.setState({subject:subject})
        console.log("cocatdata",subject)
    }

    checkOnchooseSub=(event)=>{
        
        console.log(event.target.checked)
            if(event.target.checked==true){
                
                this.setState({checkSub:event.target.value})
                this.setState(state=>{
                    const chooseSubList=state.chooseSubList.concat(state.checkSub)
                    return {chooseSubList}
                })
            }
            else{
                
                var arr=  this.state.chooseSubList
                const index=arr.indexOf(event.target.value)
                console.log("index",index)
                if(index>-1){
                    arr.splice(index,1)
                    }
                        
            }
    }
    fileUploadHandler =(e)=>{
        console.log("file",e.target.files[0])
        this.setState({teacherImage:e.target.files[0]})
    }

    formSubmitInDb =(e) =>{
        const studentDetail=new Map([])
        var l=0
        var parttime=""
        const fd=new FormData();
        for(const [key,value] of Object.entries(this.state)){
            if(key=="isFocused" || key=="emailIsValid" || key=="showSub" || key=="courseId" || key=="semister" || key=="fetchSub"  || key=="checkValue" || key=="subject" || key=="checkSub")
            {
               continue;
                
            }
            else{
                
                if(value!=''){
                    console.log('&&&&&value length',value,key)
                    if(key=='teacherImage'){
                        if(value!=null){
                            fd.append(key,value,value.name)
                        }
                        else{
                            continue
                        }
                        
                    }
                    else{
                        console.log("key and value is ",key,value)
                        fd.append(key,value)
                        if(value=="parttime"){
                            parttime="yes"
                        }
                    }
                    studentDetail[key]=value
                    l=l+1
                }
            }
        }
        console.log("7777length",l)
        if(parttime=="yes"){
                if(l>=17){
            
                    e.preventDefault()
                    axios.post('http://127.0.0.1:8000/Teacher/',fd).then((responseData)=>{
                    console.log(responseData.data)
                    alert("Your ID"+responseData.data.teacherID)
                })
                }
                else{
                    alert("Please Fill the form cairfully")
                }
            // }
        }
        else{
            if(l>=11){
            
                e.preventDefault()
                axios.post('http://127.0.0.1:8000/Teacher/',fd).then((responseData)=>{
                console.log(responseData.data)
                alert("Your ID"+responseData.data.teacherID)
            })
            }
            else{
                alert("Please Fill the form cairfully")
            }
        }
        
    }
    chooseSex=(e)=>{
        console.log("sex",e.target.value)
        this.setState({sex:e.target.value})
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
        this.setState({tuesday:[],t1:'',t2:'',t3:'',t4:'',t5:'',t6:''})
        }
        if(wl==6){
            w=1
       }
       else{
           this.setState({wednesday:[],w1:'',w2:'',w3:'',w4:'',w5:'',w6:''})
       }
       if(thl==6){
           th=1
       }
       else{
        this.setState({thrusday:[],th1:'',th2:'',th3:'',th4:'',th5:'',th6:''})
        }
        if(fl==6){
            f=1
       }
       else{
           this.setState({friday:[],f1:'',f2:'',f3:'',f4:'',f5:'',f6:'',})
       }
       if(sl==6){
           s=1
       }
       else{
        this.setState({saturday:[],s1:'',s2:'',s3:'',s4:'',s5:'',s6:''})
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
            this.setState({showSub:0})
            this.setState({m1:'',m2:'',m3:'',m4:'',m5:'',m6:'',
            t1:'',t2:'',t3:'',t4:'',t5:'',t6:'',
            w1:'',w2:'',w3:'',w4:'',w5:'',w6:'',
            th1:'',th2:'',th3:'',th4:'',th5:'',th6:'',
            f1:'',f2:'',f3:'',f4:'',f5:'',f6:'',
            s1:'',s2:'',s3:'',s4:'',s5:'',s6:''})
            // return(1)
        }
    }
    render() { 
        console.log("focus and blur saFday",this.state.saFday)
        console.log("fetchSub",this.state.submit)
        console.log("this is teacher",this.state.monday)
        console.log("this is teacher",this.state.monday)
        if(this.state.showSub==1){
        return(
            <div className={styles.TableMargin}>
            <small style={{color:'red'}}><p>*please fill the form cairfully if their is no time in any day fill it 0 and no option</p>
            rules:
           <p> 1)Their should be two digit number</p>
            <p>2)If their was no time for any day fill 0 and no option</p>
            </small>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {/* <div className="row"> */}
                        <th scope="row">Mon</th>
                        <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.monday1Ref} name="m1" value={this.state.m1} onChange={(event)=>this.changeinput1(event,this.monday2Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.monday2Ref} name="m2" value={this.state.m2} onChange={(event)=>this.changeinput1(event,this.monday1Select)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.monday1Select} className="form-control input-sm" name="m3" value={this.state.m3} onChange={(event)=>this.changeinput1(event,this.monday3Ref)} >
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                                </select>
                            </div>
                            </div>
                        </td>
                        <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.monday3Ref} name="m4" value={this.state.m4} onChange={(event)=>this.changeinput1(event,this.monday4Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.monday4Ref} name="m5" value={this.state.m5} onChange={(event)=>this.changeinput1(event,this.monday2Select)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.monday2Select} className="form-control input-sm" name="m6" value={this.state.m6} onChange={(event)=>this.changeinput1(event,this.tuesday1Ref)}>
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                        </td>
                    {/* </div> */}
                </tr>
                <tr>
                    {/* <div className="row"> */}
                        <th scope="row">Tue</th>
                        <td>  
                            <div className="row">
                                <div className="col col-sm-3">
                                    <input type="number" className="form-control input-sm" ref={this.tuesday1Ref} value={this.state.t1} name="t1"  onChange={(event)=>this.changeinput1(event,this.tuesday2Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <input type="number" className="form-control input-sm" ref={this.tuesday2Ref} name="t2" value={this.state.t2}  onChange={(event)=>this.changeinput1(event,this.tuesday3Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <select ref={this.tuesday3Ref} className="form-control input-sm" name="t3" value={this.state.t3} onChange={(event)=>this.changeinput1(event,this.tuesday4Ref)} >
                                                <option >--</option>
                                                <option value="no">no</option>
                                                <option value="am">Am</option>
                                                <option value="pm">pm</option>
                                    </select>
                                </div>
                            </div>
                        </td> 
                        <td>
                            <div className="row">
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.tuesday4Ref} className="form-control input-sm" name="t4" value={this.state.t4} onChange={(event)=>this.changeinput1(event,this.tuesday5Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.tuesday5Ref} className="form-control input-sm" name="t5" value={this.state.t5} onChange={(event)=>this.changeinput1(event,this.tuesday6Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <select ref={this.tuesday6Ref} name="t6" className="form-control input-sm" value={this.state.t6} onChange={(event)=>this.changeinput1(event,this.wednesday1Ref)}>
                                        <option >--</option>
                                        <option value="no">no</option>
                                        <option value="am">Am</option>
                                        <option value="pm">pm</option>
                                    </select>
                                </div>
                            </div> 
                        </td>
                    {/* </div> */}
                </tr>
                <tr>
                    {/* <div className="row"> */}
                        <th scope="row">Wed</th>
                        <td>
                            <div className="row">
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.wednesday1Ref} className="form-control input-sm" name="w1" value={this.state.w1} onChange={(event)=>this.changeinput1(event,this.wednesday2Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.wednesday2Ref} className="form-control input-sm" name="w2" value={this.state.w2} onChange={(event)=>this.changeinput1(event,this.wednesday3Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <select ref={this.wednesday3Ref} name="w3" className="form-control input-sm" value={this.state.w3} onChange={(event)=>this.changeinput1(event,this.wednesday4Ref)} >
                                                <option >--</option>
                                                <option value="no">no</option>
                                                <option value="am">Am</option>
                                                <option value="pm">pm</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row">
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.wednesday4Ref} className="form-control input-sm" name="w4" value={this.state.w4} onChange={(event)=>this.changeinput1(event,this.wednesday5Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <input type="number" ref={this.wednesday5Ref} className="form-control input-sm" name="w5" value={this.state.w5} onChange={(event)=>this.changeinput1(event,this.wednesday6Ref)}/>
                                </div>
                                <div className="col col-sm-3">
                                    <select ref={this.wednesday6Ref} name="w6" className="form-control input-sm" value={this.state.w6} onChange={(event)=>this.changeinput1(event,this.thusday1Ref)}>
                                        <option >--</option>
                                        <option value="no">no</option>
                                        <option value="am">Am</option>
                                        <option value="pm">pm</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    {/* </div> */}
                </tr>
                <tr>
                    
                    {/* <div className="row"> */}
                    <th scope="row">Thu</th>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" ref={this.thusday1Ref} className="form-control input-sm" value={this.state.th1} name="th1"  onChange={(event)=>this.changeinput1(event,this.thusday2Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" ref={this.thusday2Ref} className="form-control input-sm" name="th2" value={this.state.th2} onChange={(event)=>this.changeinput1(event,this.thusday3Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.thusday3Ref} name="th3" className="form-control input-sm" value={this.state.th3} onChange={(event)=>this.changeinput1(event,this.thusday4Ref)} >
                                            <option >--</option>
                                            <option value="no">no</option>
                                            <option value="am">Am</option>
                                            <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" ref={this.thusday4Ref} className="form-control input-sm" name="th4" value={this.state.th4} onChange={(event)=>this.changeinput1(event,this.thusday5Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" ref={this.thusday5Ref} className="form-control input-sm" name="th5" value={this.state.th5} onChange={(event)=>this.changeinput1(event,this.thusday6Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.thusday6Ref} className="form-control input-sm" name="th6" value={this.state.th6} onChange={(event)=>this.changeinput1(event,this.friday1Ref)}>
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    {/* </div> */}
                </tr>
                <tr>
                    {/* <div className="row"> */}
                    <th scope="row">Fri</th>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.friday1Ref} name="f1" value={this.state.f1} onChange={(event)=>this.changeinput1(event,this.friday2Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.friday2Ref} name="f2" value={this.state.f2} onChange={(event)=>this.changeinput1(event,this.friday3Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.friday3Ref} name="f3" className="form-control input-sm" value={this.state.f3} onChange={(event)=>this.changeinput1(event,this.friday4Ref)} >
                                            <option >--</option>
                                            <option value="no">no</option>
                                            <option value="am">Am</option>
                                            <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" ref={this.friday4Ref} className="form-control input-sm" name="f4" value={this.state.f4} onChange={(event)=>this.changeinput1(event,this.friday5Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" ref={this.friday5Ref} className="form-control input-sm" name="f5" value={this.state.f5} onChange={(event)=>this.changeinput1(event,this.friday6Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.friday6Ref} name="f6" className="form-control input-sm" value={this.state.f6} onChange={(event)=>this.changeinput1(event,this.saturday1Ref)}>
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    {/* </div> */}
                </tr>
                <tr>
                    {/* <div className="row"> */}
                    <th scope="row">Sat</th>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">

                                <input type="number" className="form-control input-sm" ref={this.saturday1Ref} name="s1" value={this.state.s1}  onChange={(event)=>this.changeinput1(event,this.saturday2Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" className="form-control input-sm" ref={this.saturday2Ref} name="s2" value={this.state.s2}  onChange={(event)=>this.changeinput1(event,this.saturday3Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.saturday3Ref} className="form-control input-sm" name="s3" value={this.state.s3}  onChange={(event)=>this.changeinput1(event,this.saturday4Ref)} >
                                            <option >--</option>
                                            <option value="no">no</option>
                                            <option value="am">Am</option>
                                            <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row">
                            <div className="col col-sm-3">
                                <input type="number" ref={this.saturday4Ref} className="form-control input-sm" name="s4" value={this.state.s4}  onChange={(event)=>this.changeinput1(event,this.saturday5Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <input type="number" ref={this.saturday5Ref}  className="form-control input-sm" name="s5" value={this.state.s5}   onChange={(event)=>this.changeinput1(event,this.saturday6Ref)}/>
                            </div>
                            <div className="col col-sm-3">
                                <select ref={this.saturday6Ref} name="s6" value={this.state.s6}  className="form-control input-sm" onChange={this.changeinput1}>
                                    <option >--</option>
                                    <option value="no">no</option>
                                    <option value="am">Am</option>
                                    <option value="pm">pm</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    {/* </div> */}
                </tr>
                
                </tbody>
               </table>
               <div className="text-right" style={{margin:'5px 100px'}}>
                    <button onClick={this.onSubmitTimeTable} className="btn btn-primary btn-sm">submit</button>
               </div>
                </div>
        



                )
        }
        
        return ( 
            <div>
            
                {/* <form> */}
                    <div className={styles.inputFormcss}>
                        <TextField label="First Name" type="text" name="teacherfirstName" value={this.state.teacherfirstName} helperText={this.state.teacherfirstName ? '':"Please Enter First Name"}
                        onFocus={this.handleFocus} onBlur={this.handleBlur}
                        onChange={this.textChange}
                        error={this.state.isFocused ? false :this.state.teacherfirstName ? false :true}
                        style={{margin:'10px 60px 10px 20px'}}
                        />

                        <TextField label="Last Name" type="text" name="teacherlastName" value={this.state.teacherlastName} helperText={this.state.teacherlastName ? '':"Please Enter Last Name"}
                        onFocus={this.handleFocus} onBlur={this.handleBlur}
                        onChange={this.textChange}
                        error={this.state.isFocused ? false :this.state.teacherlastName ? false :true}
                        style={{margin:'10px 20px 10px 20px'}}/><br/>

                        <TextField label="Contact Number" type="number" name="Contact" value={this.state.Contact} helperText={this.state.Contact ? '':"Please Enter Contact Number"}
                        onFocus={this.handleFocus} onBlur={this.handleBlur}
                        onChange={this.textChange}
                        error={this.state.isFocused ? false :this.state.Contact ? false :true}
                        style={{margin:'10px 60px 10px 20px'}}
                        />

                        <TextField label="Email Address" name="email"  type="email" value={this.state.email} helperText={this.state.email ? '':"Please Enter valid Email Address"}
                        onFocus={this.handleFocus} onBlur={this.handleBlur}
                        onChange={this.textChange}
                        error={this.state.isFocused ? false :this.state.emailIsValid ? false :true}
                        style={{margin:'10px 20px 10px 20px'}} required/>



                        <div className='row' style={{margin:'10px 20px 10px 20px'}}>
                            <input type="file" name="teacherImage" onChange={this.fileUploadHandler} />
                            <input type="radio" name="sex" value="male" onClick={this.chooseSex} style={{margin:'5px 2px'}}/>Male
                            <input type="radio" name="sex" value="femail" onClick={this.chooseSex} style={{margin:'5px 2px'}} />Femail
                        </div>



                            <div className="row">
                            <TextField label="Current Address" type="text" name="address" style={{margin:'10px 20px 10px 20px'}} value={this.state.address} helperText={this.state.address ? '':"Please Enter Current Address"}
                            onFocus={this.handleFocus} onBlur={this.handleBlur}
                            onChange={this.textChange}
                            error={this.state.isFocused ? false :this.state.address ? false :true}
                            style={{margin:'10px 60px 10px 20px'}}
                            />
                            <div className="col col-sm-4"  onFocus={this.handleFocus} onBlur={this.handleBlur} style={{margin:'19px 20px 10px 20px'}} >
                                <select className="custom-select" name="timeType" onChange={this.textChange} >
                                    <option value="">Type</option>
                                    <option value="fullTime">Full Time</option>
                                    <option value="parttime">Part Time</option>
                                </select>
                                {this.state.isFocused ? "" :this.state.timeType ? '' :<small style={{color:'red'}}>please select Time</small>}
                            </div>
                        </div>
                    </div>
                    {/* {this.state.showSub ? 
                   
                   





                    :""} */}
                    <div className={styles.inputFormcss}>
                        {/* <InputLabel id="selectitem">Faculty</InputLabel> */}
                        <div className='row'>
                            <div className="col col-sm-4" name="type"   onFocus={this.handleFocus} onBlur={this.handleBlur}>
                                <select className="custom-select" onChange={this.chooseSemister}>
                                    <option value="">Faculty</option>
                                {this.state.courseId.map((cid,i)=><option key={i} value={cid}>{cid}</option>)} 
                                </select>
                                {this.state.isFocused ? "" :this.state.course ? '' :<small style={{color:'red'}}>please select Faculty</small>}
                            </div>
                            <div className="col">
                                {this.state.semister.map((sem ,i)=><b key={i}><input type="checkbox" name={sem}  value={sem}  onChange={this.checkOnChangeData}/>{sem} <br/></b>)}
                                <button onClick={this.fetchSubjectFromBackend} disabled={this.state.fetchSub? false : true } className="btn btn-primary">Show Subject</button>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.subject.map((sub ,i)=><b key={i} style={{margin:'10px 30px'}}><input type="checkbox" name={sub}  value={sub}  onChange={this.checkOnchooseSub} />{sub} <br/></b>)}
                        </div>
                        <button className="btn btn-primary" onClick={this.formSubmitInDb} style={{margin:'20px 0px'}}> Submit </button>
                    </div>
                    
                {/* </form> */}
            </div>
         );
    }

}
 
export default Teacher;