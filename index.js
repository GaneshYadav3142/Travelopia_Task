const secondParagraph = document.getElementById('second-paragraph');
const travelGuide = document.getElementById('travel-guide');
const showMoreBtn = document.getElementById('show-more-btn');
let flag=false
showMoreBtn.addEventListener('click', function () {
    
    if (flag) {
        // Show more content
        secondParagraph.style.display="block";
        travelGuide.style.display="block"; // Increase font size
        showMoreBtn.innerHTML = `Show Less <i class="fas fa-chevron-up"></i>`;
        flag=!flag
    } else {
        // Show less content
        secondParagraph.style.display="none";
        travelGuide.style.display="none"; 
        showMoreBtn.innerHTML = `Show More <i class="fas fa-chevron-down"></i>`;
        flag=!flag
    }
});

// Check screen width on load and resize
window.addEventListener('DOMContentLoaded', toggleContent);
window.addEventListener('resize', toggleContent);

function toggleContent() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(screenWidth)
    // If screen width is 700px or below, initially hide the second paragraph
    if (screenWidth <= 700) {
        showMoreBtn.style.display="block"
        secondParagraph.style.display="none"
        travelGuide.style.display="none"
        flag=true
    }
    else{
        showMoreBtn.style.display="none"
        secondParagraph.style.display="block"
        travelGuide.style.display="block"
    }
    // } else {
    //     secondParagraph.classList.remove('hidden');
    // }
}