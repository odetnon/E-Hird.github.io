(() => {
	document.addEventListener("DOMContentLoaded", async (event) => {
		await new Promise(resolve => setTimeout(resolve, 400));

		const main_content = document.querySelector('main#site-content')

		main_content.style.opacity = "";
		await new Promise(resolve => setTimeout(resolve, 200));
		main_content.style.filter = "";
		await new Promise(resolve => setTimeout(resolve, 400));
		main_content.style.transition = "0";
	})
})();

