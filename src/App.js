import React, { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import CardList from 'components/CardList/CardList';


const classes = ["Warrior", "Mage", "Brawler", "Assassin", "Archer"]

function App() {
  const [cardClasses, setCardClasses] = useState([])

  useEffect(() => {
    classes.forEach((item) => {
      setCardClasses((prev) => [...prev, {name: item, cards: []}])
    })
  }, [])

  const getCards = (card) => {
    if (!(cardClasses.find(e => e.name === card.class))) {
      setCardClasses((prev) => [...prev, {name: card.class, cards: []}])
    }
    const updatedClasses = cardClasses
    updatedClasses[updatedClasses.indexOf(updatedClasses.find(item => item.name === card.class))].cards.push(card)
    setCardClasses([...updatedClasses])
  }

  const removeCard = (card, index) => {
    const updatedClasses = cardClasses
    updatedClasses[updatedClasses.indexOf(updatedClasses.find(item => item.name === card.class))].cards.splice(index, 1)
    setCardClasses([...updatedClasses])
  }

  return (
    <div className="App">
    <Banner />
    <button className='w-[100px] h-[100px] '></button>
    <Form sendCards={getCards} classes={cardClasses}/>
    <CardList classes={cardClasses} removeCard={removeCard}/>
    </div>
  );
}

export default App;
