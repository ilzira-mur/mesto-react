import React from 'react';

function Card({card, onCardClick, onDeleteCard}) {
    const handleClick = () => {
        onCardClick(card);
    }

    const handleDeleteClick = () => {
      onDeleteCard(card);
    }
     
    return (
        <li className="card">
            <button type="button" className="card__button-delete" onClick={handleDeleteClick}/>
            <img className="card__picture" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="card__info">
              <h2 className="card__name">{card.name}</h2>
              <div className="card__like-container">
                <button type="button" className="button card__button-like" aria-label="like"/>
                <span className="card__like-counter">{card.likes.length}</span>
              </div>
            </div>
        </li> 
    );
}

export default Card;