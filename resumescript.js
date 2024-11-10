document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsContainer = document.getElementById('skills-container');
    skillsContainer.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
    toggleButton.addEventListener('click', function () {
        if (skillsContainer.style.display === "none") {
            skillsContainer.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsContainer.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
});
