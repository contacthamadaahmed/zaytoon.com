const form = document.querySelector("#orderForm");
const qtyOut = document.querySelector("#qty");
const fallback = document.querySelector("#fallbackLink");
const submitButton = form.querySelector('button[type="submit"]');

let qty = 1;

const toLatinDigits = value =>
  value
    .replace(/[٠-٩]/g, digit => "٠١٢٣٤٥٦٧٨٩".indexOf(digit))
    .replace(/[۰-۹]/g, digit => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit));

document.querySelector("#minus").addEventListener("click", () => {
  qty = Math.max(1, qty - 1);
  qtyOut.textContent = qty;
});

document.querySelector("#plus").addEventListener("click", () => {
  qty = Math.min(20, qty + 1);
  qtyOut.textContent = qty;
});

const requiredFields = ["name", "phone", "governorate", "city", "address"];
const errorMessages = {
  name: "من فضلك اكتب الاسم بالكامل.",
  phone: "اكتب رقم موبايل مصري صحيح يبدأ بـ 010 أو 011 أو 012 أو 015.",
  governorate: "من فضلك اختر المحافظة.",
  city: "من فضلك اكتب المدينة أو المنطقة.",
  address: "من فضلك اكتب العنوان بالتفصيل."
};

form.addEventListener("submit", e => {
  e.preventDefault();

  if (form.dataset.sending === "1") return;

  const values = {};
  let firstInvalid = null;

  requiredFields.forEach(id => {
    const field = document.getElementById(id);
    let value = field.value.trim();

    if (id === "phone") {
      value = toLatinDigits(value).replace(/[\s-]/g, "");
      field.value = value;
    }

    values[id] = value;
    const invalid = !value || (id === "phone" && !/^01[0125]\d{8}$/.test(value));

    field.setAttribute("aria-invalid", invalid ? "true" : "false");
    document.getElementById(id + "Error").textContent =
      invalid ? errorMessages[id] : "";

    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  const optionalValue = id =>
    document.getElementById(id).value.trim() || "—";

  const message = [
    "مرحباً ZAYTOON، حابب أطلب:",
    "المنتج: زيت زيتون 1 لتر",
    "الكمية: " + qty,
    "الاسم: " + values.name,
    "الموبايل: " + values.phone,
    "المحافظة: " + values.governorate,
    "المدينة/المنطقة: " + values.city,
    "العنوان: " + values.address,
    "علامة مميزة: " + optionalValue("landmark"),
    "ملاحظات: " + optionalValue("notes")
  ].join("\n");

  const url =
    "https://wa.me/201114386413?text=" + encodeURIComponent(message);

  form.dataset.sending = "1";
  submitButton.disabled = true;
  submitButton.textContent = "جاري فتح واتساب…";

  fallback.href = url;
  fallback.hidden = false;
  window.location.href = url;
});
