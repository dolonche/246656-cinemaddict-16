import {renderTemplate, RenderPosition} from './render.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createCardTemplate} from './view/card.js';
import {createFilmsWrapperTemplate} from './view/films-wrapper.js';
import {createMenuTemplate} from './view/menu.js';
import {createPopupTemplate} from './view/popup.js';
import {createUserStatusTemplate} from './view/user-status.js';

const FILM_LIST_CARDS = 5;
const FILM_LIST_CARDS_SUGGESTION = 2;
const pageHeader = document.querySelector('.header');
const pageMain = document.querySelector('.main');
const pageFooter = document.querySelector('.footer');

renderTemplate(pageHeader, createUserStatusTemplate(), RenderPosition.BEFOREEND);
renderTemplate(pageMain, createMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(pageMain, createFilmsWrapperTemplate(), RenderPosition.BEFOREEND);

const filmsList = pageMain.querySelector('.films-list__container');
const filmsListSuggestion = pageMain.querySelectorAll('.films-list--extra .films-list__container');

for (let i = 0; i < FILM_LIST_CARDS; i++) {
  renderTemplate(filmsList, createCardTemplate(), RenderPosition.AFTERBEGIN);
}
renderTemplate(filmsList, createShowMoreButtonTemplate(), RenderPosition.AFTEREND);
filmsListSuggestion.forEach((filmsListSuggestionItem) => {
  for (let i = 0; i < FILM_LIST_CARDS_SUGGESTION; i++) {
    renderTemplate(filmsListSuggestionItem, createCardTemplate(), RenderPosition.BEFOREEND);
  }
});

renderTemplate(pageFooter, createPopupTemplate(), RenderPosition.AFTEREND);
