import React, { FC } from "react";
import "./DisplayPage.css";
import AddForm from "../AddForm/AddForm";
import SingleCard from "../SingleCard/SingleCard";
import Card from "../Models/Card";

interface DisplayPageProps {
  cardList: Card[];
  addCard: (newCard: Card) => void;
  deleteCard: (id: number) => void;
  updateCard: (newCard: Card) => void;
}

const DisplayPage: FC<DisplayPageProps> = ({ 
  cardList,
  addCard,
  deleteCard,
  updateCard,
}) => {
  return (
    <div className="container">
      <div className="form__box">
        <h2>Add form</h2>
        <AddForm addCard={addCard} />
      </div>
      <hr />
      <div className="gallery__box">
        <h2>Gallery</h2>
        {cardList.map((card) => (
            <SingleCard
            updateCard={updateCard}
            card={card}
            key={card.id} 
            deleteCard={deleteCard}
            />
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
