// nav 이벤트

var menu = document.querySelectorAll('nav > ul > li'),
    header = document.querySelector('header'),
    subMenu = document.querySelectorAll('nav > ul > li > ul'),
    smHeight = 0,
    menuHeight = header.clientHeight;
console.log('test')
for (i = 0; i < subMenu.length; i++){
    if (smHeight < subMenu[i].clientHeight) {
        smHeight = subMenu[i].clientHeight;
    };
}

for(x=0; x< menu.length; x++){
	menu[x].addEventListener('mouseover',function(){
		header.style.height = menuHeight + smHeight + 'px';  //
	});
	menu[x].addEventListener('mouseout',function(){
		header.style.height = menuHeight+ 'px'; //
	});	
}

//gotop btn
var contactUl = document.querySelector('.contact .contact_list'),
    contactList = document.querySelectorAll('.contact .contact_list li')

var topBtn = document.querySelector('#go_top'), 
    scrAmt; //버튼 및 스크롤 양 저장

    window.addEventListener('scroll',function(){
        scrAmt = window.pageYOffset;

        if(scrAmt > 1000){
            topBtn.classList.add('active')
        }else{
            topBtn.classList.remove('active')
        }
        
        if(scrAmt > 2000){
            contactUl.classList.add('active');
        }

    });

    topBtn.addEventListener('click',function(e){
        e.preventDefault();
        var topTimer = setInterval(function(){
            if(scrAmt != 0){
                window.scrollBy(0,-60);
            }else{
                clearInterval(topTimer);
            }
        },10);
    });

