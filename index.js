let keyPiano = {
    '1': 'img/tom-1.mp3',
    '2': 'img/tom-2.mp3',
    '3': 'img/tom-3.mp3',
    '4': 'img/tom-4.mp3',
    '5': 'img/tom-5.mp3',
    '6': 'img/tom-6.mp3',
    '7': 'img/tom-7.mp3',
    '8': 'img/tom-8.mp3',
    '9': 'img/tom-9.mp3',
    '10': 'img/tom-10.mp3',
    '11': 'img/tom-11.mp3',
    '12': 'img/tom-12.mp3',
    '13': 'img/tom-13.mp3',
    '14': 'img/tom-14.mp3',
    '15': 'img/tom-15.mp3',
    '16': 'img/tom-16.mp3',
    '17': 'img/tom-17.mp3',

};
document.addEventListener('keydown',(Event) => playpiano(Event.key));
function playpiano(key){
    Audio = new Audio(keyPiano[key]);
    Audio.play();
    let keyClick = document.querySelector('[data-key="${key}"]');
    
    keyClick.classList.add('active');
    const removeActive = setInterval(()=>{
        keyClick.classList.remove('active');
    },500);
}
let keys = document.querySelectorAll('.');
keys.forEach(key => {
    key.addEventListener('click', (Event) =>{
        let kayClick = key.dataset.key;
        playpiano(kayClick);
    })
})
