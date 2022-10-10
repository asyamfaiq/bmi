var tinggi, berat, keterangan, bmi;
function hitung() {
  tinggi = parseFloat(document.getElementById("nilai_tb").value);
  berat = parseFloat(document.getElementById("nilai_bb").value);
  tinggi /= 100;
  bmi = berat / (tinggi * tinggi);

  if (bmi >= 30) {
    keterangan = "Obesity";
  } else if ((bmi >= 25) & (bmi <= 29)) {
    keterangan = "Overweight";
  } else if ((bmi >= 18) & (bmi <= 24)) {
    keterangan = "Normal weight";
  } else if ((bmi >= 0) & (bmi <= 17)) {
    keterangan = "Underweight";
  } else {
    keterangan = "Data Tidak Ditemukan";
  }
  document.getElementById("bmi").innerHTML =
    "Hasil perhitungan BMI : " + bmi.toFixed(1);
  document.getElementById("keterangan").innerHTML = keterangan;
}
