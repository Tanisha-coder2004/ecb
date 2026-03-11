
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.mobile-sidebar');

// hamburger.addEventListener('click', () => {
//     // hamburger.classList.toggle('active');
//     sidebar.classList.toggle('active');
// });

// hamburger.addEventListener("mouseenter",()=>{
//     sidebar.classList.add("active")
// })
// hamburger.addEventListener("mouseleave",()=>{
//     sidebar.classList.remove("active")
// })
// sidebar.addEventListener('mouseenter',()=>{
//     sidebar.classList.add("active")
// })

let timeout;


hamburger.addEventListener("mouseenter", () => {
    clearTimeout(timeout); 
    sidebar.classList.add("active");
    hamburger.classList.add("active"); 
});


hamburger.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
        sidebar.classList.remove("active");
        hamburger.classList.remove("active");
    }, 200);
});


sidebar.addEventListener('mouseenter', () => {
    clearTimeout(timeout); 
    sidebar.classList.add("active");
    hamburger.classList.add("active");
});


sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove("active");
    hamburger.classList.remove("active");
});