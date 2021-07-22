let date= new Date();
let year = date.getFullYear();
console.log(year);


document.getElementById('copyright').innerHTML = `Copyright ${year}. All rights reserved.`

//about page
let rightRow = document.getElementById('pic-block-left');

if(window.innerWidth < 990){
    rightRow.classList.remove('col-8');
    
    
} else {
    rightRow.classList.add('col-8');
}
console.log(rightRow.classList);
