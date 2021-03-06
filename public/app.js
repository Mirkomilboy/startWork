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
const dropBtn = document.querySelectorAll('.dropBtn');
const dropContent = document.querySelectorAll('.dropContent');

if(dropBtn) {
  dropBtn.forEach(item => item.addEventListener('click', e => {
      // dropContent.classList.toggle('hidden');
      e.target.parentElement.nextElementSibling.classList.toggle('hidden');
  }))
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
// const xBtn = document.querySelectorAll('.xBtn');

// xBtn.forEach(item => item.addEventListener('click', e => {
  //   e.target.parentElement.remove();
  // }))


  // ================ remove tooltip
  let kanban3 = new jKanban({
    element : '#demo3',
    boards  :[
        {
            'id' : '_todo',
            'title'  : `
                    <div class="w-96 text-center">
                        <div class="inline-block">
                            <div class="flex items-center justify-center bg-brand-blue/10 text-brand-blue mx-auto px-2 py-1 rounded-md space-x-2.5">
                                <p class="font-medium text-sm">Unassigned Bookings</p>
                                <a href="#">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9688 1.26953C12.6042 0.923177 12.194 0.75 11.7383 0.75C11.2643 0.75 10.8451 0.923177 10.4805 1.26953L1.73047 10.0195C1.49349 10.2565 1.33854 10.5391 1.26562 10.8672L0.5 14.2305C0.481771 14.3581 0.518229 14.4766 0.609375 14.5859C0.682292 14.6953 0.791667 14.75 0.9375 14.75C0.973958 14.75 1.0013 14.75 1.01953 14.75C1.03776 14.7318 1.2474 14.6862 1.64844 14.6133C2.06771 14.5221 2.53255 14.4219 3.04297 14.3125C3.57161 14.1849 4.01823 14.0846 4.38281 14.0117C4.69271 13.9388 4.96615 13.7839 5.20312 13.5469L13.9805 4.76953C14.3268 4.40495 14.5 3.98568 14.5 3.51172C14.5 3.05599 14.3268 2.64583 13.9805 2.28125L12.9688 1.26953ZM4.27344 12.6172C4.21875 12.6719 4.15495 12.7083 4.08203 12.7266C3.82682 12.7812 3.51693 12.8542 3.15234 12.9453C2.80599 13.0182 2.45052 13.0911 2.08594 13.1641L2.55078 11.168C2.56901 11.0768 2.60547 11.0039 2.66016 10.9492L9.27734 4.33203L10.918 5.97266L4.27344 12.6172Z" fill="#293D66"/>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3125 2.9375H10.0703L9.14062 1.37891C8.86719 0.977865 8.49349 0.768229 8.01953 0.75H5.23047C4.75651 0.768229 4.38281 0.977865 4.10938 1.37891L3.17969 2.9375H0.9375C0.664062 2.95573 0.518229 3.10156 0.5 3.375V3.8125C0.518229 4.08594 0.664062 4.23177 0.9375 4.25H1.375V13C1.39323 13.4922 1.56641 13.9023 1.89453 14.2305C2.22266 14.5586 2.63281 14.7318 3.125 14.75H10.125C10.6172 14.7318 11.0273 14.5586 11.3555 14.2305C11.6836 13.9023 11.8568 13.4922 11.875 13V4.25H12.3125C12.5859 4.23177 12.7318 4.08594 12.75 3.8125V3.375C12.7318 3.10156 12.5859 2.95573 12.3125 2.9375ZM5.20312 2.14453C5.23958 2.08984 5.28516 2.0625 5.33984 2.0625H7.91016C7.96484 2.0625 8.01042 2.08984 8.04688 2.14453L8.53906 2.9375H4.71094L5.20312 2.14453ZM10.125 13.4375H3.125C2.85156 13.4193 2.70573 13.2734 2.6875 13V4.25H10.5625V13C10.5443 13.2734 10.3984 13.4193 10.125 13.4375ZM6.625 12.125C6.89844 12.1068 7.04427 11.9609 7.0625 11.6875V6C7.04427 5.72656 6.89844 5.58073 6.625 5.5625C6.35156 5.58073 6.20573 5.72656 6.1875 6V11.6875C6.20573 11.9609 6.35156 12.1068 6.625 12.125ZM4.4375 12.125C4.71094 12.1068 4.85677 11.9609 4.875 11.6875V6C4.85677 5.72656 4.71094 5.58073 4.4375 5.5625C4.16406 5.58073 4.01823 5.72656 4 6V11.6875C4.01823 11.9609 4.16406 12.1068 4.4375 12.125ZM8.8125 12.125C9.08594 12.1068 9.23177 11.9609 9.25 11.6875V6C9.23177 5.72656 9.08594 5.58073 8.8125 5.5625C8.53906 5.58073 8.39323 5.72656 8.375 6V11.6875C8.39323 11.9609 8.53906 12.1068 8.8125 12.125Z" fill="#293D66"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
            `,
            // 'class' : 'info',
            'item'  : [
                {
                    'title': `
                    <div class="w-96 px-4 pb-6">
                        <div class="bg-white rounded-md shadow-md w-full text-sm py-2.5 px-3.5">
                            <div class="flex items-center justify-between text-brand-text-black pb-5">
                                <p>Company / Job title</p>
                                <p>??<span>9.82</span> / ??<span>13.85</span></p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0C4.29167 0.0416667 2.875 0.625 1.75 1.75C0.625 2.875 0.0416667 4.29167 0 6C0 6.64583 0.0833333 7.22917 0.25 7.75C0.416667 8.29167 0.739583 8.92708 1.21875 9.65625C1.69792 10.4062 2.38542 11.4167 3.28125 12.6875C3.88542 13.5208 4.58333 14.5208 5.375 15.6875C5.54167 15.8958 5.75 16 6 16C6.25 16 6.45833 15.8958 6.625 15.6875C7.4375 14.5 8.13542 13.4896 8.71875 12.6562C9.61458 11.4062 10.3021 10.4062 10.7812 9.65625C11.2604 8.92708 11.5833 8.29167 11.75 7.75C11.9167 7.22917 12 6.64583 12 6C11.9583 4.29167 11.375 2.875 10.25 1.75C9.125 0.625 7.70833 0.0416667 6 0ZM6 13.9375C5.45833 13.1458 4.96875 12.4375 4.53125 11.8125C3.63542 10.5417 2.96875 9.57292 2.53125 8.90625C2.09375 8.23958 1.8125 7.70833 1.6875 7.3125C1.54167 6.89583 1.47917 6.45833 1.5 6C1.54167 4.72917 1.97917 3.66667 2.8125 2.8125C3.66667 1.97917 4.72917 1.54167 6 1.5C7.27083 1.54167 8.33333 1.97917 9.1875 2.8125C10.0208 3.66667 10.4583 4.72917 10.5 6C10.5208 6.45833 10.4583 6.89583 10.3125 7.3125C10.1875 7.70833 9.90625 8.23958 9.46875 8.90625C9.03125 9.57292 8.36458 10.5417 7.46875 11.8125C7.17708 12.2292 6.85417 12.6979 6.5 13.2188C6.33333 13.4479 6.16667 13.6875 6 13.9375ZM6 3.46875C5.29167 3.48958 4.69792 3.73958 4.21875 4.21875C3.76042 4.67708 3.52083 5.26042 3.5 5.96875C3.52083 6.67708 3.76042 7.27083 4.21875 7.75C4.69792 8.20833 5.29167 8.44792 6 8.46875C6.70833 8.44792 7.30208 8.20833 7.78125 7.75C8.23958 7.27083 8.47917 6.67708 8.5 5.96875C8.47917 5.26042 8.23958 4.67708 7.78125 4.21875C7.30208 3.73958 6.70833 3.48958 6 3.46875ZM6 7C5.70833 7 5.46875 6.90625 5.28125 6.71875C5.09375 6.53125 5 6.29167 5 6C5 5.70833 5.09375 5.46875 5.28125 5.28125C5.46875 5.09375 5.70833 5 6 5C6.29167 5 6.53125 5.09375 6.71875 5.28125C6.90625 5.46875 7 5.70833 7 6C7 6.29167 6.90625 6.53125 6.71875 6.71875C6.53125 6.90625 6.29167 7 6 7Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">128, Marlborough Road, Worthing, BN14 7TQ</p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2H10.75V0.75C10.7083 0.291667 10.4688 0.0416667 10.0312 0C9.82292 0 9.64583 0.0729167 9.5 0.21875C9.33333 0.364583 9.25 0.541667 9.25 0.75V2H4.75V0.75C4.70833 0.291667 4.45833 0.0416667 4 0C3.54167 0.0416667 3.29167 0.291667 3.25 0.75V2H2C1.4375 2.02083 0.96875 2.21875 0.59375 2.59375C0.21875 2.96875 0.0208333 3.4375 0 4V14C0.0208333 14.5625 0.21875 15.0312 0.59375 15.4062C0.96875 15.7812 1.4375 15.9792 2 16H12C12.5625 15.9792 13.0312 15.7812 13.4062 15.4062C13.7812 15.0312 13.9792 14.5625 14 14V4C13.9792 3.4375 13.7812 2.96875 13.4062 2.59375C13.0312 2.21875 12.5625 2.02083 12 2ZM12.5 14C12.4792 14.3125 12.3125 14.4792 12 14.5H2C1.6875 14.4792 1.52083 14.3125 1.5 14V6H12.5V14ZM3.5 12H6.5C6.8125 11.9792 6.97917 11.8125 7 11.5V8.5C6.97917 8.1875 6.8125 8.02083 6.5 8H3.5C3.1875 8.02083 3.02083 8.1875 3 8.5V11.5C3.02083 11.8125 3.1875 11.9792 3.5 12Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">Jan 08 2021 - Feb 08 2021</p>
                            </div>

                            <div class="flex items-center justify-between pb-5">
                                <div class="flex items-center space-x-3.5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C6.5 0.0208333 5.15625 0.385417 3.96875 1.09375C2.76042 1.80208 1.80208 2.76042 1.09375 3.96875C0.385417 5.15625 0.0208333 6.5 0 8C0.0208333 9.5 0.385417 10.8438 1.09375 12.0312C1.80208 13.2396 2.76042 14.1979 3.96875 14.9062C5.15625 15.6146 6.5 15.9792 8 16C9.5 15.9792 10.8438 15.6146 12.0312 14.9062C13.2396 14.1979 14.1979 13.2396 14.9062 12.0312C15.6146 10.8438 15.9792 9.5 16 8C15.9792 6.5 15.6146 5.15625 14.9062 3.96875C14.1979 2.76042 13.2396 1.80208 12.0312 1.09375C10.8438 0.385417 9.5 0.0208333 8 0ZM8 14.5C6.16667 14.4583 4.63542 13.8229 3.40625 12.5938C2.17708 11.3646 1.54167 9.83333 1.5 8C1.54167 6.16667 2.17708 4.63542 3.40625 3.40625C4.63542 2.17708 6.16667 1.54167 8 1.5C9.83333 1.54167 11.3646 2.17708 12.5938 3.40625C13.8229 4.63542 14.4583 6.16667 14.5 8C14.4583 9.83333 13.8229 11.3646 12.5938 12.5938C11.3646 13.8229 9.83333 14.4583 8 14.5ZM11.1875 8.96875L8.75 7.5625V3.75C8.70833 3.29167 8.45833 3.04167 8 3C7.54167 3.04167 7.29167 3.29167 7.25 3.75V8C7.25 8.29167 7.375 8.51042 7.625 8.65625L10.4375 10.2812C10.4583 10.2812 10.4896 10.2917 10.5312 10.3125C10.6146 10.3542 10.7083 10.375 10.8125 10.375C11.0833 10.375 11.3021 10.25 11.4688 10C11.6562 9.58333 11.5625 9.23958 11.1875 8.96875Z" fill="#9CA3AF"/>
                                    </svg>
                                    <p class="text-brand-text-gray">08:00 - 17:00</p>
                                </div>

                                <p class="text-brand-blue">Varied Schedule</p>
                            </div>

                            <div class="flex items-start space-x-3.5 pb-5">
                                <svg class="flex-shrink-0" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 9.5H5.5C3.9375 9.54167 2.64583 10.0833 1.625 11.125C0.583333 12.1458 0.0416667 13.4375 0 15C0 15.2917 0.09375 15.5312 0.28125 15.7188C0.46875 15.9062 0.708333 16 1 16H13C13.2917 16 13.5312 15.9062 13.7188 15.7188C13.9062 15.5312 14 15.2917 14 15C13.9583 13.4375 13.4167 12.1458 12.375 11.125C11.3542 10.0833 10.0625 9.54167 8.5 9.5ZM1.53125 14.5C1.67708 13.5 2.11458 12.6667 2.84375 12C3.57292 11.3542 4.45833 11.0208 5.5 11H8.5C9.54167 11.0208 10.4271 11.3542 11.1562 12C11.8854 12.6667 12.3229 13.5 12.4688 14.5H1.53125ZM7 8C8.125 7.97917 9.07292 7.59375 9.84375 6.84375C10.5938 6.07292 10.9792 5.125 11 4C10.9792 2.875 10.5938 1.92708 9.84375 1.15625C9.07292 0.40625 8.125 0.0208333 7 0C5.875 0.0208333 4.92708 0.40625 4.15625 1.15625C3.40625 1.92708 3.02083 2.875 3 4C3.02083 5.125 3.40625 6.07292 4.15625 6.84375C4.92708 7.59375 5.875 7.97917 7 8ZM7 1.5C7.70833 1.52083 8.30208 1.76042 8.78125 2.21875C9.23958 2.69792 9.47917 3.29167 9.5 4C9.47917 4.70833 9.23958 5.30208 8.78125 5.78125C8.30208 6.23958 7.70833 6.47917 7 6.5C6.29167 6.47917 5.69792 6.23958 5.21875 5.78125C4.76042 5.30208 4.52083 4.70833 4.5 4C4.52083 3.29167 4.76042 2.69792 5.21875 2.21875C5.69792 1.76042 6.29167 1.52083 7 1.5Z" fill="#9CA3AF"/>
                                </svg>
                                <div class="w-full">
                                    <div class="border-b border-gray-300">
                                        <input class="border-none w-full focus:outline-none text-sm pb-1 px-2" type="text" name="" id="" placeholder="Type to assign">
                                    </div>
                                    <p class="text-brand-text-gray pt-1"><span>0/3</span> Positions</p>
                                </div>
                            </div>

                            <p class="text-gray-500 line-clamp-2 mb-5">Job description gets typed here for example, picking and packing boxes in a warehouse only this time the description is much longer and is taking up more space, which is fine. I promise this is absolutely fine and normal, you can keep writing to show how it looks with a longer description. So here it is, well done for reading</p>

                            <!-- edit btn -->
                            <div class="flex justify-end">
                                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                                    Edit
                                  </button>
                            </div>
                        </div>
                    </div>
                    `,
                }
            ]
        },
        {
            'id' : '_working',
            'title'  : `
                    <div class="w-96 text-center">
                        <div class="inline-block">
                            <div class="flex items-center justify-center bg-brand-blue/10 text-brand-blue mx-auto px-2 py-1 rounded-md space-x-2.5">
                                <p class="font-medium text-sm">Assigned Bookings</p>
                                <a href="#">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9688 1.26953C12.6042 0.923177 12.194 0.75 11.7383 0.75C11.2643 0.75 10.8451 0.923177 10.4805 1.26953L1.73047 10.0195C1.49349 10.2565 1.33854 10.5391 1.26562 10.8672L0.5 14.2305C0.481771 14.3581 0.518229 14.4766 0.609375 14.5859C0.682292 14.6953 0.791667 14.75 0.9375 14.75C0.973958 14.75 1.0013 14.75 1.01953 14.75C1.03776 14.7318 1.2474 14.6862 1.64844 14.6133C2.06771 14.5221 2.53255 14.4219 3.04297 14.3125C3.57161 14.1849 4.01823 14.0846 4.38281 14.0117C4.69271 13.9388 4.96615 13.7839 5.20312 13.5469L13.9805 4.76953C14.3268 4.40495 14.5 3.98568 14.5 3.51172C14.5 3.05599 14.3268 2.64583 13.9805 2.28125L12.9688 1.26953ZM4.27344 12.6172C4.21875 12.6719 4.15495 12.7083 4.08203 12.7266C3.82682 12.7812 3.51693 12.8542 3.15234 12.9453C2.80599 13.0182 2.45052 13.0911 2.08594 13.1641L2.55078 11.168C2.56901 11.0768 2.60547 11.0039 2.66016 10.9492L9.27734 4.33203L10.918 5.97266L4.27344 12.6172Z" fill="#293D66"/>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3125 2.9375H10.0703L9.14062 1.37891C8.86719 0.977865 8.49349 0.768229 8.01953 0.75H5.23047C4.75651 0.768229 4.38281 0.977865 4.10938 1.37891L3.17969 2.9375H0.9375C0.664062 2.95573 0.518229 3.10156 0.5 3.375V3.8125C0.518229 4.08594 0.664062 4.23177 0.9375 4.25H1.375V13C1.39323 13.4922 1.56641 13.9023 1.89453 14.2305C2.22266 14.5586 2.63281 14.7318 3.125 14.75H10.125C10.6172 14.7318 11.0273 14.5586 11.3555 14.2305C11.6836 13.9023 11.8568 13.4922 11.875 13V4.25H12.3125C12.5859 4.23177 12.7318 4.08594 12.75 3.8125V3.375C12.7318 3.10156 12.5859 2.95573 12.3125 2.9375ZM5.20312 2.14453C5.23958 2.08984 5.28516 2.0625 5.33984 2.0625H7.91016C7.96484 2.0625 8.01042 2.08984 8.04688 2.14453L8.53906 2.9375H4.71094L5.20312 2.14453ZM10.125 13.4375H3.125C2.85156 13.4193 2.70573 13.2734 2.6875 13V4.25H10.5625V13C10.5443 13.2734 10.3984 13.4193 10.125 13.4375ZM6.625 12.125C6.89844 12.1068 7.04427 11.9609 7.0625 11.6875V6C7.04427 5.72656 6.89844 5.58073 6.625 5.5625C6.35156 5.58073 6.20573 5.72656 6.1875 6V11.6875C6.20573 11.9609 6.35156 12.1068 6.625 12.125ZM4.4375 12.125C4.71094 12.1068 4.85677 11.9609 4.875 11.6875V6C4.85677 5.72656 4.71094 5.58073 4.4375 5.5625C4.16406 5.58073 4.01823 5.72656 4 6V11.6875C4.01823 11.9609 4.16406 12.1068 4.4375 12.125ZM8.8125 12.125C9.08594 12.1068 9.23177 11.9609 9.25 11.6875V6C9.23177 5.72656 9.08594 5.58073 8.8125 5.5625C8.53906 5.58073 8.39323 5.72656 8.375 6V11.6875C8.39323 11.9609 8.53906 12.1068 8.8125 12.125Z" fill="#293D66"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
            `,
            // 'class' : 'warning',
            'item'  : [
                {
                    'title': `
                    <div class="w-96 px-4 pb-6">
                        <div class="bg-white rounded-md shadow-md w-full text-sm py-2.5 px-3.5">
                            <div class="flex items-center justify-between text-brand-text-black pb-5">
                                <p>Company / Job title</p>
                                <p>??<span>9.82</span> / ??<span>13.85</span></p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0C4.29167 0.0416667 2.875 0.625 1.75 1.75C0.625 2.875 0.0416667 4.29167 0 6C0 6.64583 0.0833333 7.22917 0.25 7.75C0.416667 8.29167 0.739583 8.92708 1.21875 9.65625C1.69792 10.4062 2.38542 11.4167 3.28125 12.6875C3.88542 13.5208 4.58333 14.5208 5.375 15.6875C5.54167 15.8958 5.75 16 6 16C6.25 16 6.45833 15.8958 6.625 15.6875C7.4375 14.5 8.13542 13.4896 8.71875 12.6562C9.61458 11.4062 10.3021 10.4062 10.7812 9.65625C11.2604 8.92708 11.5833 8.29167 11.75 7.75C11.9167 7.22917 12 6.64583 12 6C11.9583 4.29167 11.375 2.875 10.25 1.75C9.125 0.625 7.70833 0.0416667 6 0ZM6 13.9375C5.45833 13.1458 4.96875 12.4375 4.53125 11.8125C3.63542 10.5417 2.96875 9.57292 2.53125 8.90625C2.09375 8.23958 1.8125 7.70833 1.6875 7.3125C1.54167 6.89583 1.47917 6.45833 1.5 6C1.54167 4.72917 1.97917 3.66667 2.8125 2.8125C3.66667 1.97917 4.72917 1.54167 6 1.5C7.27083 1.54167 8.33333 1.97917 9.1875 2.8125C10.0208 3.66667 10.4583 4.72917 10.5 6C10.5208 6.45833 10.4583 6.89583 10.3125 7.3125C10.1875 7.70833 9.90625 8.23958 9.46875 8.90625C9.03125 9.57292 8.36458 10.5417 7.46875 11.8125C7.17708 12.2292 6.85417 12.6979 6.5 13.2188C6.33333 13.4479 6.16667 13.6875 6 13.9375ZM6 3.46875C5.29167 3.48958 4.69792 3.73958 4.21875 4.21875C3.76042 4.67708 3.52083 5.26042 3.5 5.96875C3.52083 6.67708 3.76042 7.27083 4.21875 7.75C4.69792 8.20833 5.29167 8.44792 6 8.46875C6.70833 8.44792 7.30208 8.20833 7.78125 7.75C8.23958 7.27083 8.47917 6.67708 8.5 5.96875C8.47917 5.26042 8.23958 4.67708 7.78125 4.21875C7.30208 3.73958 6.70833 3.48958 6 3.46875ZM6 7C5.70833 7 5.46875 6.90625 5.28125 6.71875C5.09375 6.53125 5 6.29167 5 6C5 5.70833 5.09375 5.46875 5.28125 5.28125C5.46875 5.09375 5.70833 5 6 5C6.29167 5 6.53125 5.09375 6.71875 5.28125C6.90625 5.46875 7 5.70833 7 6C7 6.29167 6.90625 6.53125 6.71875 6.71875C6.53125 6.90625 6.29167 7 6 7Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">128, Marlborough Road, Worthing, BN14 7TQ</p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2H10.75V0.75C10.7083 0.291667 10.4688 0.0416667 10.0312 0C9.82292 0 9.64583 0.0729167 9.5 0.21875C9.33333 0.364583 9.25 0.541667 9.25 0.75V2H4.75V0.75C4.70833 0.291667 4.45833 0.0416667 4 0C3.54167 0.0416667 3.29167 0.291667 3.25 0.75V2H2C1.4375 2.02083 0.96875 2.21875 0.59375 2.59375C0.21875 2.96875 0.0208333 3.4375 0 4V14C0.0208333 14.5625 0.21875 15.0312 0.59375 15.4062C0.96875 15.7812 1.4375 15.9792 2 16H12C12.5625 15.9792 13.0312 15.7812 13.4062 15.4062C13.7812 15.0312 13.9792 14.5625 14 14V4C13.9792 3.4375 13.7812 2.96875 13.4062 2.59375C13.0312 2.21875 12.5625 2.02083 12 2ZM12.5 14C12.4792 14.3125 12.3125 14.4792 12 14.5H2C1.6875 14.4792 1.52083 14.3125 1.5 14V6H12.5V14ZM3.5 12H6.5C6.8125 11.9792 6.97917 11.8125 7 11.5V8.5C6.97917 8.1875 6.8125 8.02083 6.5 8H3.5C3.1875 8.02083 3.02083 8.1875 3 8.5V11.5C3.02083 11.8125 3.1875 11.9792 3.5 12Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">Jan 08 2021 - Feb 08 2021</p>
                            </div>

                            <div class="flex items-center justify-between pb-5">
                                <div class="flex items-center space-x-3.5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C6.5 0.0208333 5.15625 0.385417 3.96875 1.09375C2.76042 1.80208 1.80208 2.76042 1.09375 3.96875C0.385417 5.15625 0.0208333 6.5 0 8C0.0208333 9.5 0.385417 10.8438 1.09375 12.0312C1.80208 13.2396 2.76042 14.1979 3.96875 14.9062C5.15625 15.6146 6.5 15.9792 8 16C9.5 15.9792 10.8438 15.6146 12.0312 14.9062C13.2396 14.1979 14.1979 13.2396 14.9062 12.0312C15.6146 10.8438 15.9792 9.5 16 8C15.9792 6.5 15.6146 5.15625 14.9062 3.96875C14.1979 2.76042 13.2396 1.80208 12.0312 1.09375C10.8438 0.385417 9.5 0.0208333 8 0ZM8 14.5C6.16667 14.4583 4.63542 13.8229 3.40625 12.5938C2.17708 11.3646 1.54167 9.83333 1.5 8C1.54167 6.16667 2.17708 4.63542 3.40625 3.40625C4.63542 2.17708 6.16667 1.54167 8 1.5C9.83333 1.54167 11.3646 2.17708 12.5938 3.40625C13.8229 4.63542 14.4583 6.16667 14.5 8C14.4583 9.83333 13.8229 11.3646 12.5938 12.5938C11.3646 13.8229 9.83333 14.4583 8 14.5ZM11.1875 8.96875L8.75 7.5625V3.75C8.70833 3.29167 8.45833 3.04167 8 3C7.54167 3.04167 7.29167 3.29167 7.25 3.75V8C7.25 8.29167 7.375 8.51042 7.625 8.65625L10.4375 10.2812C10.4583 10.2812 10.4896 10.2917 10.5312 10.3125C10.6146 10.3542 10.7083 10.375 10.8125 10.375C11.0833 10.375 11.3021 10.25 11.4688 10C11.6562 9.58333 11.5625 9.23958 11.1875 8.96875Z" fill="#9CA3AF"/>
                                    </svg>
                                    <p class="text-brand-text-gray">08:00 - 17:00</p>
                                </div>

                                <p class="text-brand-blue">Varied Schedule</p>
                            </div>

                            <div class="flex items-start space-x-3.5 pb-5">
                                <svg class="flex-shrink-0" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 9.5H5.5C3.9375 9.54167 2.64583 10.0833 1.625 11.125C0.583333 12.1458 0.0416667 13.4375 0 15C0 15.2917 0.09375 15.5312 0.28125 15.7188C0.46875 15.9062 0.708333 16 1 16H13C13.2917 16 13.5312 15.9062 13.7188 15.7188C13.9062 15.5312 14 15.2917 14 15C13.9583 13.4375 13.4167 12.1458 12.375 11.125C11.3542 10.0833 10.0625 9.54167 8.5 9.5ZM1.53125 14.5C1.67708 13.5 2.11458 12.6667 2.84375 12C3.57292 11.3542 4.45833 11.0208 5.5 11H8.5C9.54167 11.0208 10.4271 11.3542 11.1562 12C11.8854 12.6667 12.3229 13.5 12.4688 14.5H1.53125ZM7 8C8.125 7.97917 9.07292 7.59375 9.84375 6.84375C10.5938 6.07292 10.9792 5.125 11 4C10.9792 2.875 10.5938 1.92708 9.84375 1.15625C9.07292 0.40625 8.125 0.0208333 7 0C5.875 0.0208333 4.92708 0.40625 4.15625 1.15625C3.40625 1.92708 3.02083 2.875 3 4C3.02083 5.125 3.40625 6.07292 4.15625 6.84375C4.92708 7.59375 5.875 7.97917 7 8ZM7 1.5C7.70833 1.52083 8.30208 1.76042 8.78125 2.21875C9.23958 2.69792 9.47917 3.29167 9.5 4C9.47917 4.70833 9.23958 5.30208 8.78125 5.78125C8.30208 6.23958 7.70833 6.47917 7 6.5C6.29167 6.47917 5.69792 6.23958 5.21875 5.78125C4.76042 5.30208 4.52083 4.70833 4.5 4C4.52083 3.29167 4.76042 2.69792 5.21875 2.21875C5.69792 1.76042 6.29167 1.52083 7 1.5Z" fill="#9CA3AF"/>
                                </svg>
                                <div class="w-full">
                                    <div class="flex items-center border-b border-gray-300">
                                        <span class="tooltip relative group inline-flex items-center flex-shrink-0 py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            Elly holmes
                                            <button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-500 focus:outline-none">
                                              <span class="sr-only">Remove small option</span>
                                              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                                              </svg>
                                            </button>
                                            <span class="tooltiptext absolute z-10 -top-10 -left-1/2 whitespace-nowrap hidden bg-black text-white rounded-md group-hover:block py-1 px-2">11email@email.com / 07726374819</span>
                                        </span>

                                        <span class="tooltip relative group inline-flex items-center flex-shrink-0 py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            Elly holmes
                                            <button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-500 focus:outline-none">
                                              <span class="sr-only">Remove small option</span>
                                              <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                                              </svg>
                                            </button>
                                            <span class="tooltiptext absolute z-10 -top-10 -left-1/2 whitespace-nowrap hidden bg-black text-white rounded-md group-hover:block py-1 px-2">22email@email.com / 07726374819</span>
                                        </span>

                                        <input class="border-none w-full focus:outline-none text-sm pb-1 px-2" type="text" name="" id="" placeholder="Type to assign">
                                    </div>
                                    <p class="text-brand-text-gray pt-1"><span>0/3</span> Positions</p>
                                </div>
                            </div>

                            <p class="text-gray-500 line-clamp-2 mb-5">Job description gets typed here for example, picking and packing boxes in a warehouse only this time the description is much longer and is taking up more space, which is fine. I promise this is absolutely fine and normal, you can keep writing to show how it looks with a longer description. So here it is, well done for reading</p>

                            <!-- edit btn -->
                            <div class="flex justify-end">
                                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                                    Edit
                                  </button>
                            </div>
                        </div>
                    </div>
                    `,
                }
            ]
        },
        {
            'id' : '_done',
            'title'  : `
                <div class="w-96 text-center">
                    <p class="inline-block font-medium text-sm rounded-md text-brand-blue bg-brand-blue/10 py-1 px-6">Check-In</p>
                </div>
            `,
            // 'class' : 'success',
            'item'  : [
                {
                    'title': `
                    <div class="w-96 px-4 pb-6">
                        <div class="bg-white rounded-md shadow-md w-full text-sm py-2.5 px-3.5">
                            <div class="flex items-center justify-between text-brand-text-black pb-5">
                                <p>Company / Job title</p>
                                <p>??<span>9.82</span> / ??<span>13.85</span></p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0C4.29167 0.0416667 2.875 0.625 1.75 1.75C0.625 2.875 0.0416667 4.29167 0 6C0 6.64583 0.0833333 7.22917 0.25 7.75C0.416667 8.29167 0.739583 8.92708 1.21875 9.65625C1.69792 10.4062 2.38542 11.4167 3.28125 12.6875C3.88542 13.5208 4.58333 14.5208 5.375 15.6875C5.54167 15.8958 5.75 16 6 16C6.25 16 6.45833 15.8958 6.625 15.6875C7.4375 14.5 8.13542 13.4896 8.71875 12.6562C9.61458 11.4062 10.3021 10.4062 10.7812 9.65625C11.2604 8.92708 11.5833 8.29167 11.75 7.75C11.9167 7.22917 12 6.64583 12 6C11.9583 4.29167 11.375 2.875 10.25 1.75C9.125 0.625 7.70833 0.0416667 6 0ZM6 13.9375C5.45833 13.1458 4.96875 12.4375 4.53125 11.8125C3.63542 10.5417 2.96875 9.57292 2.53125 8.90625C2.09375 8.23958 1.8125 7.70833 1.6875 7.3125C1.54167 6.89583 1.47917 6.45833 1.5 6C1.54167 4.72917 1.97917 3.66667 2.8125 2.8125C3.66667 1.97917 4.72917 1.54167 6 1.5C7.27083 1.54167 8.33333 1.97917 9.1875 2.8125C10.0208 3.66667 10.4583 4.72917 10.5 6C10.5208 6.45833 10.4583 6.89583 10.3125 7.3125C10.1875 7.70833 9.90625 8.23958 9.46875 8.90625C9.03125 9.57292 8.36458 10.5417 7.46875 11.8125C7.17708 12.2292 6.85417 12.6979 6.5 13.2188C6.33333 13.4479 6.16667 13.6875 6 13.9375ZM6 3.46875C5.29167 3.48958 4.69792 3.73958 4.21875 4.21875C3.76042 4.67708 3.52083 5.26042 3.5 5.96875C3.52083 6.67708 3.76042 7.27083 4.21875 7.75C4.69792 8.20833 5.29167 8.44792 6 8.46875C6.70833 8.44792 7.30208 8.20833 7.78125 7.75C8.23958 7.27083 8.47917 6.67708 8.5 5.96875C8.47917 5.26042 8.23958 4.67708 7.78125 4.21875C7.30208 3.73958 6.70833 3.48958 6 3.46875ZM6 7C5.70833 7 5.46875 6.90625 5.28125 6.71875C5.09375 6.53125 5 6.29167 5 6C5 5.70833 5.09375 5.46875 5.28125 5.28125C5.46875 5.09375 5.70833 5 6 5C6.29167 5 6.53125 5.09375 6.71875 5.28125C6.90625 5.46875 7 5.70833 7 6C7 6.29167 6.90625 6.53125 6.71875 6.71875C6.53125 6.90625 6.29167 7 6 7Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">128, Marlborough Road, Worthing, BN14 7TQ</p>
                            </div>

                            <div class="flex items-center space-x-3.5 pb-5">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2H10.75V0.75C10.7083 0.291667 10.4688 0.0416667 10.0312 0C9.82292 0 9.64583 0.0729167 9.5 0.21875C9.33333 0.364583 9.25 0.541667 9.25 0.75V2H4.75V0.75C4.70833 0.291667 4.45833 0.0416667 4 0C3.54167 0.0416667 3.29167 0.291667 3.25 0.75V2H2C1.4375 2.02083 0.96875 2.21875 0.59375 2.59375C0.21875 2.96875 0.0208333 3.4375 0 4V14C0.0208333 14.5625 0.21875 15.0312 0.59375 15.4062C0.96875 15.7812 1.4375 15.9792 2 16H12C12.5625 15.9792 13.0312 15.7812 13.4062 15.4062C13.7812 15.0312 13.9792 14.5625 14 14V4C13.9792 3.4375 13.7812 2.96875 13.4062 2.59375C13.0312 2.21875 12.5625 2.02083 12 2ZM12.5 14C12.4792 14.3125 12.3125 14.4792 12 14.5H2C1.6875 14.4792 1.52083 14.3125 1.5 14V6H12.5V14ZM3.5 12H6.5C6.8125 11.9792 6.97917 11.8125 7 11.5V8.5C6.97917 8.1875 6.8125 8.02083 6.5 8H3.5C3.1875 8.02083 3.02083 8.1875 3 8.5V11.5C3.02083 11.8125 3.1875 11.9792 3.5 12Z" fill="#9CA3AF"/>
                                </svg>
                                <p class="text-brand-text-gray">Jan 08 2021 - Feb 08 2021</p>
                            </div>

                            <div class="flex items-center justify-between pb-5">
                                <div class="flex items-center space-x-3.5">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C6.5 0.0208333 5.15625 0.385417 3.96875 1.09375C2.76042 1.80208 1.80208 2.76042 1.09375 3.96875C0.385417 5.15625 0.0208333 6.5 0 8C0.0208333 9.5 0.385417 10.8438 1.09375 12.0312C1.80208 13.2396 2.76042 14.1979 3.96875 14.9062C5.15625 15.6146 6.5 15.9792 8 16C9.5 15.9792 10.8438 15.6146 12.0312 14.9062C13.2396 14.1979 14.1979 13.2396 14.9062 12.0312C15.6146 10.8438 15.9792 9.5 16 8C15.9792 6.5 15.6146 5.15625 14.9062 3.96875C14.1979 2.76042 13.2396 1.80208 12.0312 1.09375C10.8438 0.385417 9.5 0.0208333 8 0ZM8 14.5C6.16667 14.4583 4.63542 13.8229 3.40625 12.5938C2.17708 11.3646 1.54167 9.83333 1.5 8C1.54167 6.16667 2.17708 4.63542 3.40625 3.40625C4.63542 2.17708 6.16667 1.54167 8 1.5C9.83333 1.54167 11.3646 2.17708 12.5938 3.40625C13.8229 4.63542 14.4583 6.16667 14.5 8C14.4583 9.83333 13.8229 11.3646 12.5938 12.5938C11.3646 13.8229 9.83333 14.4583 8 14.5ZM11.1875 8.96875L8.75 7.5625V3.75C8.70833 3.29167 8.45833 3.04167 8 3C7.54167 3.04167 7.29167 3.29167 7.25 3.75V8C7.25 8.29167 7.375 8.51042 7.625 8.65625L10.4375 10.2812C10.4583 10.2812 10.4896 10.2917 10.5312 10.3125C10.6146 10.3542 10.7083 10.375 10.8125 10.375C11.0833 10.375 11.3021 10.25 11.4688 10C11.6562 9.58333 11.5625 9.23958 11.1875 8.96875Z" fill="#9CA3AF"/>
                                    </svg>
                                    <p class="text-brand-text-gray">08:00 - 17:00</p>
                                </div>

                                <p class="text-brand-blue">Varied Schedule</p>
                            </div>

                            <div class="flex items-start space-x-3.5 pb-5">
                                <svg class="flex-shrink-0" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 9.5H5.5C3.9375 9.54167 2.64583 10.0833 1.625 11.125C0.583333 12.1458 0.0416667 13.4375 0 15C0 15.2917 0.09375 15.5312 0.28125 15.7188C0.46875 15.9062 0.708333 16 1 16H13C13.2917 16 13.5312 15.9062 13.7188 15.7188C13.9062 15.5312 14 15.2917 14 15C13.9583 13.4375 13.4167 12.1458 12.375 11.125C11.3542 10.0833 10.0625 9.54167 8.5 9.5ZM1.53125 14.5C1.67708 13.5 2.11458 12.6667 2.84375 12C3.57292 11.3542 4.45833 11.0208 5.5 11H8.5C9.54167 11.0208 10.4271 11.3542 11.1562 12C11.8854 12.6667 12.3229 13.5 12.4688 14.5H1.53125ZM7 8C8.125 7.97917 9.07292 7.59375 9.84375 6.84375C10.5938 6.07292 10.9792 5.125 11 4C10.9792 2.875 10.5938 1.92708 9.84375 1.15625C9.07292 0.40625 8.125 0.0208333 7 0C5.875 0.0208333 4.92708 0.40625 4.15625 1.15625C3.40625 1.92708 3.02083 2.875 3 4C3.02083 5.125 3.40625 6.07292 4.15625 6.84375C4.92708 7.59375 5.875 7.97917 7 8ZM7 1.5C7.70833 1.52083 8.30208 1.76042 8.78125 2.21875C9.23958 2.69792 9.47917 3.29167 9.5 4C9.47917 4.70833 9.23958 5.30208 8.78125 5.78125C8.30208 6.23958 7.70833 6.47917 7 6.5C6.29167 6.47917 5.69792 6.23958 5.21875 5.78125C4.76042 5.30208 4.52083 4.70833 4.5 4C4.52083 3.29167 4.76042 2.69792 5.21875 2.21875C5.69792 1.76042 6.29167 1.52083 7 1.5Z" fill="#9CA3AF"/>
                                </svg>
                                <div class="w-full">
                                    <div class="border-b border-gray-300">
                                        <input class="border-none w-full focus:outline-none text-sm pb-1 px-2" type="text" name="" id="" placeholder="Type to assign">
                                    </div>
                                    <p class="text-brand-text-gray pt-1"><span>0/3</span> Positions</p>
                                </div>
                            </div>

                            <p class="text-gray-500 line-clamp-2 mb-5">Job description gets typed here for example, picking and packing boxes in a warehouse only this time the description is much longer and is taking up more space, which is fine. I promise this is absolutely fine and normal, you can keep writing to show how it looks with a longer description. So here it is, well done for reading</p>

                            <!-- edit btn -->
                            <div class="flex justify-end space-x-1.5">
                                <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                                    Edit
                                  </button>
                            </div>
                        </div>
                    </div>
                    `,
                }
            ]
        }
    ]
});

let addBoardDefault = document.getElementById('addDefault');
addBoardDefault.addEventListener('click', function () {
    kanban3.addBoards(
        [{
            'id' : '_default',
            'title'  : `
                <div class="w-96 text-center">
                    <p class="inline-block font-medium text-sm rounded-md text-brand-blue bg-brand-blue/10 py-1 px-6">Title</p>
                </div>
            `,
            'item'  : [ ]
        }]
    )
});