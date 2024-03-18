import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './AddForm.css';
import Card from '../Models/Card';

interface AddFormProps {
  addCard: (newCard: Card) => void;
}

const initialState = {
  title: '',
  description: '',
  price: '',
  img: '',
}

const AddForm: FC<AddFormProps> = ({addCard}) => {
    const [newCard, setnewCard] = useState<{
      title: string;
      description: string;
      price: string;
      img: string;
    }>(initialState);

const handlerChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setnewCard({...newCard, [name]: value})
}

const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const {title, description, img, price} = newCard;
  if(title && description && price && img) {
    addCard({
      title,
      description,
      price,
      img,
      id: Date.now(),
    });
    setnewCard(initialState);
  }
}

  return (
   <form 
    onSubmit={handlerSubmit}
    className='wrapper'>
      <input
      type='text'
      name='title'
      onChange={handlerChange}
      value={newCard.title}
      placeholder='Model'/>

      <input
      type='text'
      name='description'
      onChange={handlerChange}
      value={newCard.description}
      placeholder='Year'/>

      <input
      type='number'
      name='price'
      onChange={handlerChange}
      value={newCard.price}
      placeholder='Price'/>

      <input
      type='text'
      name='img'
      onChange={handlerChange}
      value={newCard.img}
      placeholder='Image'/>

      <button type='submit'>Add Card</button>
   </form>
  );
}

export default AddForm;