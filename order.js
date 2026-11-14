const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCg_gyOHAfdu74d7LwFrOS6VjqAtfAg0Coc1NF_JhB3QWnmhtpUDIu5nJ5ElUaqmaG/exec";

const form = document.querySelector("#orderForm");
const qtyOut = document.querySelector("#qty");
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

form.addEventListener("submit", async e => {
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
    const error = document.getElementById(id + "Error");
    if (error) error.textContent = invalid ? errorMessages[id] : "";

    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  const optionalValue = id =>
    document.getElementById(id)?.value.trim() || "—";

  const payload = {
    name: values.name,
    phone: values.phone,
    governorate: values.governorate,
    city: values.city,
    address: values.address,
    quantity: String(qty),
    notes: optionalValue("notes"),
    landmark: optionalValue("landmark"),
    product: "زيت زيتون 500 مل",
    unitPrice: "250"
  };

  form.dataset.sending = "1";
  submitButton.disabled = true;
  submitButton.textContent = "جارٍ إرسال الطلب…";

  try {
    const body = new URLSearchParams({ payload: JSON.stringify(payload) });

    // Apps Script accepts a form-encoded POST. no-cors prevents the browser
    // from reading Google's cross-origin response; it does not verify storage.
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body
    });

    const status = document.getElementById("orderStatus");
    if (status) {
      status.textContent = "تم إرسال طلبك. سنتواصل معك لتأكيد التفاصيل وتكلفة الشحن.";
      status.hidden = false;
    } else {
      alert("تم إرسال طلبك. سنتواصل معك لتأكيد التفاصيل وتكلفة الشحن.");
    }

    form.reset();
    qty = 1;
    qtyOut.textContent = qty;
  } catch (error) {
    form.dataset.sending = "0";
    submitButton.disabled = false;
    submitButton.textContent = "إرسال الطلب";
    alert("تعذر إرسال الطلب. تحقق من اتصال الإنترنت وحاول مرة أخرى.");
  }
});
