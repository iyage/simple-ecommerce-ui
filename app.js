const products = 
[
    {
        id:1,
        title:"NIKE",
        price:199.99,
        colors:
        [
            {code:"purple",img:"images/nike-p.png"},
            {code:"red",img:"images/nike-r.png"},
        ]

    },
    {
        id:2,
        title:"ADIDAS",
        price:149.99,
        colors:
        [
            {code:"white",img:"images/adidas-w.png"},
            {code:"black",img:"images/adidas-b.png"},
        ]

    },
    {
        id:3,
        title:"HIPPIE",
        price:199.99,
        colors:
        [
            {code:"black",img:"images/hippie-b.png"},
            {code:"lightgreen",img:"images/hippie-lg.png"},
        ]

    },
    {
        id:4,
        title:"PUMA",
        price:179.99,
        colors:
        [
            {code:"black",img:"images/puma-b.png"},
            {code:"red",img:"images/puma-r.png"},
        ]

    },
    {
        id:5,
        title:"FILA",
        price:179.99,
        colors:
        [
            {code:"black",img:"images/fila-b.png"},
            {code:"red",img:"images/fila-w.png"},
        ]

    },
];

const menuItem = document.querySelectorAll(".navBotomItem");
const sliderItem = document.querySelector(".sliderItem");
const productPrice = document.querySelector(".productPrice");
const productTitle = document.querySelector(".productTitle");
const currentImage = document.querySelector(".productImage");
const currentColor = document.querySelectorAll(".color")
const size = document.querySelectorAll(".size");
let  chosenProduct = products[0];

menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log(index*-100)
        document.querySelector(".sliderWrapper").style.translate = `${-100 * index}vw`
        menuItem.forEach((e)=>{
             e.classList.remove("activeLink")
           })
       item.classList.add("activeLink")
       chosenProduct = products[index];
       productPrice.textContent = chosenProduct.price;
       productTitle.textContent = chosenProduct.title
       currentImage.src = chosenProduct.colors[0].img
       currentColor.forEach((color,index)=>{
        color.style.backgroundColor = chosenProduct.colors[index].code
       })

    })

})
currentColor.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentImage.src = chosenProduct.colors[index].img
    })
    item.style.backgroundColor = chosenProduct.colors[index].code
})
size.forEach((e)=>{
    e.addEventListener("click",()=>{
        size.forEach((item)=>{
            item.classList.remove("activeSize")
        })
        e.classList.add("activeSize")
    })
  
  })
  const payButton = document.querySelector(".payButton");
  payButton.addEventListener("click",()=>{
    document.querySelector(".payment").style.display = 'flex'
  })
  
  document.querySelector(".closeBtn").addEventListener("click",()=>{
    document.querySelector(".payment").style.display = 'none'
  })

