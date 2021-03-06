export default class Behaviour {
	static nonAjax() {
		return ['goTo'];
	}

	static isNonAjax(behaviour) {
		return Behaviour.nonAjax().includes(behaviour);
	}

	static redirect(trigger, response) {
		window.location.href = response.data.url;
	}

	static reload() {
		window.location.reload(true);
	}

	static goTo(trigger, data) {
		if (trigger.method === 'post') {
			Behaviour.goToPost(trigger, data);
		} else {
			Behaviour.goToGet(trigger, data);
		}
	}

	static goToGet() {
		window.location.href =
			trigger.action +
			'?' +
			Helper.arrayToQueryString(data, trigger.name);
	}

	static goToPost(trigger, data) {
		const form = document.createElement('form');
		document.body.appendChild(form);

		form.method = 'post';
		form.action = trigger.action;

		if (window.csrf_token) {
			Behaviour.input(form, '_token', window.csrf_token);
		}

		for (const value of data) {
			Behaviour.input(form, trigger.name + '[]', value);
		}

		form.submit();
	}

	static input(form, name, value) {
		const input = document.createElement('input');

		input.type = 'hidden';
		input.name = name;
		input.value = value;
		form.appendChild(input);
	}
}
