let dropdown = async (x, action) => {
  let node = x;
  if (action === "add") {
    node.classList.add("show_dropdown");
  } else {
    node.classList.remove("show_dropdown");
    // node.classList.add("exit_dropdown");
    // let timer = setTimeout(() => {
    //   node.classList.remove("exit_dropdown");
    // }, 600);

    return () => clearTimeout(timer);
  }
};

let onOpenMobileMenu = (type) => {
  let elem = document.getElementById("mobile_nav");

  if (elem.classList.contains("open_nav")) {
    elem.classList.remove("open_nav");
  } else {
    elem.classList.add("open_nav");
  }
};

let openMobileDropDown = (elem) => {
  

  if(elem.classList.contains("open_mobile_dropdown")) {
    elem.classList.remove("open_mobile_dropdown");
  }else {
    elem.classList.add("open_mobile_dropdown");

  }

};


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("nav").classList.add("animated_nav");
    } else {
      document.getElementById("nav").classList.remove("animated_nav");
    }
  });
});
