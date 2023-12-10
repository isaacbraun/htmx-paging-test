// const sideLinks = document.querySelectorAll(".sidebar ul li a");

// function addLinkListener() {
//   sideLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       // Scroll to top of page
//       scrollTop();
//     });
//   });
// }

// addLinkListener();

// // Every time htmx loads new content, add the listener again
document.addEventListener("htmx:afterSwap", scrollTop);

function scrollTop() {
  window.scrollTo({ top: 0 });
}
