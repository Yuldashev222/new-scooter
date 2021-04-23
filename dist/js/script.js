var hamburger = document.querySelector(".hamburger-button");
var nav = document.querySelector(".nav");
var link = document.querySelector(".link");
var body = document.querySelector("body");
var FAQsButton = document.querySelector(".faqs__button--first");
var FAQsButton_second = document.querySelector(".faqs__button--second");
var FAQsButton_third = document.querySelector(".faqs__button--third");
var FAQsButton_fourth = document.querySelector(".faqs__button--fourth");
var FAQsButton_fifth = document.querySelector(".faqs__button--fifth");
var FAQsButton_sixth = document.querySelector(".faqs__button--sixth");

hamburger.addEventListener("click", function() {
	nav.classList.toggle('nav--active');
	link.classList.toggle('link--active');
	hamburger.classList.toggle("hamburger-button--active");
	body.classList.toggle("lock");
});

FAQsButton.addEventListener("click", function() {
	FAQsButton.classList.toggle("faqs__button--active");
});

FAQsButton_second.addEventListener("click", function() {
	FAQsButton_second.classList.toggle("faqs__button--active");
});

FAQsButton_third.addEventListener("click", function() {
	FAQsButton_third.classList.toggle("faqs__button--active");
});

FAQsButton_fourth.addEventListener("click", function() {
	FAQsButton_fourth.classList.toggle("faqs__button--active");
});

FAQsButton_fifth.addEventListener("click", function() {
	FAQsButton_fifth.classList.toggle("faqs__button--active");
});

FAQsButton_sixth.addEventListener("click", function() {
	FAQsButton_sixth.classList.toggle("faqs__button--active");
});

