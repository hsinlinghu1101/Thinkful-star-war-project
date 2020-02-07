import React  from 'react';

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                value: ""
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
       
    this.setState({value: event.target.value})    
     
    }
       
    handleSubmit(event){    
    event.preventDefault();
    let item = this.state.value;
      fetch(`https://swapi.co/api/people/?search=${item}`)
       .then(res => {
           if(res.ok){
               return res.json()
           }else{
               throw new Error (res.statusText)
           }
       })
       .then(resJson =>this.props.showResult(resJson.results.map((item, index) => <p key={index}>{item.name}</p>)))
       .catch(error => console.log(error.message))
    }

  render(){



      return(
        <form>
            <h1> Star War characters</h1>
            <label>Enter Character Name</label><br></br>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.value} placeholder="skywalker"/><br></br>
            <button onClick={this.handleSubmit} type="submit">Submit</button>
        </form>
      )
  }
     
}