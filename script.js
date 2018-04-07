//Fetch data from GitHub 
function fetchUserData() {
	var githubURL = "https://api.github.com/users/nehajain8";
	fetch(githubURL).then(response=>response.json()).then(result=>console.log(result));
}