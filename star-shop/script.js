let logOut = document.getElementById("logOut");
let show = document.getElementById("show");
let closed = document.getElementById("close");
let shoppBtn = document.getElementById("shoppBtn");
let productAll = document.getElementById("product")
let closeShopping = document.getElementById("closeShopping");
let totalPrice = document.getElementById("totalPrice");
let updateShopping =[];
let arr = [];
let supperIndex;



if(localStorage.getItem("allProducts") != null){
    updateShopping = JSON.parse(localStorage.getItem("allProducts"));
    displayProduct();
}

if(localStorage.getItem("allPrice") != null){
    arr = JSON.parse(localStorage.getItem("allPrice"));
    sumPrice()
}

logOut.onclick = () => {
    event.preventDefault();
    show.style.display = "block";
};
closed.onclick = () => {
    show.style.display = "none";
};

shoppBtn.onclick = () => {
    productAll.style.display = "block";
}
closeShopping.onclick = () => {
    productAll.style.display = "none";
};

function add() {
    product = [
        {img: "./img/lab1.jpg" , title: "Dell Latitude" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 9200},
        {img: "./img/lab2.jpg" , title: "Dell" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 12000},
        {img: "./img/lab3.jpg" , title: "HP" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 10000 },
        {img: "./img/lab4.jpg" , title: "Apple" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 15000 },
        {img: "./img/lab5.jpg" , title: "LG" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 20000 },
        {img: "./img/lab6.jpg" , title: "Lenovo" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 7000 },
        {img: "./img/lab7.jpg" , title: "Apple" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 30000 },
        {img: "./img/lab8.jpg" , title: "Dell" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 40000 },
        {img: "./img/lab9.jpg" , title: "Lenovo" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 18000 },
        {img: "./img/lab10.jpg" , title: "HP" , discription: "14 inch, 11th Gen Core i5 4th Gen, 256GB M.2 SSD, 8GB DDR4 RAM" , price: 5000 },
    ];
    let cartona = "";
    for(let i =0 ; i<product.length; i++){
        cartona += `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
                <div class="card shadow">
                    <img src=${product[i].img} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product[i].title}</h5>
                        <p class="card-text">${product[i].discription}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button href="#" class="btn btn-primary px-4" id="addProduct" onclick="addShopping(${i})">Add</button>
                            <strong>${product[i].price}  $</strong>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector(".demo").innerHTML = cartona;
};

add();

function addShopping(index){
    supperIndex = index;
    updateShopping.push(product[index]);
    displayProduct()
    total()
};

function displayProduct(){
    let cartona = "";
    for(let i = 0 ; i<updateShopping.length; i++){
        cartona += `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
                <div class="card shadow">
                    <img src=${updateShopping[i].img} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${updateShopping[i].title}</h5>
                        <p class="card-text">${updateShopping[i].discription}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button href="#" class="btn btn-dark px-4" id="deleteProduct" onclick="deleteProduct(${i})">Delete</button>
                            <strong>${updateShopping[i].price}  $</strong>
                        </div>
                    </div>
                </div>
            </div>
        `
    };
    localStorage.setItem("allProducts" , JSON.stringify(updateShopping) );
    document.getElementById("counter").innerHTML = updateShopping.length;
    document.querySelector(".done").innerHTML = cartona;
};

function total(){
    arr.push(product[supperIndex].price)
    localStorage.setItem("allPrice" , JSON.stringify(arr)); 
    sumPrice() 
};

function sumPrice(){
    totalPrice.innerHTML = `Total Price: ${arr.reduce(myFunction)} $`;
};

function myFunction(total , value){
    return total + value;
};

function deleteProduct(supperIndex){
    updateShopping.splice(supperIndex , 1);
    localStorage.setItem("allProducts" , JSON.stringify(updateShopping) )
    arr.splice(supperIndex , 1);
    localStorage.setItem("allPrice" , JSON.stringify(arr) )
    displayProduct()
    if(arr.length > 0){
        totalPrice.innerHTML = `Total Price: ${arr.reduce(myFunction)} $`;
    }else {
        totalPrice.innerHTML = `Total Price: $`;
    }
};
