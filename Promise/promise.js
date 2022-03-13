const getUserById = () => {
	return { name: 'Nguyen Van A', age: 18 };
};

const getUserByIdWithPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				name: 'Nguyen Van A',
				age: 18,
			});
		}, 2000);
	});
};

const user = getUserById();
console.log(user);

const getUrl = (url) => {
	return new Promise(function (resolve, reject) {
		const request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (this.readyState === 4 && this.status == 200) {
				resolve(this.response);
			}
		};
		request.open('GET', url, true);
		request.send();
	});
};

const url = 'https://jsonplaceholder.typicode.com/photos/1';
const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');

btn.addEventListener('click', () => {
	// msg.innerHTML = getUrl();

	getUrl(url)
		.then((response) => {
			const result = response;
			console.log(result);
			msg.innerHTML = result;
		})
		.catch((error) => {
			msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
		});
});
