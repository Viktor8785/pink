const mainNavWrapper=document.querySelector(".main-nav__wrapper"),mainNavHeader=document.querySelector(".main-nav__header"),mainNavList=document.querySelector(".main-nav__list"),mainNavToggle=document.querySelector(".main-nav__toggle"),introSloganForm=document.querySelector(".intro-form__slogan"),introImgForm=document.querySelector(".intro-form__img");mainNavToggle.addEventListener("click",(function(a){a.preventDefault(),mainNavToggle.classList.contains("main-nav__toggle--closed")?(mainNavWrapper.classList.remove("main-nav__wrapper--closed"),mainNavHeader.classList.remove("main-nav__header--closed"),mainNavList.classList.remove("main-nav__list--closed"),mainNavToggle.classList.remove("main-nav__toggle--closed"),mainNavToggle.classList.add("main-nav__toggle--opened"),introSloganForm.classList.remove("intro-form__slogan--closed"),introImgForm.classList.remove("intro-form__img--closed")):(mainNavWrapper.classList.add("main-nav__wrapper--closed"),mainNavHeader.classList.add("main-nav__header--closed"),mainNavList.classList.add("main-nav__list--closed"),mainNavToggle.classList.remove("main-nav__toggle--opened"),mainNavToggle.classList.add("main-nav__toggle--closed"),introSloganForm.classList.add("intro-form__slogan--closed"),introImgForm.classList.add("intro-form__img--closed"))}));