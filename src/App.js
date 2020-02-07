import React from 'react';
import SearchForm from './SearchForm';
import NameList from './NameList';

import './App.css';


class App extends React.Component {
state ={
  results:[]
}

getResult = (results) =>{
  this.setState({results})
}
 render() {
  return (
    <main className='App'>
      <SearchForm showResult={this.getResult}/>
      <NameList result={this.state.results}/>
    </main>
  );
 }
  
}

export default App;