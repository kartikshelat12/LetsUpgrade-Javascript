function chgimg(bt) {

  if (bt == 1) document.getElementById("img1").src = "img1";
  else if (bt == 2) document.getElementById("img1").src = "img2";
  else if (bt == 3) document.getElementById("img1").src = "img3";

  console.log("img changed to :" + document.getElementById("img1").src);


}

function copytext() {
  document.getElementById("input2").value = document.getElementById("input1").value;

}



  let ary = [
{
    Name: "thor",
    Age: 1500,
    Country:"NotInThisWorld",
    Hobbies: ["singing", "dancing", "nothing"]
  },

{
    Name: "Odin",
    Age: 2200,
    Country:"India",	
    Hobbies: ["singing", "fighting", "nothing"]
  },

{
    Name: "Me",
    Age: 25,
    Country:"inIndia",	
    Hobbies: ["singing", "dancing", "politics"]
  }

];



function printfunc()  { 
ary.forEach(function(abc) { 
console.log(abc); 
}
);	}

function lessthan30() {
ary.forEach(function(obj) {
if (obj.Age<30) { console.log("Object with Name " + obj.Name + " is less than 30 years old"); } 

}
);
}

function inIndia() {
ary.forEach(function(obj) {
if (obj.Country=="India") { console.log("Object with Name " + obj.Name + " is in India"); } 

}
);
}


