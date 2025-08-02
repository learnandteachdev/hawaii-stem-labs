/* FOR A FADE
  document.body.addEventListener("click", function () {
      const page = document.getElementById("page");
      page.style.transition = "opacity 0.5s ease";
      page.style.opacity = 0;
      setTimeout(() => {
        window.location.href = "second-page.html";
      }, 500);
    });
    */
console.log("App by Hawaiʻi STEM Labs");
document.getElementById("page").addEventListener("click", function(){
      const page = document.getElementById("page");
      page.style.transition = "opacity 0.5s ease";
      page.style.opacity = 0;
      setTimeout(() => {
        window.location.href="hpoptions.html";}, 500);
       console.log("test");
});

