import scenary from './ooty.jpg'

function addImage() {
    const sampleImage = document.createElement('img');
    sampleImage.alt = 'Ooty';
    sampleImage.width = 300;
    sampleImage.src = scenary;

    const body = document.querySelector('body');

    body.appendChild(sampleImage);

}

export default addImage;