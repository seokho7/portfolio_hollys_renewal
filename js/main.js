//메인베너 슬라이드
var mainSlideWrapper = document.querySelector('.main_slide_wrapper'),
    mainSlideContainer = mainSlideWrapper.querySelector('.main_slides'),
    mainSlides = mainSlideWrapper.querySelectorAll('li'),
    mainSlideCount = mainSlides.length,
    mainCurrentIndex = 0, //슬라이드 이동 및 선택
    mainPagerContainer = mainSlideWrapper.querySelector('.pager'),
    mainPagerHTML = ' ', // 페이저
    mainPrevBtn = document.querySelector('.controls .prev'),
    mainNextBtn = document.querySelector('.controls .next'), // 슬라이드 조작
    msTimer = undefined; // 오토 슬라이드
for (i = 0; i < mainSlideCount; i++){
    mainSlides[i].style.left = i * 100 + '%';
}

function goToSlide(idx) {
    mainSlideContainer.style.left = -idx * 100 + '%';
    mainCurrentIndex = idx

    for(var i = 0; i < mainSlideCount; i++ ){
        pagerBtn[i].classList.remove('active')
    }
    pagerBtn[idx].classList.add('active')
}

mainNextBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(mainCurrentIndex != mainSlideCount - 1){
        goToSlide(mainCurrentIndex +1);
    }else{
        goToSlide(0);
    }
});
mainPrevBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(mainCurrentIndex != 0){
        goToSlide(mainCurrentIndex -1);
    }else{
        goToSlide(mainSlideCount - 1);
        
    }
});

for (var j = 0; j < mainSlideCount; j++){
    mainPagerHTML += '<a href="">' + j + '</a>';
}

mainPagerContainer.innerHTML = mainPagerHTML;

var pagerBtn = mainPagerContainer.querySelectorAll('a');
    for(k=0; k<mainSlideCount; k++){
        pagerBtn[k].addEventListener('click',function(e){
            e.preventDefault();
            var targetIdx = parseInt(this.innerHTML);
            goToSlide(targetIdx);
        });       
    }
goToSlide(0);
    
function autoSlide() {
    if(msTimer == undefined){ 
        msTimer = setInterval(function(){
            if(mainCurrentIndex != mainSlideCount - 1){
                goToSlide(mainCurrentIndex + 1)
            }else{
                goToSlide(0)
            }
        },3000);
    }
}
mainSlideWrapper.addEventListener('mouseover',function(){
    clearInterval(msTimer);
    msTimer = undefined;
});
mainSlideWrapper.addEventListener('mouseout',function(){
    autoSlide();    
});

autoSlide();

// 서브 슬라이드 멀티플
var mdSlide = document.querySelector('.md_slides'),
    mdSlideItem = mdSlide.querySelectorAll('li'),
    mdSlideCount = mdSlideItem.length,
    mdControlPrev = document.querySelector('.md_slide_wrapper .controls .prev'),
    mdControlNext = document.querySelector('.md_slide_wrapper .controls .next'),
    mdCurrentIndex = 0,
    mdSlideTarget =  document.querySelector('.picks_list .pager'),
    mdSlidePagerHtml = '';

    for(var i=0; i< mdSlideCount; i++){
        mdSlideItem[i].style.left = i * 100 + '%'   
    }
    mdControlPrev.addEventListener('click',function(e){ 
        e.preventDefault();
        if(mdCurrentIndex > 0){
            goToSlide2(mdCurrentIndex -1)
        }
    });
    mdControlNext.addEventListener('click',function(e){ 
        e.preventDefault();
        if(mdCurrentIndex < mdSlideCount -1){
            goToSlide2(mdCurrentIndex +1)
        }
    });

    for(var i = 0; i < mdSlideCount; i ++){
        mdSlidePagerHtml += '<a href="">' + i + '</a>'
    }
        mdSlideTarget.innerHTML = mdSlidePagerHtml
    var mdPagerBtn = mdSlideTarget.querySelectorAll('a')
    

    for(j=0; j<mdSlideCount; j++){
        mdPagerBtn[j].addEventListener('click',function(e){
            e.preventDefault();
            var pagerNum = parseInt(this.innerText);
            goToSlide2(pagerNum)
        });
    }
    mdPagerBtn[0].click();
    function goToSlide2(idx) {
        mdSlide.style.left = idx * -100 + '%';
        mdCurrentIndex = idx

        for(var i = 0; i < mdSlideCount; i++ ){
            mdPagerBtn[i].classList.remove('active')
        }
        mdPagerBtn[idx].classList.add('active')

        if(mdCurrentIndex == 0){
            mdControlPrev.classList.add('none')
        }else{
            mdControlPrev.classList.remove('none')
        }
        if(mdCurrentIndex == mdSlideCount -1){
            mdControlNext.classList.add('none')
        }else{
            mdControlNext.classList.remove('none')
        }
    }

    //------------------- popup 쿠키 생성 ------------------//

var myPopup = document.querySelector('.modal.first'),
    checkbox = myPopup.querySelector('#modal_close'),
    popupClose = myPopup.querySelector('.modal_close');

var myPopupSecond = document.querySelector('.modal.second'),
    checkboxSecond = myPopupSecond.querySelector('#modal_close_second'),
    popupCloseSecond = myPopupSecond.querySelector('.modal_close_second');
        
var introPopup = document.querySelector('.modal_box'),
    introCheckbox = introPopup.querySelector('#intro_modal_close'),
    introPopupClose = introPopup.querySelector('.intro_modal_close');


//쿠키 생성
function setCookie(name, value, day){
    var date = new Date(); 
    date.setDate(date.getDate() + day);

    var mycookie = '';
    mycookie += name + '=' + value+';';
    mycookie +='Expires=' + date.toUTCString();

    document.cookie = mycookie;
}

//쿠키 삭제
function delCookie(name){
    var date = new Date();

    date.setDate(date.getDate() - 1);

    var setCookie = '';

    setCookie += name+'= ;';
    setCookie +='Expires=' + date.toUTCString();

    document.cookie = setCookie;          
}

//쿠키 확인
function checkCookie(name, item){
    var cookies = document.cookie.split(';');
    var visited = false;

    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            visited = true;
            console.log(visited);
        }                
    }

    if(visited){
        //재방문
        item.style.display = 'none';
    }else{
        //신규방문
        item.style.display = 'block';
    }
   
 }
 
// modal_1 off
checkCookie('modal1_off', myPopup);

popupClose.addEventListener('click', function(e){
    e.preventDefault();
    if(checkbox.checked){
        setCookie('modal1_off','visit',1);
        myPopup.style.display = 'none';
    } else{
        myPopup.style.display = 'none';
        delCookie('modal1_off');
    }
});

// modal_2 off

checkCookie('modal2_off', myPopupSecond);

popupCloseSecond.addEventListener('click', function(e){
    e.preventDefault();
    if(checkboxSecond.checked){
        setCookie('modal2_off','visit',1);
        myPopupSecond.style.display = 'none';
    } else{
        myPopupSecond.style.display = 'none';
        delCookie('modal2_off');
    }
});

// intro_modal off

checkCookie('intro_modal_off', introPopup);

introPopupClose.addEventListener('click', function(){
    if(introCheckbox.checked){
        setCookie('intro_modal_off','visit',1);
        introPopup.style.display = 'none';
    } else{
        introPopup.style.display = 'none';
        delCookie('intro_modal_off');
    }
});

