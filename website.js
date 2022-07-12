  function change()
  {
    document.getElementById("i").src="name.png" ; 
  }
  function unchange()
  {
     document.getElementById("i").src="vine.jpg"  ; 
  }
  function myfunction()
  {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function validate()
  {
    var r1=change();
    var r2=unchange();
    var r3=myfunction();
    if(r1&&r2&&r3)
     {
       return true;
     }
     else
     {
       return false;
     }
  }