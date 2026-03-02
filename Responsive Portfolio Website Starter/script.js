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

const jobTitles = [
  "Frontend Developer",
  "Flutter Developer",
  "RTL Developer",
  "Embedded Developer"
];
let jobIndex = 0;
const jobSpan = document.getElementById('job-title');

function typeText(text, callback) {
  let i = 0;
  jobSpan.textContent = "";
  const typer = setInterval(() => {
    jobSpan.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typer);
      if (callback) callback();
    }
  }, 100); 
}

function deleteText(callback) {
  let text = jobSpan.textContent;
  let i = text.length;
  const deleter = setInterval(() => {
    jobSpan.textContent = text.substring(0, i - 1);
    i--;
    if (i <= 0) {
      clearInterval(deleter);
      if (callback) callback();
    }
  }, 50);
}

function startTypingCycle() {
  if (!jobSpan) return;
  typeText(jobTitles[jobIndex], () => {
    setTimeout(() => {
      deleteText(() => {
        jobIndex = (jobIndex + 1) % jobTitles.length;
        startTypingCycle();
      });
    }, 1000);
  });
}

if (jobSpan) {
  startTypingCycle();
}

