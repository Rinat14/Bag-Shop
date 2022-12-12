'use strict';

function filter() {
	const filterCategoriesList = document.querySelector('.filter__flt-list'),
		filterCategoriesItems = document.querySelectorAll('.filter__flt-item'),
		filterImgList = document.querySelectorAll('.filter__img-list');
	
	filterCategoriesList.addEventListener('click', (event) => {
		const targetId = event.target.dataset.category;
		const target = event.target;
		
		if (targetId !== undefined || targetId !== null && event.target.tagName === 'LI') {
			filterCategoriesItems.forEach(item => { item.classList.remove('active') });
			target.classList.add('active');

			switch (targetId) {
				case 'Water resistant':
					getImgList(targetId);
					break;
				case 'Charging system':
					getImgList(targetId);
					break;
				case 'Artificial leather':
					getImgList(targetId);
					break;
				case 'Modern clothes':
					getImgList(targetId);
					break;
				default: alert('Something went wrong');
					break;
			}
		}
	});

	function getImgList(getAttribute) {
		filterImgList.forEach(item => {
			const itemAttribute = item.getAttribute('data-list');
			if (itemAttribute === getAttribute) {
				item.style.display = 'flex';
			} else {
				item.style.display = 'none';
			}
		});
	}
}

filter();