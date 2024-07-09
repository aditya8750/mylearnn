
/* title js */

var typingEffect=new Typed(".multitext",{
strings : ["CODING,", "ANYTHING", "ANYWHERE"],
loop: true,
typeSpeed: 80,
backSpeed:100,
backDelay: 1000

/* title js end */

/* nav js */

});
const toggleMenu=document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
};
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

/* nav js  end*/
  
/* small card js */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
    entry.target.classList.add('show');
    
    } else{
        entry.target.classList.remove('show');
    }
    });
    });
    
    const hiddenElements =document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

   /* small card js  ends*/




   function sendEmail(){
    var params ={
        email: document.getElementById("email").value,
    };
    
    const serviceID = "service_ncmr9oo"
const templateID ="template_wriwndh"
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("email").value ="";
        console.log(res);
        swal("Done!", "Thank you for subscribing!", "success");
    }
)
.catch((err) => console.log(err));

}
