const goTo = id =>
	document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

export const goToForm = () => goTo('form-section');
