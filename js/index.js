let dropdown = async (x, action) => {
  let node = x;
  if (action === "add") {
    node.classList.add("show_dropdown");
  } else {
    node.classList.remove("show_dropdown");
    node.classList.add("exit_dropdown");
    let timer = setTimeout(() => {
      node.classList.remove("exit_dropdown");
    }, 800);

    return () => clearTimeout(timer);
  }
};


document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('nav').classList.add('animated_nav');
        } else {
          document.getElementById('nav').classList.remove('animated_nav');
        } 
    });
  }); 



function sendEmail(event){

};
