const tabBtn = document.querySelectorAll('.btn-tab');
const tabCon = document.querySelectorAll('.tab-con');

tabBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		const num = parseInt(e.currentTarget.value) - 1;
		for (let i = 0; i < tabCon.length; i++) {
			tabBtn[i].classList.remove('on');
			tabCon[i].classList.remove('on');
		}
		tabCon[num].classList.add('on');
		btn.classList.add('on');

		AOS.refresh();
	});
});


const newsContent = document.querySelector('.news');
if (newsContent != null) {
	const newsTitle = newsContent.querySelectorAll('.news-wrap .tit-wrap');
	const newsLists = newsContent.querySelectorAll('.news-wrap .con-wrap');

	newsTitle.forEach(tit => {
		tit.addEventListener('click', () => {
			const hasClass = tit.nextElementSibling.classList.contains('on');
			if (!hasClass) {
				for (let i = 0; i < newsTitle.length; i++) {
					newsTitle[i].classList.remove('on');
					newsLists[i].classList.remove('on');
				}
				tit.classList.add('on');
				tit.nextElementSibling.classList.add('on');
			} else {
				tit.classList.remove('on');
				tit.nextElementSibling.classList.remove('on');
			}
		});
	});


}