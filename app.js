const showPopupBtn=document.querySelector(".button")
const formPopup=document.querySelector(".form-popup")
const hideshowPopupBtn=document.querySelector(".form-popup .close-btn")
const loginSignupLink=document.querySelectorAll(".form-box .bottom-link a")

showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup")
});
hideshowPopupBtn.addEventListener("click",()=>showPopupBtn.click());
loginSignupLink.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        formPopup.classList[link.id==="signup-link"? 'add':'remove']("show-signup");
    })
})