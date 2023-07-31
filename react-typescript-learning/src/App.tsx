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
       <Greet name='Reda' age={23} profession='Web developer' />
       <People people={peopleData} />
       <Status status='Loading' />
       <Definition>
        <Heading>
          <h1>Coding is art</h1>
        </Heading>
       </Definition>
       <Button handleClick={(event,id)=> console.log('Button is Clicked !', event,id)} />
       <Input 
              handleChange={(event) => console.log(event.target.value)}
               />
      </header> 
    </div>
  );
}

export default App;
