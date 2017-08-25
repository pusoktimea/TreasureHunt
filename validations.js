function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "findthemagic" && form.pswrd.value == "hunter*123")
  {
    window.open('magic.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("That was not magical....try again")/*displays error message*/
  }
}
