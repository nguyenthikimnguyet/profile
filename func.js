var onScroll = function () {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 300) {
      document.getElementById("navbar").style.background = "transparent";
      // for (let i = 0; i < button.length; i++) {
      //   button[i].classList.remove("nav-title-scroll");
      // }
    } else {
      document.getElementById("navbar").style.background =
        "rgb(80 80 80 / 84%)";
      // for (let i = 0; i < button.length; i++) {
      //   button[i].classList.add("nav-title-scroll");
      // }
    }
    // prevScrollpos = currentScrollPos;
  };
};

onScroll();

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const nut = document.getElementsByClassName("nav-item");

    const cardClick = document.getElementsByClassName("wrap-card");
    const cardDetail = document.getElementsByClassName("card-detail");
    const zoneClose = document.querySelector(".bg-black");
    const viewCv = document.querySelector(".title-header .btn");
    const body = document.querySelector("body");
    const pdf = document.querySelector(".pdf");
    const buttonClosePdf = document.querySelector(".closePDF");
    console.log(body);
    //HANDLE CLICK VIEW CV
    viewCv.addEventListener("click", function () {
      body.classList.add("active-cv");
      pdf.classList.add("active");
      buttonClosePdf.classList.add("active");
    });

    //HANDLE CLOSE FILE PDF
    buttonClosePdf.addEventListener("click", function () {
      body.classList.remove("active-cv");
      pdf.classList.remove("active");
      buttonClosePdf.classList.remove("active");
    });
    // HANDLE CLICK CARD CLICK
    for (let i = 0; i < cardClick.length; i++) {
      cardClick[i].addEventListener("click", function () {
        cardDetail[i].classList.add("active-detail");
        zoneClose.classList.add("active-zone");
      });
    }

    zoneClose.addEventListener("click", function () {
      for (let index = 0; index < cardDetail.length; index++) {
        cardDetail[index].classList.remove("active-detail");
        this.classList.remove("active-zone");
      }
    });

    // HANDLE CLICK MENU
    for (let i = 0; i < nut.length; i++) {
      nut[i].addEventListener("click", function () {
        for (let index = 0; index < nut.length; index++) {
          nut[index].classList.remove("active-menu");
        }
        this.classList.add("active-menu");
      });
    }
  },
  false
);
