'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('.navbar'),
		menuList = document.querySelector('.navbar__list'),
		menuItems = document.querySelectorAll('.navbar__link'),
		navbarBtn = document.querySelector('.navbar__btn'),
		labels = document.querySelectorAll('.form__label'),
		signupSection = document.querySelector('.singup-form'),
		humburgerBtn = document.querySelector('.navbar__humburger-block');

	document.addEventListener('scroll', () => {
		if (scrollY > 0) {
			addClass(navbar, 'active');
			addClass(navbarBtn, 'active');
		} else {
			removeClass(navbar, 'active');
			removeClass(navbarBtn, 'active');
		}
	});

	humburgerBtn.addEventListener('click', () => {
		humburgerBtn.classList.toggle('active');
		menuList.classList.toggle('active');
		document.body.classList.toggle('hidden');
	});

	for (let i = 0; i < menuItems.length; i++) {
		let items = menuItems[i];
		items.addEventListener('click', switchMenu);
	}
	signupSection.addEventListener('click', (event) => {
		const target = event.target;
		const targetId = target.dataset.id;
		if (target.tagName === 'INPUT' && target.classList.contains('input') || target.tagName === 'DIV' && target.classList.contains('form__blocks')) {
			removeAllClasses(labels, 'active');
			labels.forEach(label => {
				const labelId = label.getAttribute('data-id');
				if (labelId === targetId) {
					label.classList.add('active');
				}
			});
		} else {
			removeAllClasses(labels, 'active');
		}
	});

	function switchMenu(event) {
		if (event.target.tagName === 'A') {
			removeAllClasses(menuItems, 'active');
			removingClasses();
			event.target.classList.add('active');
		} else {
			removeAllClasses(menuItems, 'active');
			removingClasses();
		}
	}
	
	function removeAllClasses(name, className) {
		for (let i = 0; i < name.length; i++) {
			name[i].classList.remove(className);
		}
	}

	function removeClass(name, className) {
		name.classList.remove(className)
	}
	function addClass(name, className) {
		name.classList.add(className)
	}
	function removingClasses() {
		menuList.classList.remove('active');
		humburgerBtn.classList.remove('active');
		document.body.classList.remove('hidden');
	}
});