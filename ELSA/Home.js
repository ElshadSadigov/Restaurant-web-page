// Nav part
let headerRes= document.querySelector('.header-responsive-div');
navbar=document.querySelector('nav');

headerRes.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})
// Nav part



// Menu part
// Eats part
let nationalEat = document.querySelector('.national-eat-btn')
foreignEat =document.querySelector('.foreign-eat-btn')
nationalInfoDiv=document.querySelector('.national-infomation-eat-div')
foreignInfoDiv=document.querySelector('.foreign-infomation-eat-div')


nationalEat.addEventListener('click', ()=>{
  foreignInfoDiv.style.display="none";
  nationalInfoDiv.style.display="block";
})
foreignEat.addEventListener('click', ()=>{
  foreignInfoDiv.style.display="block";
  nationalInfoDiv.style.display="none";
})
// Eats part

// Drink part
let nonAcoholick =document.querySelector('.non-alcoholic_drink-btn')
acoholick =document.querySelector('.alcoholic_drink-btn')
nonAcoholickInfoDiv=document.querySelector('.non-alcoholic-drink')
acoholickInfoDiv=document.querySelector('.alcoholic-drink')

nonAcoholick.addEventListener('click', ()=>{
  nonAcoholickInfoDiv.style.display="block"
  acoholickInfoDiv.style.display="none"
})

acoholick.addEventListener('click', ()=>{
  nonAcoholickInfoDiv.style.display="none"
  acoholickInfoDiv.style.display="block"
})

// Drink part
// Menu part

// About part
let infoAbout=document.querySelector('.info-about')
galleryAbout=document.querySelector('.gallery-about')
infoRestaurant=document.querySelector('.infomation-restaurant')
qalleryResturant=document.querySelector('.infomation-photos')

infoAbout.addEventListener('click', ()=>{
  infoRestaurant.style.display="block"
  qalleryResturant.style.display="none"
})


galleryAbout.addEventListener('click', ()=>{
  infoRestaurant.style.display="none"
  qalleryResturant.style.display="grid"
})
// About part