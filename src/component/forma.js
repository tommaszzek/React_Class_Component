import React, { Component } from 'react';

class Form extends Component {
    state = { 
        text:"",
        number:"",
        dane:null

     }
     handelText=(e)=>{
        this.setState({
            text: e.target.value
        });
     }
     handelObs=(data,cs)=>{
         let zm=Number(this.state.number)*2;
         let cos=cs+" "+data+' '+zm;
         this.setState({
            dane:cos
         });
     }
     handleVisitsNumberChange(e){
        this.setState({
            number:e.target.value,
        });
     }
     myForm=(e)=>{
         e.preventDefault();
         console.log(e.target[0].value);
     }
     komunikat=()=>{
         return '!!!zwiekszenie!!!';
     }
    render() { 
        let zm=this.komunikat();
        return (
        <>
            <form action='#' onSubmit={this.myForm}>
            <input type="text" name="imie" onChange={this.handelText} />
            <select value={this.state.number} onChange={this.handleVisitsNumberChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
          </select>
          {/* <button onClick={this.handelObs.bind(this,"zwiekszenie o 2 :")}>dane do obliczen</button> */}
          
          <button  onClick={()=>this.handelObs("=wynik to =","zwiekszenie o 2 :") }>dane do obliczen</button>
            </form>
            <p>
            {this.state.text} 
            <hr/>
            {this.state.number}
            <hr/>
            {this.state.dane ? this.state.dane  :"nie wcisnieto przycisku"}
            <hr/>
            {zm}
            </p>
        </>
        );
    }
}
 
export default Form;

