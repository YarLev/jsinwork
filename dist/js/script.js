"use strict";
window.addEventListener('DOMContentLoaded', () => {

   //Start Tabs ************************************************************************************************************************

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

   //End Tabs **************************************************************************************************************************

   //Start Timer ***********************************************************************************************************************

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
      if (num >= 0 && num <10) {
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


});