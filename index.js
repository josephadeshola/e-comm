
let carts=[]
localStorage.allCarts ? carts = JSON.parse(localStorage.getItem("allCarts")) : carts = [];
const AddProduct=()=>{
    let userProduct={
        productname:productName.files[0],
        productprice:productPrice.value,
        productcategory:ProductCategory.value,
        totalitem:TotalItem.value
    }
   carts.push(userProduct);
    localStorage.allCarts = JSON.stringify(carts);
  console.log(carts);

  if(!productName.value || !productPrice.value || !ProductCategory.value || !TotalItem.value){
    alert("this field is required")
  }
  else{
    window.location.href="dashboard.html"
  }



}
