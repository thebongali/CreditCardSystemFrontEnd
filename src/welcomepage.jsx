import React from 'react';


class Welcomepage extends React.Component {
  render(){
    const mystyle = {
      color: "blue",
      margin: "20px 20px 20px 20px",
      padding: "10px",
    };
      return (
          <div>
             <p style={mystyle}> Welcome User!!</p>
          </div>
      )
  }
}

  export default Welcomepage;