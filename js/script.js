const mainNavWrapper=document.querySelector(".main-nav__wrapper"),mainNavHeader=document.querySelector(".main-nav__header"),mainNavList=document.querySelector(".main-nav__list"),mainNavToggle=document.querySelector(".main-nav__toggle"),introWrapper=document.querySelector(".intro__wrapper"),introImg=document.querySelector(".intro__img"),introSlogan=document.querySelector(".intro__slogan");mainNavToggle.addEventListener("click",(function(a){a.preventDefault(),mainNavToggle.classList.contains("main-nav__toggle--closed")?(mainNavWrapper.classList.remove("main-nav__wrapper--closed"),mainNavHeader.classList.remove("main-nav__header--closed"),mainNavList.classList.remove("main-nav__list--closed"),mainNavToggle.classList.remove("main-nav__toggle--closed"),mainNavToggle.classList.add("main-nav__toggle--opened"),introWrapper.classList.remove("intro__wrapper--closed"),introImg.classList.remove("intro__img--closed"),introSlogan.classList.remove("intro__slogan--closed")):(mainNavWrapper.classList.add("main-nav__wrapper--closed"),mainNavHeader.classList.add("main-nav__header--closed"),mainNavList.classList.add("main-nav__list--closed"),mainNavToggle.classList.remove("main-nav__toggle--opened"),mainNavToggle.classList.add("main-nav__toggle--closed"),introWrapper.classList.add("intro__wrapper--closed"),introImg.classList.add("intro__img--closed"),introSlogan.classList.add("intro__slogan--closed"))}));