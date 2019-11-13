const body = document.querySelector('body');
body.style.display = ('flex');
body.style.justifyContent = ('center');
body.style.alignItems = ('center');
body.style.height = ('100vh');
console.log(body);


const firstDiv = document.createElement('div');
body.appendChild(firstDiv);
firstDiv.style.display = ('flex');
firstDiv.style.justifyContent = ('center');
firstDiv.style.alignItems = ('center');
firstDiv.style.width = ('300px');
firstDiv.style.height = ('300px');
firstDiv.style.backgroundColor = ('#5cacef');
console.log(firstDiv);

const secondDiv = document.createElement('div');
firstDiv.appendChild(secondDiv);
secondDiv.style.display = ('flex');
secondDiv.style.justifyContent = ('center');
secondDiv.style.alignItems = ('center');
secondDiv.style.width = ('250px');
secondDiv.style.height = ('250px');
secondDiv.style.backgroundColor = ('#eab83d');
console.log(secondDiv);

const thirdDiv = document.createElement('div');
secondDiv.appendChild(thirdDiv);
thirdDiv.style.width = ('200px');
thirdDiv.style.height = ('200px');
thirdDiv.style.backgroundColor = ('#8a9517');
console.log(thirdDiv);