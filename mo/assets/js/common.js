window.addEventListener('load', () => {
	AOS.init({
		duration: 600,
		easing: 'ease-out-cubic',
		offset: 200,
	});


	const gnbBtnOpen = document.querySelector('.btn-gnb-open');
	const gnbBtnClose = document.querySelector('.btn-gnb-close');
	const GNB = document.querySelector('.gnb-wrap');

	gnbBtnOpen.addEventListener('click', ()=>{
		GNB.classList.add('on');
	});
	gnbBtnClose.addEventListener('click', ()=>{
		GNB.classList.remove('on');
	})

	const btnTop = document.querySelector('.btn-top');
	btnTop.addEventListener('click', () => {
		window.scrollTo({
			top:0,
			behavior: 'smooth'
		})
	});

});