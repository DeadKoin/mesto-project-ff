// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const plcList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard(item) {
    const card = renderCard(item.link, item.name, removeCard);
    plcList.append(card);
  }
// @todo: Функция удаления карточки
function removeCard(event) {
  const card = event.target.closest('.card');
  card.remove();
}
// @todo: Вывести карточки на страницу
function renderCard(link, name, remove) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
    const removeButton = card.querySelector('.card__delete-button');
    cardImage.src = link;
    cardTitle.textContent = name;
    removeButton.addEventListener('click', remove);
    return card;
  }
initialCards.forEach(addCard);
