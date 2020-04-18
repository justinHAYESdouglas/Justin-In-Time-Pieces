$(document).ready(function(){
  console.log(localStorage);
  var itemImage = localStorage.getItem("itemImage");
  var itemName = localStorage.getItem("itemName")
  var itemSubTotal= localStorage.getItem("itemSubTotal");
  var quantity= localStorage.getItem("quantity");
  
  //localStorage values are saved as strings which is why we prepend and empty <img> into checkout.html
  //and assign that empty <img>'s src the value of itemImage
 $("#checkout-container").prepend('<img src="">');
 $("#checkout-container img").attr("src", itemImage);

 $("#checkout-container h1").text(itemName);
 $("h2").text("Total Price $" + itemSubTotal);
 $("#checkout-container h3").text("Quantity: " + quantity);

 $("#change-order").click(function(){
   localStorage.clear();
   location.reload();
 })

 if(localStorage.length == 0){
   $("#checkout-wrapper").css("display", "none")
 } if(localStorage.length > 0){
   $("#empty-cart").css("display", "none")
 }
});