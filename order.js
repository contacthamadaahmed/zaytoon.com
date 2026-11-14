(() => {
 const ENDPOINT="https://script.google.com/macros/s/AKfycbxCg_gyOHAfdu74d7LwFrOS6VjqAtfAg0Coc1NF_JhB3QWnmhtpUDIu5nJ5ElUaqmaG/exec";
 const PRICE=250, form=document.getElementById("orderForm"), qtyOut=document.getElementById("qty"), totalOut=document.getElementById("total");
 const cart=window.ZaytoonCart, empty=document.getElementById("emptyCart"), contents=document.getElementById("cartContents");
 let quantity=cart.get().quantity;
 const render=()=>{qtyOut.textContent=quantity;totalOut.textContent=quantity*PRICE;empty.hidden=quantity!==0;contents.hidden=quantity===0;form.querySelector('button[type="submit"]').disabled=quantity===0;};
 document.getElementById("minus").addEventListener("click",()=>{quantity=Math.max(0,quantity-1);cart.set(quantity);render();});
 document.getElementById("plus").addEventListener("click",()=>{quantity=Math.min(99,quantity+1);cart.set(quantity);render();});
 const latin=s=>s.replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g,d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d));
 const required=["name","phone","governorate","city","address"];
 const errors={name:"اكتب الاسم بالكامل.",phone:"اكتب رقم موبايل مصري صحيح.",governorate:"اختر المحافظة.",city:"اكتب المدينة أو المنطقة.",address:"اكتب العنوان بالتفصيل."};
 form.addEventListener("submit",async e=>{
  e.preventDefault();if(form.dataset.sending==="1"||quantity<1)return;
  const data={};let first=null;
  required.forEach(id=>{const el=document.getElementById(id);let v=el.value.trim();if(id==="phone"){v=latin(v).replace(/[\s-]/g,"");el.value=v;}data[id]=v;const bad=!v||(id==="phone"&&!/^01[0125]\d{8}$/.test(v));el.setAttribute("aria-invalid",bad?"true":"false");document.getElementById(id+"Error").textContent=bad?errors[id]:"";if(bad&&!first)first=el;});
  if(first){first.focus();return;}
  data.quantity=String(quantity);data.product="زيت زيتون ZAYTOON - عبوة 500 مل";data.unitPrice=String(PRICE);data.total=String(quantity*PRICE);data.notes=document.getElementById("notes").value.trim();data.shipping="يحدد بعد معرفة العنوان";
  const button=document.getElementById("submitOrder"),status=document.getElementById("orderStatus");
  form.dataset.sending="1";button.disabled=true;button.textContent="جارٍ إرسال الطلب…";
  try{
   const body=new URLSearchParams({payload:JSON.stringify(data)});
   await fetch(ENDPOINT,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body});
   status.textContent="تم إرسال الطلب إلى نظام التسجيل. سنتواصل معك لتأكيد الطلب وتكلفة الشحن.";status.hidden=false;
   cart.set(0);quantity=0;render();form.reset();
  }catch(err){status.textContent="تعذر إرسال الطلب. تحقق من الإنترنت وحاول مرة أخرى.";status.hidden=false;button.disabled=false;}
  finally{form.dataset.sending="0";button.textContent="تأكيد وإرسال الطلب";}
 });
 render();
})();