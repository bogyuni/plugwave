
window.addEventListener('load', ()=> {
	var mainSwiper = new Swiper(".main-swiper", {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});

	const grid = document.querySelector('.port-grid');
	const gridWrap = document.querySelector('.port-grid-wrap');

	const msnry = new Masonry(grid, {
		itemSelector: '.grid-item',
		columnWidth: 311,
		gutter: 16
	});

	const portTabButtons = document.querySelectorAll('.btn-port-tab');

	portTabButtons.forEach(button => {
		button.addEventListener('click', () => {
			const filterValue = button.getAttribute('data-filter');
			for (let i = 0; i < 5; i++) {
				gridWrap.classList.remove('type'+i);
			}
			gridWrap.classList.add('type'+filterValue);

			document.querySelectorAll('.grid-item').forEach(item => {
				const itemType = item.getAttribute('data-type');

				if (filterValue == 0) {
					item.classList.remove('hide');
				} else if (itemType.split(', ').includes(filterValue)) {
					item.classList.remove('hide');
				} else {
					item.classList.add('hide');
				}
			});

			msnry.layout();
			AOS.refresh();
		});
	});

	const businessItem = document.querySelectorAll('.business-sec .item-box');
	businessItem.forEach(button => {
		button.addEventListener('click', (e) => {
			for (let i = 0; i < 4; i++) {
				businessItem[i].classList.remove('on');
				businessItem[i].classList.add('off');
			}
			e.currentTarget.classList.remove('off');
			e.currentTarget.classList.add('on');
		});
	});
});
