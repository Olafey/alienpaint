// let display = 
// document.getElementsByClassName('image_toptext_button').innerHTML = function () {
//     alert ("WELCOME!");
function display(){
    alert ("WELCOME!");
}

const person1 = {
    firstName: "Ibrahim",
    lastName: "Aremu",
    otherName: "Olamide",
    fullName: function() {
        return this.lastName + " " + this.firstName + " " + this.otherName;
    }
}

//  let mouseme = document.getElementById('mouseme');
//  let action = mouseme.addEventListener(click, wearehere);

function wearehere(){
         var pop = document.getElementById("pop");  
        //  if (pop.style.display === "none") 
        //  {  
        //      pop.style.display = "block";  
        //  } 
        //  else {
        //      pop.style.display = "none"
        //  }

        return pop.style.display ="block";
        }

