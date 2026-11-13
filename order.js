const form=document.querySelector("#orderForm"),qtyOut=document.querySelector("#qty"),fallback=document.querySelector("#fallbackLink");
let qty=1;const digits=s=>s.replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d)).replace(/[۰-۹]/g,d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d));
document.querySelector("#minus").onclick=()=>{qty=Math.max(1,qty-1);qtyOut.textContent=qty};
document.querySelector("#plus").onclick=()=>{qty=Math.min(20,qty+1);qtyOut.textContent=qty};
const fields=["name","phone","governorate","city","address"],messages={name:"من فضلك اكتب الاسم بالكامل.",phone:"اكتب رقم موبايل مصري صحيح يبدأ بـ 010 أو 011 أو 012 أو 015.",governorate:"من فضلك اختر المحافظة.",city:"من فضلك اكتب المدينة أو المنطقة.",address:"من فضلك اكتب العنوان بالتفصيل."};
document.querySelector("#phone").addEventListener("input",e=>{e.target.value=digits(e.target.value).replace(/[^0-9]/g,"")});
form.addEventListener("submit",e=>{e.preventDefault();if(form.dataset.sending==="1")return;let first=null,values={};
fields.forEach(id=>{const el=document.getElementById(id),v=el.value.trim();values[id]=v;let error=!v||(id==="phone"&&!/^01[0125][0-9]{8}$/.test(v));el.setAttribute("aria-invalid",error?"true":"false");document.querySelector("#"+id+"Error").textContent=error?messages[id]:"";if(error&&!first)first=el});
if(first){first.focus();return}
const val=id=>document.getElementById(id).value.trim()||"—",msg=["مرحباً ZAYTOON، حابب أطلب:","المنتج: زيت زيتون 1 لتر","الكمية: "+qty,"الاسم: "+values.name,"الموبايل: "+values.phone,"المحافظة: "+values.governorate,"المدينة/المنطقة: "+values.city,"العنوان: "+values.address,"علامة مميزة: "+val("landmark"),"ملاحظات: "+val("notes")].join("\n");
const url="https://wa.me/201114386413?text="+encodeURIComponent(msg);form.dataset.sending="1";const submit=form.querySelector('[type="submit"]');submit.disabled=true;submit.textContent="جاري فتح واتساب…";fallback.href=url;fallback.style.display="block";window.location.href=url;
});