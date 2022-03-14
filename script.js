const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL2 = 'https://dog.ceo/api/breeds/image/random';
const dogBtn = document.getElementById('change_dog');
const catBtn = document.getElementById('change_cat');
const allBTN = document.getElementById('change_all');

/* Cat API */
const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

/* Dog API */
const getDog = async () => {
    const data = await fetch(BASE_URL2)
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return data.message;
};

const loadImg2 = async () => {
    const dogImg = document.getElementById('dog');
    dogImg.src = await getDog();
}

dogBtn.addEventListener('click', loadImg2);

loadImg2();

/* Change All Button */
const loadImg3 = async () =>{
    const dogImg = document.getElementById('dog');
    const catImg = document.getElementById('cat');

    dogImg.src = await getDog();
    catImg.src = await getCats();
}

allBTN.addEventListener('click', loadImg3);
