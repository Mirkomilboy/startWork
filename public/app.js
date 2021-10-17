'use strict';

// ================ toggle function
const toggleBtn = document.querySelectorAll('.toggle');

toggleBtn.forEach(item => item.addEventListener('click', e => {
    e.target.classList.toggle('bg-indigo-600');
    e.target.classList.toggle('bg-gray-200');
    e.target.lastElementChild.classList.toggle('translate-x-5')
    e.target.lastElementChild.classList.toggle('translate-x-0')
}));

// ================ continue and back button to hide and display form in create bookings page
const continueBtn = document.querySelectorAll('.continue');
const backBtn = document.querySelectorAll('.back');

continueBtn.forEach(item => item.addEventListener('click', e => {
    if(e.target.parentElement.parentElement.nextElementSibling.classList.contains('parent')) {
        e.target.parentElement.parentElement.classList.toggle('hidden');
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle('hidden');
    }
}));

backBtn.forEach(item => item.addEventListener('click', e => {
    e.target.parentElement.parentElement.classList.toggle('hidden');
    e.target.parentElement.parentElement.previousElementSibling.classList.toggle('hidden');
}));

// ================ tab function
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  if(tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    });
  }
});

// ================ dropdown hide and show
const dropBtn = document.querySelector('.dropBtn');
const dropContent = document.querySelector('.dropContent');

if(dropBtn) {
  dropBtn.addEventListener('click', function() {
    dropContent.classList.toggle('hidden');
  })
}


// ================ dropdown create input field on click
const createPlan = document.querySelector('.createPlan');

if(createPlan) {
  createPlan.addEventListener('click', function() {
    const content = document.querySelector('.content');

    content.insertAdjacentHTML('beforeend', `
    <div class="group flex items-center justify-between hover:bg-gray-100 px-4 py-2">
      <div class="border-b border-gray-300 w-full">
          <input class="text-gray-500 bg-white border-none w-full py-1" type="text" name="" id="" placeholder="Typing...">
      </div>
    </div>
    `)
  });
}


// ================ remove tooltip
const xBtn = document.querySelectorAll('.xBtn');

xBtn.forEach(item => item.addEventListener('click', e => {
  e.target.parentElement.remove();
}))