function getRepos(username) {
	return fetch(`https://api.github.com/users/${username}/repos`)
	.then(response => response.json()).then(data => data);
}

function getUserinfo(username) {
	return fetch(`https://api.github.com/users/${username}`)
	.then(response => response.json()).then(data => data);
}

export function getGitHubUser(username) {
	return Promise.all([getRepos(username), getUserinfo(username)])
	.then((arr) => ({
			repos: arr[0],
			bio: arr[1]
		})
	);
}