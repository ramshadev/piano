let keyPiano = {
    '1': 'tom-1.mp3',
    '2': 'tom-2.mp3',
    '3': 'tom-3.mp3',
    '4': 'tom-4.mp3',
    '5': 'tom-5.mp3',
    '6': 'tom-6.mp3',
    '7': 'tom-7.mp3',
    '8': 'tom-8.mp3',
    '9': 'tom-9.mp3',
    '10': 'tom-10.mp3',
    '11': 'tom-11.mp3',
    '12': 'tom-12.mp3',
    '13': 'tom-13.mp3',
    '14': 'tom-14.mp3',
    '15': 'tom-15.mp3',
    '16': 'tom-16.mp3',
    '17': 'tom-17.mp3',

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