let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
let openBtn = document.getElementById("openResume");
let modal = document.getElementById("resumeModal");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
};