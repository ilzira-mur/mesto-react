import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false); 
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleEditProfileClick = () => {
      setEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
      setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
      setAddPlacePopupOpen(true);
  };

  const handleDeleteCardClick = () => {
    setDeleteCardPopupOpen(true);
  };

  const handleCardClick = (card) =>{
    setSelectedCard(true);
    setSelectedCard(card);
 }

  const closeAllPopups = () => {
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setDeleteCardPopupOpen(false);
      setSelectedCard(false);
  };

 
  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onDeleteCard={handleDeleteCardClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input type="text" id ="profilename" name="profilename"  className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="40" required/>
              <span className="popup__span-error" id="profilename-error"></span>
              <input type="text" id="profileabout" name="profileabout"  className="popup__input popup__input_type_about" placeholder="Профессия" minLength="2" maxLength="200" required/>
              <span className="popup__span-error" id="profileabout-error"></span>
            <button type="submit" className="popup__button popup__button_type_save popup__button_type_save-edit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm title={'Обновить аватар'} name={'avatar-edit'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input type="url" id="avatarlink" name="avatarlink" className="popup__input popup__input_type_avatar-edit" placeholder="Ссылка на аватарку" required/>
                <span className="popup__span-error" id="avatarlink-error"></span>
                <button type="submit" className="popup__button popup__button_type_save popup__button_type_avatar-edit popup__button_disabled">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm title={'Новое место'} name={'add-card'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input type="text" id="cardname" name="cardname" className="popup__input popup__input_type_card-name" placeholder="Название" minLength="2" maxLength="30" required/>
              <span className="popup__span-error" id="cardname-error"></span>
              <input type="url" id="cardlink" name="cardlink" className="popup__input popup__input_type_card-link" placeholder="Ссылка на картинку" required/>
              <span className="popup__span-error" id="cardlink-error"></span>
            <button type="submit" className="popup__button popup__button_type_save popup__button_type_save-card popup__button_disabled" disabled>Создать</button>
      </PopupWithForm>
      <PopupWithForm title={'Вы уверены?'} name={'delete-card'} isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups}>
            <button type="submit" className="popup__button popup__button_type_save popup__button_type_small">Да</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
