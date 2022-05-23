


var products= JSON.parse(localStorage.getItem("products")) || [];
display(products);

function display (products)

{
    products.forEach(function (element,index) {
        
        var box=document.createElement("div");

        
        var image = document.createElement("img");
        image.setAttribute ("src", element.image);

        var type =  document.createElement("h3");
        type.innerText=element.type;

        var desc= document.createElement("p");
        desc.innerText=element.desc;

        var price = document.createElement("p");
        price.innerText="Rs:-"+" "+element.price;

        var remove_product = document.createElement("button");
        remove_product.innerText="Remove product";

        remove_product.addEventListener("click",function()
        {
            deleteFunction(element,index)

        })

        box.append(image,type,desc,price,remove_product);
        document.querySelector("#all_products").append(box);

    });

    function deleteFunction(element,index,array)
    {
        window.location.reload()
        products.splice(index,1);
        localStorage.setItem("products",JSON.stringify(products))
        var update =localStorage.getItem("products");
        display(update);

    }

}