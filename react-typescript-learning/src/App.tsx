import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import People from './components/People';
import Status from './components/Status';
import Heading from './components/Heading';
import Definition from './components/Definition';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import User from './components/User/User';
import Counter from './components/Counter/Counter';
import UseRef from './components/UseRef';


function App() {
  const peopleData = [
    {
      firstName:'Reda',
      lastName:'Hammada',
    },
    {

      firstName:'Yassine',
      lastName:'Hammada',

    },
  ]
  return (
    <div className="App">
      <header className="App-header">
       <Greet name='Reda' age={23} profession='Software Developer' />
       <People people={peopleData} />
       <Status status='Loading' />
       <Definition>
        <Heading>
          <h1>Coding is art</h1>
        </Heading>
       </Definition>
       <Button handleClick={(event,id)=> console.log('Button is Clicked !', event,id)} />
       <Input  handleChange={(event) => console.log(event.target.value)}
               />
       <Container style={{backgroundColor:'red',color:'blue', marginTop:'10px', marginBottom:'20px'}} />
       <User />
       <Counter />
       <UseRef />
      </header> 
    </div>
  );
}

export default App;
