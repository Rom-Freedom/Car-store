import React, {FC, useState} from 'react';
import './App.css';
import DisplayPage from './DisplayPage/DisplayPage';
import Card from './Models/Card';

const App: FC = () => {
const [cardList, setCardList] = useState<Card[]>([]);

const addCard = (newCArd: Card) => {
  setCardList([...cardList, newCArd]);
}

const deleteCard = (id: number) => {
  const newCardList = cardList.filter(card => card.id !== id);
  setCardList(newCardList);
}

const updateCard = (newCard: Card) => {
  setCardList(cardList.map((card) => (
    card.id === newCard.id ? newCard : card
  )));
}

  return (
    <div className="App">
      <DisplayPage  
      cardList={cardList}
      addCard={addCard}
      deleteCard={deleteCard}
      updateCard={updateCard}
      /> 
    </div>
  );
}

export default App;
