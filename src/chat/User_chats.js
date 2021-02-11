import React from 'react';
import ob from '../user.js';
class User_chats extends React.Component {
    constructor(props)
    {
        super(props);
    }
render(){
  return(
    
      <div className="row">
          <div className="col-12 col-sm-12">
              {ob[this.props.index].chats}
          </div>
      </div>
    
  )
}
}

export default User_chats;