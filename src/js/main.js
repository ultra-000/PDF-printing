const printBtn = document.getElementById("printBtn");
const pdfUrlInput = document.getElementById("pdfUrl");

function printPdf(pdfUrl) {
  const newTab = window.open(pdfUrl, "_blank");

  if (newTab) {
    setTimeout(() => {
      newTab.print();
    }, 500); // delay to ensure that the new tap has loaded
  }
}

printBtn.addEventListener("click", () => {
  const pdfUrl = pdfUrlInput.value;
  printPdf(pdfUrl);
});

window.onload = () => {
  pdfUrlInput.value = window.location.href + "assets/pdf/sample.pdf";
};
