


const busiTabBtn = document.querySelectorAll('.business .btn-tab');
const busiTabCon = document.querySelectorAll('.business .tab-con');

busiTabBtn.forEach(btn => {
	btn.addEventListener('click', (e) => {
		console.log(e.currentTarget.value);
		const num = parseInt(e.currentTarget.value) - 1;
		for (let i = 0; i < busiTabCon.length; i++) {
			busiTabCon[i].classList.remove('on');
		}
		busiTabCon[num].classList.add('on');

		AOS.refresh();
	});
});