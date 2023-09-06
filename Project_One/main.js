var tl = gsap.timeline({
    defaults: {
      opacity: 0,
      ease: "linear",
      duration: 1,
    },
  });
  
  tl.fromTo(
    ".sidebar",
    { width: 0 },
    {
      opacity: 1,
      width: "30%",
    }
  );
  
  tl.fromTo(
    ".main-img",
    { x: 0 },
    {
      opacity: 1,
    }
  );
  
  tl.fromTo(
    ".content",
    { x: 100 },
    {
      opacity: 1,
      x: 0,
    }
  );

  document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector(".main-img");
    gsap.to(img, {
      boxShadow: "10px 20px 40px rgba(0,0,0,0.9)",
      duration: 1,
    });
  });