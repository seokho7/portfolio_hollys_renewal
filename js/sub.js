
var sideMenuTT = document.querySelectorAll('.side_menu > div label');


for(i=0; i<sideMenuTT.length; i++){
    sideMenuTT[i].addEventListener('click',function(){
        
        var TTbox = this.parentNode;
        var targetUl = TTbox.lastChild.previousSibling ;
        var plusHeight = targetUl.offsetHeight;
        var parentHeight = TTbox.offsetHeight;
        
        
        TTbox.classList.toggle('active');
        if(!TTbox.classList.contains('active')){
            TTbox.style.height = '61px'
        }else{
            TTbox.style.height = parentHeight + plusHeight + "px"
        }
    })
}

// notice
var mydata = JSON.parse(data);
var contents = '';


for (z = 0; z < mydata.length ; z++){
contents += "<tr><th>" + mydata[z].number + '</th><td><a href="">' + mydata[z].content + "</a></td><td>" + mydata[z].day + "</td></tr>"
}
document.getElementById('target_box').innerHTML = contents

var datapageBox = document.querySelector('.table_pager');
var datapager = '';


for (i = 1; i <= mydata.length / 10; i++){
    datapager += '<a href="">' + i + '</a>'
}
datapageBox.innerHTML = datapager;

var pagerItem = datapageBox.querySelectorAll('a')

var newTableContent = document.querySelectorAll('.main_notice_table tbody tr');

var start = -1;
var end = 0;

for(i=0; i<pagerItem.length; i++){
    pagerItem[i].addEventListener('click', function (e) {
         e.preventDefault();
         for (i = 0; i < pagerItem.length; i++){
             pagerItem[i].classList.remove('active')
         }
         this.classList.add('active')
         var start = parseInt(this.innerHTML - 1) * 10
         var end = parseInt(this.innerHTML) *10 -1 
         pagenation(newTableContent,start, end)   
     });
}
// for (item of pagerItem){
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         for (i = 0; i < pagerItem.length; i++){
//             pagerItem[i].classList.remove('active')
//         }
//         this.classList.add('active');

//         var start = parseInt(this.innerHTML - 1) * 10
//         var end = parseInt(this.innerHTML) *10 -1 
//         pagenation(newTableContent,start, end)   
//     });
// }

function pagenation(target, start, end) {

    for (i=0; i<target.length; i++){
        target[i].style.display = 'none'
    }
    // for (target of newTableContent){
    //     target.style.display = 'none'
    // }
    for (i = start; i <= end; i++){
        target[i].style.display = ''
    }
}

pagerItem[0].click();


