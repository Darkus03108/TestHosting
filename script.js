const apiKey = "-H4NPAMWXj05O1ViSwfoQIYi3WCMd6XdZcWcs0DSSho"; 

async function fetchRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const link = document.querySelector('#image-download-button a');
        link.setAttribute('href', `${data.links.download}`)
        link.setAttribute('download', `${data.alternative_slugs.en}`)
        document.body.style.backgroundImage = `url(${data.urls.full})`;

        function addCredits(){
            var creditsTag = `
               <img src="${data.user.profile_image.large}" alt="" id="creditsAvatar" height="50px" width="50px">
                <a href="${data.user.links.html}" ><p class="creditsName">${data.user.name}</p></a>
            `;

            document.querySelector(".credits").innerHTML += creditsTag;
        }
        addCredits();
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

fetchRandomImage();

function digiClock(){
    var now = new Date();
    var seconds = now.getSeconds();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var div = `
        <span class="digiTime">${hours}:${minutes}:${seconds}</span>
    `;

    document.querySelector(".digiClock").innerHTML = div;


}
function setClock() {
    var now = new Date();
    var seconds = now.getSeconds();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    const secondsDeg = seconds*6;
    const minutesDeg = 6*minutes;
    const hoursDeg = 60*hours + minutes/2;

    document.getElementById('sec').style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById('min').style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setClock, 1000);
setInterval(digiClock, 1000);
digiClock();
setClock();

document.querySelector("#icon-btn").onclick = function(){
    document.querySelector(".accountInfo").classList.toggle('active');
    document.querySelector(".infoContent").classList.toggle('active');
    document.querySelector(".accountManage").classList.toggle('active');
    document.querySelector(".pfp-img").classList.toggle('active');
    document.querySelector(".manageAccount-txt").classList.toggle('active');
}



function rmplaceholder(){
    var searchBox = document.getElementById("SearchBox");
    searchBox.placeholder = " ";
}



function hover(){
   document.querySelector(".images").classList.add('hovered');
}
function nohover(){
    document.querySelector(".images").classList.remove('hovered');
}

function noplaceholder(){
    document.querySelector("#SearchBox").setAttribute('placeholder', '');
}
function yesplaceholder(){
    document.querySelector("#SearchBox").setAttribute('placeholder', 'Enter your query here...');
}
document.querySelector("#SearchBox").addEventListener('focus', noplaceholder);
document.querySelector("#SearchBox").addEventListener('blur', yesplaceholder);
