import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Card from '../Models/Card';

interface EditFormProps {
  data: Card;
  handlerToggleEdit: () => void;
  updateCard: (newCard: Card) => void;
}


const EditForm: FC<EditFormProps> = ({data, handlerToggleEdit, updateCard}) => {
    const [editCard, setEditCard] = useState<Card>(data)

const handlerChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setEditCard({
        ...editCard,
        [name]: value,
    })
}

const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const {title, description, img, price} = editCard;
  if(title && description && price && img) {
    updateCard(editCard);
    handlerToggleEdit();
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
      value={editCard.title}
      placeholder='Model'
      />
      <input
      type='text'
      name='description'
      onChange={handlerChange}
      value={editCard.description}
      placeholder='Year'
      />
      <input
      type='number'
      name='price'
      onChange={handlerChange}
      value={editCard.price}
      placeholder='Price'
      />
      <input
      type='text'
      name='img'
      onChange={handlerChange}
      value={editCard.img}
      placeholder='Image'
      />

      <button type='submit'>Edit Card</button>
   </form>
  );
}

export default EditForm;