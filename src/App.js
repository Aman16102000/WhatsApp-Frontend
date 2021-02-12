
import React from 'react';
import users from './user.js';
import User_chats from './chat/User_chats.js';
import './App.css'
class Cq extends React.Component {
  state={
    User_arr:users,
    user_index:0,
    color:false
    }
change=(event)=>{
  //console.log(event.target.value);
  this.setState({
    user_index:event.target.value,
    color:true
  })
  
}
dp=()=>{
  console.log("dp");
}
render(){
 
  return(
     <div className="container " style={{marginTop:'30px'}}>
       <div className="row " >
         <div className="col-2 col-sm-2"></div>

             <div className="col-8 col-sm-8">

               <div className="row" style={{border:'1px solid black'}}>

                 <div className="col-6 col-sm-6" >

                   <div className="row" style={{background:"#075E54",color:'white'}}>
                     <div className="col-4 col-sm-4"></div>
                     <div className="col-4 col-sm-4" ><h2 >Users</h2></div>
                     <div className="col-4 col-sm-4"></div>

                     </div>
                   <div className="row">
                     <div className="col-12 col-sm-12 " style={{background:'white'}}>
                         <ul className="list-group">
                        {
                         
                       this.state.User_arr.map((Ob)=>{
                         return(
                          /*  <div className="row">
                             <div className="col-2 col-sm-2"><img src={Ob.img} style={{borderRadius:'20px'}}></img></div>
                             <div className="col-10 col-sm-10"> 
                             <li  className="list-group-item " style={{backgroundColor:this.state.user_index==Ob.id?'whitesmoke':'white'}} key={Ob.id} value={Ob.id} onClick={this.change}>{Ob.name} </li>
                             </div>
                           </div> */
                          
                           
                           <li  className="list-group-item " style={{backgroundColor:this.state.user_index==Ob.id?'whitesmoke':'white'}} key={Ob.id} value={Ob.id} onClick={this.change}>
                             <img onClick={this.dp} src={Ob.img} style={{borderRadius:'50%'}}></img>
                               
                                 &nbsp;&nbsp;&nbsp; {Ob.name} 
                            
                             </li>
                           );
                          })
                        }
                        </ul>
                        </div>
                   </div>
                 </div>
                 <div className="col-6 col-sm-6">
                    <div className="row" >
                     <div className="col-12 col-sm-12 "  style={{background:"#075E54",color:'white'}}>
                       <div className="row">
                         <div className="col-6 col-sm-1"><img src={users[this.state.user_index].img}  style={{borderRadius:'50%',marginTop:'21px',marginRight:'15px'}}></img> </div>
                         <div className="col-6 col-sm-11"><h2 style={{marginLeft:'20px'}}>{users[this.state.user_index].name}</h2></div>
                       </div>
                       
                       
                       </div>
                     </div>
                     <div className="row" style={{background:'#ECE5DD'}}>
                       
                       <div className="col-12 col-sm-12">
                         <User_chats index={this.state.user_index} />
                       </div>
                      </div>
                     <div className="row" style={{background:'#ECE5DD'}}>
                       <div className="col-12 col-12-sm ">
                         <input style={{position:'fixed'}} type="text"  placeholder="Type a message" style={{width:'90%',height:'35px',borderRadius:'25px',fontSize:'15px'}}></input>
                       </div>
                     </div>
                 </div>
               </div>
             </div>

          <div className="col-2 col-sm-2"></div>
       </div>
     </div>
  )
}
}

export default Cq;
