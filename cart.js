(() => {
 const KEY="zaytoon_cart_v1", PRICE=250;
 const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{quantity:0}}catch{return {quantity:0}}};
 const write=q=>{localStorage.setItem(KEY,JSON.stringify({quantity:Math.max(0,Math.min(99,q))}));update()};
 const update=()=>{const q=read().quantity;const badge=document.getElementById("cartCount");if(badge)badge.textContent=q;const add=document.getElementById("addToCart");if(add){add.textContent=q?"أضف عبوة أخرى إلى السلة ＋":"أضف إلى السلة ＋";}};
 window.ZaytoonCart={get:read,set:write,price:PRICE};
 document.addEventListener("DOMContentLoaded",()=>{update();const add=document.getElementById("addToCart");if(add)add.addEventListener("click",()=>{write(read().quantity+1);add.textContent="تمت الإضافة ✓";setTimeout(update,1300);});});
})();