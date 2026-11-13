// عدّل السعر عند جاهزيته. اتركه فارغاً لعرض "يُحدد قريباً".
const STORE = { price: "250 جنيه", whatsapp: "201114386413" };
document.getElementById("year").textContent = new Date().getFullYear();
if (STORE.price.trim()) document.getElementById("price").textContent = STORE.price;
const toggle = document.querySelector(".hamb");
const nav = document.querySelector(".header nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
