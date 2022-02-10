let viewButton = document.getElementById('viewButton');
let counter = 0;
let oldFlag = document.getElementById('HK');
let caption = document.getElementById('HKCaption');

const changeFlag = function () {
    
    
    if (counter === 0) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('UK');
        oldFlag.style.display = "block";

        caption.style.display = 'none';
        caption = document.getElementById('UKCaption');
        caption.style.display = 'block';
    }
    
    if (counter === 1) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('Canada');
        oldFlag.style.display = "block";

        caption.style.display = 'none';
        caption = document.getElementById('canadaCaption');
        caption.style.display = 'block';
    }

    if (counter === 2) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('Aus');
        oldFlag.style.display = 'block';

        caption.style.display = 'none';
        caption = document.getElementById('ausCaption');
        caption.style.display = 'block';
    }

    if (counter === 3) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('NZ');
        oldFlag.style.display = 'block';

        caption.style.display = 'none';
        caption = document.getElementById('NZCaption');
        caption.style.display = 'block';
    }

    if (counter === 4) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('Canada');
        oldFlag.style.display = 'block';

        caption.style.display = 'none';
        caption = document.getElementById('canadaCaption2');
        caption.style.display = 'block';
    }
    if (counter === 5) {
        oldFlag.style.display = 'none';
        oldFlag = document.getElementById('HK');
        oldFlag.style.display = 'block';

        caption.style.display = 'none';
        caption = document.getElementById('HKCaption');
        caption.style.display = 'block';
        counter = -1;
    }

   
    counter = counter + 1;
    //viewButton.style.color = 'red';
}

viewButton.addEventListener('click',changeFlag);