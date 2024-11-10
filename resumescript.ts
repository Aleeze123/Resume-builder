document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-skills');
    const skillsContainer = document.getElementById('skills-container');

    skillsContainer.style.display = 'block';  
    toggleButton.textContent = 'Hide Skills'; 

    toggleButton.addEventListener('click', () => {
        if (skillsContainer.style.display === "none") {
            skillsContainer.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        } else {
            skillsContainer.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
});
