 // Get the LogIn modal
 var modal = document.getElementById("idlogin");
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };