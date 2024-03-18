import React, { FC, useState } from 'react';
import './SingleCard.css';
import Card from '../Models/Card';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import EditForm from '../EditForm/EditForm';

interface SingleCardProps {
    card: Card;
    deleteCard: (id: number) => void;
    updateCard: (newCArd: Card) => void;
}

const SingleCard: FC<SingleCardProps> = ({card, deleteCard, updateCard}) => {

const handlerDelete = () => {
    deleteCard(card.id)
}

const [edit, setEdit] = useState<boolean>(false);

const handlerToggleEdit = () => {
    setEdit(!edit);
}

    return (
        <div className='card'>
            <div className='img__box'>
                <img src={`images/${card.img}`} />
            </div>
            <div className='btn__box'>
            <FaEdit onClick={handlerToggleEdit}
            style={{marginRight: 10}}
            />
            <MdDelete onClick={handlerDelete}/>
            </div>
            <hr />
            {!edit ? (
                <div className='info__box'>
                <h3>Information about a car</h3>
                <div className='content'>
                    <h4>Model: {card.title}</h4>
                    <h4>Year: {card.description}</h4>
                    <h4>Price: {card.price}$</h4>
                </div>
            </div>
            ) : null}
            
            {edit ?
            <EditForm
            data={card}
            handlerToggleEdit={handlerToggleEdit}
            updateCard={updateCard}
            />: null}
        </div>
    );
};

export default SingleCard;