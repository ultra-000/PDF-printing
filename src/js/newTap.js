document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.body.querySelector("iframe");
  if (iframe) {
    iframe.onload = () => {
      setTimeout(() => {
        print();
        window.addEventListener("focus", () => {
          window.close();
        });
      }, 1000);
    };
  }
});
