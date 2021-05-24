import React from 'react';
import api from '../utils/Api';
import Card from './Card';

import buttonAdd from '../images/add_button_plus.svg';
import buttonEdit from '../images/edit_button.svg';


function Main({onEditAvatar, onEditProfile, onAddPlace, onDeleteCard, onCardClick}) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);


    React.useEffect(()=>{
        Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(([cards, userInfo]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
            setCards(cards);
          }).catch(err => console.log(`${err}`))
      }, [])

  
    return (
        <main>
            <section className="profile">
                <button className="profile__avatar-container" onClick={onEditAvatar}>
                    <div className="profile__avatar-edit"></div>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
                </button>
                <div className="info">
                    <h1 className="info__name">{userName}</h1>
                    <button type="button" className="button button_type_edit" onClick={onEditProfile}><img className="info__button-img" src={buttonEdit} alt="Кнопка редактирования"/></button>
                    <p className="info__about">{userDescription}</p>
                </div>
                <button type="button" className="button button_type_add-card" onClick={onAddPlace}><img className="profile__button-img" src={buttonAdd} alt="Кнопка добавления новой карточки"/></button>
            </section>

            <section>
                <ul className="cards" id="cards">
                {cards.map(card => (<Card key={card._id} card={card} onDeleteCard={onDeleteCard} onCardClick={onCardClick}/>))}
                </ul>
        </section>
        </main>
    )
}

export default Main;