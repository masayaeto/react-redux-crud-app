import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro"},
    {name: "Hanako", age: "5"},
    {name: "kentaro", age: "20"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}! I am {props.age} years old!</div>
}

User.defaultProps = {
  age: 20
}
export default App;
