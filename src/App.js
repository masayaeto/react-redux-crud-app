import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("Yhea!!")}}/>
      </React.Fragment>
    );
  }
}

// const App = () => {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("Yhea!!")}}/>
//     </React.Fragment>
//   );
// }

export default App;
