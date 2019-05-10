const inputValue = document.getElementById("search");

const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
// fro github registration of a new app
const client_id = "3f9e4c2fd28afdb99aac";
const client_secret = "8ba7a9d434ba8f71cfa94f7bb3663c53028e7b51";

//this replaces AJAX async

const fetchingUser = async () => {
const c = await fetch(`https://api.github.com/users/${inputValue.value}?client_id=${client_id}&client_secret=${client_secret}`);
//const c1= await fetch("https://api.github.com/users/persyman?client_id=c&client_secret=");

	const datafetched = await c.json();
	return {datafetched}
};


const showUser =() =>{

	fetchingUser().then((response) => {
		console.log(response);


		nameContainer.innerHTML = `Name: <span class="main__profile-value">${response.datafetched.name}</span>`;
        unContainer.innerHTML = `Company: <span class="main__profile-value">${response.datafetched.company}</span>`;
        reposContainer.innerHTML = `Organization URL: <span class="main__profile-value">${response.datafetched.organizations_url}</span>`;
        urlContainer.innerHTML = `EMAIL: <span class="main__profile-value">${response.datafetched.email}</span>`;
	})
};


searchButton.addEventListener("click", () =>{
	//console.log("Hello There Persy!Set up is ready"); testing environment readness
	showUser();
	//console.log(inputValue.value); this was to test taking input value
})