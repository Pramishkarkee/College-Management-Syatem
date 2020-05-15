
import React from 'react';
import {Login,Admin,Home} from "./components"
import CheckLogin from "./components/login/checkLogin"
import { HashRouter, Redirect,Router,Route} from 'react-router-dom';
 const App =(props)=>{
  
  const {status}=props
  console.log("&&&&&&######",status)
  if(status==1){
      return(
          <div>
              <Redirect to="checkLogin"/>
          </div>
      )  
      }
  else{
      return ( 
        <HashRouter>
       
        <Route path="/" exact component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/checkLogin"><CheckLogin/></Route>
        <Route path="/home" component={Home}></Route>
      </HashRouter>
          // <Login/>
       );
  }
  }

export default App;