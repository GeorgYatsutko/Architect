const burgerBtn = document.querySelector('.burger-menu'),
    navList = document.querySelector('.nav-list'),
    section4Btn = document.querySelectorAll('.section4__btn'),
    section4Text = document.querySelectorAll('.section4__text'),
    section2Btn = document.querySelector('.section2__btn'),
    moreSection = document.querySelector('.more-container');
let index = 0;

    //burger menu
burgerBtn.addEventListener('click',function(){
    navList.classList.toggle('nav-list_active');
})

//more-section
section2Btn.addEventListener('click',function(){
    console.log('click');
    moreSection.classList.toggle('more-container_active');
})

    //section 4 
    const activeText = n =>{
        for(text of section4Text){
            text.classList.remove('section4__text_active');
        }
        section4Text[n].classList.add('section4__text_active');
    }

    const activeBtn = i =>{
        for(btn of section4Btn){
            btn.classList.remove('section4__btn_active');
        }
        section4Btn[i].classList.add('section4__btn_active')
    }
   section4Btn.forEach((item, indexBtn)=>{
       item.addEventListener('click',()=>{
           index = indexBtn;
           activeBtn(index);
           activeText(index);
       })
   })

    