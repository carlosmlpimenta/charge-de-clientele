const goTo = id =>
	document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

exports.goToForm = () => goTo('form-section');
