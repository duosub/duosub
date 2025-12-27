// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Copy Code Functionality
function copyCode() {
    const codeText = document.getElementById("scriptCode").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".copy-btn");
        const originalText = btn.innerText;
        
        btn.innerText = "Copied!";
        btn.style.background = "#34a853"; // Green
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "rgba(255,255,255,0.1)";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

console.log("DuoSub Help Center Loaded");
