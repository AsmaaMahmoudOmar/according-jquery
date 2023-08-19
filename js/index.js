 let menuWidth=$('#menus').outerWidth();

// $('#menues').animate({left:`-${menueWidth}`})

$('#barMenu').click(()=>{
$('#menus').animate({left:0})
$('.open').animate({left:menuWidth})
})

$('#close').click(()=>{
$('#menus').animate({left:`-${menuWidth}`})
$('.open').animate({left:30})

})

$('#slideDown .headerToggle').click(function(){
    $('#slideDown .songText').not($(this).next()).slideUp();
    $(this).next().slideToggle();
})

// let day =localStorage.getItem('day');
// let hour = localStorage.getItem('hour');
// let minute = localStorage.getItem('minute');
// let second =localStorage.getItem('second');
let countDownDate = new Date("sep 25, 2023 15:37:25").getTime();

function countDown(){
  
    let now = new Date().getTime();
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

    $('#day').text(days +'D');
    $('#hour').text(hours +'h');
    $('#minute').text(minutes +'m');
    $('#second').text(seconds +'s');
    


}

let timer = null;
function startCount(){
  timer = setInterval(countDown, 1000);
}
startCount();
function stopCount(){
    clearInterval(timer)
}


$('textarea').keyup(function(){
    let arr = [...$(this).val()];
    let num =100;
    console.log(arr);
    if(arr.length > 0 || num >0){
    $('#numeric').text(num-arr.length);

    }
    if(arr.length >= 100 || num <= 0){
        $('#numeric').text('your available character finished')
    }
    
})
let scrollTOP =$(window).scrollTop();

$('#menus a[href^="#"]').click(function(){
    let aHref =$(this).attr('href');
    let sectionOffset = $(aHref).offset().top;

 $('html,body').animate({scrollTOP:sectionOffset},1000);
})