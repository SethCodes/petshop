
//get date for footer copyright
let date= new Date();
let year = date.getFullYear();
console.log(year);


document.getElementById('copyright').innerHTML = `Copyright ${year}. All rights reserved.`

//about page
let leftRow = document.getElementById('pic-block-left');

let rightRow = document.getElementById('pic-block-right');


if(window.innerWidth < 990){
    leftRow.classList.remove('col-8');
    leftRow.classList.add('text-center');  
} if (window.innerWidth >= 991) {
    leftRow.classList.add('col-8');
    leftRow.classList.remove('text-center');

}



    
