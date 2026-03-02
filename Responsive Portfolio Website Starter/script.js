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

// contact form mailto handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subjectInput = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // change this to your own Gmail address
    const to = 'vineetagrawal2306@gmail.com';
    const subject = encodeURIComponent(subjectInput || 'Message from ' + name);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // open default mail client with prefilled data
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    // give browser a moment to process the mailto before navigating back
    setTimeout(() => {
      // return to top/home section
      window.location.hash = '#home';
      // optionally clear form fields
      contactForm.reset();
    }, 100);
  });
}