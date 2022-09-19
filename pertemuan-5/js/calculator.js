function penjumlahan() {
  let calcForm = document.getElementById('calcForm');
  let a1 = parseFloat(calcForm.angka1.value);
  let a2 = parseFloat(calcForm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    let total = a1 + a2;
    calcForm.hasil.value = total;
  }
}

function pengurangan() {
  let calcForm = document.getElementById('calcForm');
  let a1 = parseFloat(calcForm.angka1.value);
  let a2 = parseFloat(calcForm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    let total = a1 - a2;
    calcForm.hasil.value = total;
  }
}

function perkalian() {
  let calcForm = document.getElementById('calcForm');
  let a1 = parseFloat(calcForm.angka1.value);
  let a2 = parseFloat(calcForm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    let total = a1 * a2;
    calcForm.hasil.value = total;
  }
}

function pembagian() {
  let calcForm = document.getElementById('calcForm');
  let a1 = parseFloat(calcForm.angka1.value);
  let a2 = parseFloat(calcForm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    let total = a1 / a2;
    calcForm.hasil.value = total;
  }
}

function perpangkatan() {
  let calcForm = document.getElementById('calcForm');
  let a1 = parseFloat(calcForm.angka1.value);
  let a2 = parseFloat(calcForm.angka2.value);

  if (isNaN(a1) || isNaN(a2)) {
    alert("Harap masukkan angka!");
  } else {
    let total = Math.pow(a1, a2);
    calcForm.hasil.value = total;
  }
}