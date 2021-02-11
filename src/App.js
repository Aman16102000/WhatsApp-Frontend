
import React from 'react';
import users from './user.js';
import User_chats from './chat/User_chats.js';
class Cq extends React.Component {
  state={
    User_arr:users,
    user_index:0
    }
change=(event)=>{
  //console.log(event.target.value);
  this.setState({
    user_index:event.target.value
  })
}
render(){
 
  return(
     <div className="container">
       <div className="row">
         <div className="col-2 col-sm-2"></div>

             <div className="col-8 col-sm-8">

               <div className="row">

                 <div className="col-6 col-sm-6">

                   <div className="row">
                     <div className="col-12 col-sm-12"><h2>Users</h2></div>
                     </div>
                   <div className="row">
                     <div className="col-12 col-sm-12">
                         <ul className="list-group">
                        {
                       this.state.User_arr.map((Ob,index)=>{
                         return(
                           <li className="list-group-item" key={Ob.id} value={Ob.id} onClick={this.change}>{Ob.name} </li>
                           );
                          })
                        }
                        </ul>
                        </div>
                   </div>
                 </div>
                 <div className="col-6 col-sm-6">
                    <div className="row">
                     <div className="col-12 col-sm-12"><h2>Chat</h2></div>
                     </div>
                     <div className="row">
                       <div className="col-12 col-sm-12">
                         <User_chats index={this.state.user_index} />
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
