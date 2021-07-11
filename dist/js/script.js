"use strict";
window.addEventListener('DOMContentLoaded', () => {


   const tabsParent = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent');

   function hideTabContent() {
      tabContent.forEach(element => {
         element.classList.add('hide');
         element.classList.remove('show', 'fade');
      });

      tabs.forEach(element => {
         element.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabContent[i].classList.remove('hide');
      tabContent[i].classList.add('show', 'fade');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((element, number) => {
            if (target == element) {
               hideTabContent();
               showTabContent(number);
            }
         });
      }
   });





});