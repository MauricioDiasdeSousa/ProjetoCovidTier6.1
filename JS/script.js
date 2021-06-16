let hamburger = document.querySelector('.hamburger')


hamburger.addEventListener('click', function() {
  var dropdown = document.querySelector('#dropdown_nav');
  if(dropdown.style.display == ""){
      dropdown.style.display = "flex"
      dropdown.style.transition = "1s ease;";
  }
  else{
    dropdown.style.display = ""
  }
  
})
