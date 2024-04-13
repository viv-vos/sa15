document.addEventListener('DOMContentLoaded', function() {
    const show = document.querySelectorAll('.toggle-btn');
    
    show.forEach(function(button) {
      button.addEventListener('click', function() {
        const recipeList = this.nextElementSibling;
        recipeList.classList.toggle('show-recipe');
        if (recipeList.classList.contains('show-recipe')) {
          this.textContent = 'Hide';
        } else {
          this.textContent = 'Show';
        }
      });
    });
  });