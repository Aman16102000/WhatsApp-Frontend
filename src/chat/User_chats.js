import React from 'react';
import ob from '../user.js';
class User_chats extends React.Component {
    constructor(props)
    {
        super(props);
    }
render(){
  return(
    
      <div className="row" style={{overflow:'scroll',overflowX:'hidden',height:'500px'}}>
          <div className="col-6 col-sm-6"></div>
          <div className="col-6 col-sm-6 ">
              
              {
               ob[this.props.index].chats.map((message,index)=>{
                   return(
                       <div className="row" key={index} style={{border:'10px solid #ECE5DD',borderRadius:'20px',backgroundColor:'#DCF8C6'}} >
                           <div className="col-12 col-sm-12">
                               <p>{message}</p>
                           </div>
                           
                       </div>
                   );
               })
              }

          </div>
      </div>
    
  )
}
}

export default User_chats;