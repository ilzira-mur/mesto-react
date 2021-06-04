import React from 'react';
import api from '../utils/api'
import Card from './Card';

import buttonAdd from '../images/add_button_plus.svg';
import buttonEdit from '../images/edit_button.svg';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({onEditAvatar, onEditProfile, onAddPlace, onDeleteCard, onCardClick, onCardLike}) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);
    
    React.useEffect(()=>{
        api.getInitialCards()
        .then((cards) => {
            setCards(cards);
          }).catch(err => console.log(`${err}`))
      }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch(err => console.log(`${err}`))
    }

    function handleCardDelete(card) {
        const deleteCards = cards.filter((c) => c._id !== card._id);
        api.deleteCard(card._id)
            .then(() => {
                setCards(deleteCards)
            }).catch(err => console.log(`${err}`))

    }

  
    return (
        <main>
            <section className="profile">
                <button className="profile__avatar-container" onClick={onEditAvatar}>
                    <div className="profile__avatar-edit"></div>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
                </button>
                <div className="info">
                    <h1 className="info__name">{currentUser.name}</h1>
                    <button type="button" className="button button_type_edit" onClick={onEditProfile}><img className="info__button-img" src={buttonEdit} alt="Кнопка редактирования"/></button>
                    <p className="info__about">{currentUser.about}</p>
                </div>
                <button type="button" className="button button_type_add-card" onClick={onAddPlace}><img className="profile__button-img" src={buttonAdd} alt="Кнопка добавления новой карточки"/></button>
            </section>

            <section>
                <ul className="cards" id="cards">
                {cards.map(card => (<Card key={card._id} card={card} onDeleteCard={handleCardDelete} onCardClick={onCardClick} onCardLike={handleCardLike}/>))}
                </ul>
            </section>
        </main>
    )
}

export default Main;