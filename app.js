let productList = document.getElementById('product_list');


async function fetchData(){
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
    console.log(data);
    data.forEach(obj => {
        // console.log(obj);
        let product = document.createElement('div');
        product.setAttribute('id','product');

        let image = document.createElement('img');
        image.src = obj.image;

        let h2 = document.createElement('h2');
        h2.innerHTML = obj.title

        getProduct(product,obj)

        product.append(image,h2)
        productList.appendChild(product)
    });
}

fetchData()

let image = document.getElementById('pic');
let price = document.getElementById('price');
let category = document.getElementById('category');
let title = document.getElementById('title');
let description = document.getElementById('desc');

function getProduct(product,obj){
    product.addEventListener('click',()=>{
        // console.log(obj);
        image.src = obj.image;
        price.innerHTML = `Price : $${obj.price}`;
        category.innerHTML = obj.category;
        title.innerHTML = obj.title;
        description.innerText = obj.description
    })
} 