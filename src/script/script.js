import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { initTooltips, fillModal, navigateCards } from './utils';



console.log("Мы зашли в script.js");

$(document).ready(() => {
  initTooltips();

  $(document).on('click', '.card', function (e) {
    const modal = $(document).find("#modal");
    fillModal(modal, $(this));
  });

  $(document).on('keydown', navigateCards);

  $(document).on('click', '#modal .slide-btn', function(){
    const modal = $(document).find("#modal");
    const cardsList = $(document).find('.card').toArray().map((item)=>{
      return $(item).attr('id')
    });
    const current = cardsList.findIndex(element => element == modal.attr("current-item"));

    if(current == -1){
      throw new Error("invalid card index");
    }
    
    if($(this).hasClass("btn-prev")){
      const prevSlide = current > 0 ? cardsList[current-1] : cardsList[cardsList.length - 1];
      fillModal(modal, $(document).find(`#${prevSlide}`));
    } else if($(this).hasClass("btn-next")){
      const nextSlide = current < cardsList.length-1 ? cardsList[current+1] : cardsList[0];
      fillModal(modal, $(document).find(`#${nextSlide}`));
    }
  });
  const loadButton = $('#toastbtn');

const newCardForm = $('#new-card-form')[0];
const saveNewButton = $('#save-new-button')[0];
const saveButton = $('#save-button')[0];

  $(document).on('click', '#toastbtn', function (e) {
    const newCardModal = new bootstrap.Modal($('#new-card-modal'));
    console.log('ddd');
    const modal = $(document).find("#new-card-modal");
    fillModal(modal);
    newCardModal.show();
  })
  





function renderCards() {
 
}


saveNewButton.addEventListener('click', (event) => {

});


saveButton.addEventListener('click', (event) => {
});
});

