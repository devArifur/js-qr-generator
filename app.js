let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
  } else {
    alert("Please, type your text or URL!");
  }
}
