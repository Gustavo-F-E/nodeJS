const d = document;
const w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", (e) => {
      let $scrollTop = /*w.pageYOffset ||*/ d.documentElement.scrollTop;
      //console.log(`Scroll position: ${$scrollTop}`);
      //console.log($scrollTop.type);
      //console.log($scrollBtn);
      //console.log($scrollBtn.classlist);
      if ($scrollTop > 600) {
        $scrollBtn.classList.remove("hidden");
        //console.log("scrollTop es mayor que 600");
      } else {
        $scrollBtn.classList.add("hidden");
        //console.log("scrollTop no es mayor que 600");
      }
      //console.log(w.pageYOffset, d.documentElement.scrollTop); //w.pageYOffset: deprecado
    });

    d.addEventListener("click", (e) => {
      if (e.target.matches(btn)) {
        w.scrollTo({
          behavior: "smooth",
        top: 0})
      }
    });
  };
