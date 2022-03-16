const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imagecontainer = document.querySelector('.img-show');


images.forEach(image=>{
    image.addEventListener('click', ()=>{
  
    addimage(image.getAttribute('src'),image.getAttribute('alt'))
     
    })
})

const addimage=(srcImage,altImage)=>{
    containerImage.classList.toggle('move');  
    imagecontainer.src = srcImage;
    
}

containerImage.addEventListener('click',()=>{
containerImage.classList.toggle('move');

})
