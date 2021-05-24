import React from 'react';
import api from '../utils/Api';
import Card from './Card';

import buttonAdd from '../images/add_button_plus.svg';
import buttonEdit from '../images/edit_button.svg';
import avatarEdit from '../images/avatar_edit_pen.svg';



function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

  
    api.getInitialCards()
            .then((results) => {
                setCards(results);
            })
            .catch((err) => {
                console.log(`${err}`);
            });


    api.getUserInfo()
        .then((userInfo) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
        })
        .catch((err) => {
            console.log(`${err}`);
        });



    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                <img className="profile__avatar" src={userAvatar} alt="Аватар" onClick={props.onEditAvatar}/>
                <img className="profile__avatar-edit" src={avatarEdit} alt="Ручка"/>
                </div>
                <div className="info">
                    <h1 className="info__name">{userName}</h1>
                    <button type="button" className="button button_type_edit" onClick={props.onEditProfile}><img className="info__button-img" src={buttonEdit} alt="Кнопка редактирования"/></button>
                    <p className="info__about">{userDescription}</p>
                </div>
                <button type="button" className="button button_type_add-card" onClick={props.onAddPlace}><img className="profile__button-img" src={buttonAdd} alt="Кнопка добавления новой карточки"/></button>
            </section>

            <section>
                <ul className="cards" id="cards">
                {cards.map(card => (<Card key={card._id} card={card} onCardClick={props.onCardClick}/>))}
                </ul>
            </section>
        </main>
    )
}

export default Main;