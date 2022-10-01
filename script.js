let person =[{id:1,
    personName:"Riad Hossain",
    work:"Student",
    img:"image/01.jpg",
    review_text:"Lorem Ipsum is Riad Hossain dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
   {id:2,
   personName:"Abdulah Afnan",
   work:"Vloger",
   img:"image/02.jpg",
   review_text:"Lorem Ipsum is Abdulah Afnan dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
   {id:3,
   personName:"Mushfiqur Rahman",
   work:"Front End Devloper",
   img:"image/03.jpg",
   review_text:"Lorem Ipsum is Mushfiqur Rahman dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
   {id:4,
   personName:"Sajid Hossain",
   work:"Student",
   img:"image/04.jpg",
   review_text:"Lorem Ipsum is Sajid Hossain dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}];

let currentItem = 0;
const Image = document.getElementById("image");
const Name = document.getElementById("name");
const Work = document.getElementById("work");
const ReviewText = document.getElementById("review_text");

const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// ### EVENT LISTENER ### \\
// default 
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})
prevBtn.addEventListener("click", previousElement);
nextBtn.addEventListener("click", nextElement);

// ### FUNCTION ### \\
function showPerson(value){  // value = currentItem
    let item = person[value];
    Image.src = item.img;
    Name.innerText = item.personName;
    Work.innerText = item.work;
    ReviewText.innerText = item.review_text;
}
function previousElement(){
    currentItem--;
    if(currentItem<0){
        currentItem = person.length-1;
    }
    showPerson(currentItem);
}
function nextElement(){
    currentItem++;
    if(currentItem>person.length-1){
        currentItem = 0;
    }
    showPerson(currentItem);
}