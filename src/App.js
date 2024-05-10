import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import CardList from 'components/CardList/CardList';

function App() {
  const [cards, setCards] = useState([])

  const getCards = (card) => {
    setCards([...cards, card])
  }

  const removeCard = (id) => {
    const found = cards.find((element) => element.id === id);
    setCards(cards.toSpliced(cards.indexOf(found), 1))
  }

  return (
    <div className="App">
    <Banner />
    <Form sendCards={getCards}/>
    <CardList cards={cards} removeCard={removeCard}/>
    </div>
  );
}

export default App;
