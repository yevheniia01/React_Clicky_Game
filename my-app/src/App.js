import React, {Component} from 'react';
//import logo from './logo.svg';
import Card from "./components/Card";
import './App.css';
//import Navbar from 'react-bootstrap/Navbar'
//import Container from 'react-bootstrap/Container'
//import Image from 'react-bootstrap/Image'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import cards from './cards.json'
import Score from './components/Score'
import Wrapper from './components/Wrapper'
import "./App.css";



  
class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedPuppyIds: [],
    score: 0,
    goal: 10,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 10){
        this.setState({score: 10, status: "You Won! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ cards, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Click the Pet</h1>
          <p className="App-intro">
             Do not click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
        
    </div>
    );
  }
}

export default App;