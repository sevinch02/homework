
let img = document.getElementsByTagName('img')

for(let i = 0; i< img.length;i++){
    setTimeout(() =>{
        img[i].style.opacity = '1';
       }, (i+1) *2000)
    
}
let span = document.getElementsByTagName('span')
for(let i = 0;i<span.length;i++){
    setTimeout(() =>{
        span[i].style.opacity = '1';
       }, (i+1) *2000)
}