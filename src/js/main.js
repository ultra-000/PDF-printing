function printPdf(pdfUrl) {
  const newTab = window.open(pdfUrl, "_blank");

  if (newTab) {
    setTimeout(() => {
      newTab.print();
    }, 500); // delay to ensure that the new tap has loaded
  }
}
