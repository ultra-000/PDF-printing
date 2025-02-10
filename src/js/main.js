const printBtn = document.getElementById("printBtn");
const pdfUrlInput = document.getElementById("pdfUrl");

function printPdf(pdfUrl) {
  const newTap = window.open("", "_blank");
  if (newTap) {
    setTimeout(() => {
      newTap.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>PDF Printing</title>
          <script src="${window.location.href}src/js/newTap.js" defer></script>
          <style>
              iframe {
                border: none;
                display: block;
                position: absolute;
                top: 0px;
                left: 0px;
                min-width: 100%;
                min-height: 100%;
              }
          </style>
        </head>
        <body>
            <iframe src="${pdfUrl}"/>
        </body>
        </html>`);
      newTap.document.close();
    }, 1000);
  }
}

printBtn.addEventListener("click", () => {
  const pdfUrl = pdfUrlInput.value;
  printPdf(pdfUrl);
});
