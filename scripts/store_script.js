$(document).ready(function(){
//Show clicked item as a highlight to aviod making new pages for each item
 $("#item-container img").click(function(){
   $(".highlight").attr("src",$(this).attr("src"));  
   $(".highlight").attr("title",$(this).attr("title"));
   $(".highlight").attr("alt",$(this).attr("alt"));
   
   $("#item-name").text($(this).attr("alt"));
   $("#price").text($(this).attr("title"));
   $("#highlight-container").css("display","flex");
   $(window).scrollTop(210);

   //reset the values of the itemQuantity and Subtotal so the new clicked item's price and qunatity start at 0
   $("#quantity").text(itemQuantity = 0)
   $("#total").text("Sub Total: $0.00")
 });

//add and subtract item buttons, and add to cart button
 var itemQuantity = 0;
$("#plus").click(function(){
  var subTotal = parseFloat($("#price").text());

  itemQuantity++;
  subTotal *= itemQuantity;

  $("#quantity").text(itemQuantity);
  $("#total").text("Sub Total: $" + subTotal.toFixed(2));
});

$("#minus").click(function(){
   var subTotal = parseFloat($("#price").text());
   
   itemQuantity--;
   subTotal *= itemQuantity;

   if (itemQuantity < 0 ){
    itemQuantity = 0;
    subTotal = 0;
   };

  $("#quantity").text(itemQuantity);
  $("#total").text("Sub Total: $" + subTotal.toFixed(2));
  });

  $("#add-to-cart").click(function(e){
    var subTotal = (parseFloat($("#price").text()));
    
    subTotal *= itemQuantity;
    localStorage.setItem("itemImage", $(".highlight").attr("src"));
    localStorage.setItem("itemName", $(".highlight").attr("alt"));
    localStorage.setItem("itemSubTotal", (subTotal).toFixed(2))
    localStorage.setItem("quantity", itemQuantity)
    
    if(subTotal == 0){
      e.preventDefault();
      alert("You must have items in your cart to proceed to checkout.");
    }
  });
});