// $(function(){  
//     $('.xyz').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: false,
//       autoplaySpeed: 2000,
//       arrows:false,
//       centerMode: true,
//       dots: true,
    
//     });
//     var mixer = mixitup('.working');      
// });
const header = document.querySelector("header");

Window.addEventListener ("scroll",function(){
header.classList.toggle("sticky", window.scrollY>0);
});
