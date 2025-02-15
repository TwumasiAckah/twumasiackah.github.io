document.addEventListener("DOMContentLoaded", function () {
  const doBest = document.getElementById("doBest");
  const dontDo = document.getElementById("dontDo");

  doBest.addEventListener("change", () => {
    if (doBest.checked) {
      console.log("Do your best selected.");
    }
  });

  dontDo.addEventListener("change", () => {
    if (dontDo.checked) {
      console.log("Don't do it at all selected.");
    }
  });
});
