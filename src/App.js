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

  const showClasses = () => {
    console.log(cardClasses)
  }

  const getCards = (card) => {
    const updatedClasses = cardClasses
    updatedClasses[updatedClasses.indexOf(updatedClasses.find(item => item.name === card.class))].cards.push(card)
    setCardClasses([...updatedClasses])
  }

  const removeCard = (id) => {
    // const found = cards.find((element) => element.id === id);
    // setCards(cards.toSpliced(cards.indexOf(found), 1))
  }

  return (
    <div className="App">
    <Banner />
    <button onClick={showClasses} className='w-[100px] h-[100px] '></button>
    <Form sendCards={getCards} classes={cardClasses}/>
    <CardList classes={cardClasses} removeCard={removeCard}/>
    </div>
  );
}

export default App;
