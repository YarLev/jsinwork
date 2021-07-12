"use strict";
window.addEventListener('DOMContentLoaded', () => {

   // Start Tabs ********************************************************************************************

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

   // End Tabs **********************************************************************************************

   // Start Timer *******************************************************************************************

   const deadLine = '2021-07-19';

   function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         total: t,
         days: days,
         hours: hours,
         minutes: minutes,
         seconds: seconds
      };
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }

   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock('.timer', deadLine);

   // End Timer *********************************************************************************************

   // Start Modal ******************************************************************************************

   const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

   function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId);
   }
   
   function showModal(trigger) {
      trigger.forEach(element => {
         element.addEventListener('click', openModal);
      });
   }

      function closeModal() {
         modal.classList.add('hide');
         modal.classList.remove('show');
         document.body.style.overflow = '';
   }

   modalCloseBtn.addEventListener('click', closeModal);

   modal.addEventListener('click', (e) => {
      if (e.target == modal) {
         closeModal();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
         closeModal();
      }
   });

   showModal(modalTrigger);

   const modalTimerId = setTimeout(openModal, 6000);

   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal();
         window.removeEventListener('scroll', showModalByScrol);
      }
   }

   window.addEventListener('scroll', showModalByScroll);

   // End Modal ******************************************************************************************



   
});