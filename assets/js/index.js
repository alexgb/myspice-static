var searchEl = document.querySelector('.RecipesIndexSearch');

// From underscore
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function showRecipeItemsMatching(term) {
  var regex = new RegExp(term, 'i');

  document.querySelectorAll('.RecipesIndexItem').forEach(function(el) {
    if (!regex.test(el.textContent)) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
  });
}

function showRecipeItemsMatchingSearch() {
  showRecipeItemsMatching(searchEl.value);
}

if (searchEl) {
  searchEl.addEventListener('keyup', debounce(showRecipeItemsMatchingSearch, 100));
  showRecipeItemsMatchingSearch();
  searchEl.focus();
}
