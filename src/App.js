import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro"},
    {name: "Hanako", age: "5"},
    {name: 20, age: "20"}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default App;
