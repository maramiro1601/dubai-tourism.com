let revealedCount = 0; // Keep track of how many info sections have been revealed

document.getElementById('toggle-info').addEventListener('click', function() {
    var infoSections = document.querySelectorAll('.info-section');
    
    // Check if there are still unrevealed sections
    if (revealedCount < infoSections.length) {
        // Reveal the next section
        infoSections[revealedCount].style.display = 'block';
        // Increase the count of revealed sections
        revealedCount++;
    }
});
