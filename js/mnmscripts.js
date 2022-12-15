// SIZE-BASED MODIFIERS
const sizeVal = document.getElementById('size');

sizeMods(sizeVal.value)
sizeVal.addEventListener('change',function() {
    sizeMods(sizeVal.value)
})

function sizeMods(size) {
    let sizecombat = document.getElementById('sizecombat');
    let sizegrapple = document.getElementById('sizegrapple');
    let sizestealth = document.getElementById('sizestealth');
    let sizeintimidate = document.getElementById('sizeintimidate');
    let sizecarrylarge = document.getElementById('sizecarrylarge');
    let sizecarrysmall = document.getElementById('sizecarrysmall');
    switch(sizeVal.value) {
        case 'awe':
            sizecombat.value = '-12';
            sizegrapple.value = '20';
            sizestealth.value = '-20';
            sizeintimidate.value = '10';
            sizecarrylarge.value = '25';
            sizecarrysmall.value = '1';
        break;
        case 'col':
            sizecombat.value = '-8';
            sizegrapple.value = '16';
            sizestealth.value = '-16';
            sizeintimidate.value = '8';
            sizecarrylarge.value = '20';
            sizecarrysmall.value = '1';
        break;
        case 'gar':
            sizecombat.value = '-4';
            sizegrapple.value = '12';
            sizestealth.value = '-12';
            sizeintimidate.value = '6';
            sizecarrylarge.value = '15';
            sizecarrysmall.value = '1';
        break;
        case 'huge':
            sizecombat.value = '-2';
            sizegrapple.value = '8';
            sizestealth.value = '-8';
            sizeintimidate.value = '4';
            sizecarrylarge.value = '10';
            sizecarrysmall.value = '1';
        break;
        case 'lrg':
            sizecombat.value = '-1';
            sizegrapple.value = '4';
            sizestealth.value = '-4';
            sizeintimidate.value = '2';
            sizecarrylarge.value = '5';
            sizecarrysmall.value = '1';
        break;
        case 'med':
            sizecombat.value = '0';
            sizegrapple.value = '0';
            sizestealth.value = '0';
            sizeintimidate.value = '0';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '1';
        break;
        case 'sml':
            sizecombat.value = '1';
            sizegrapple.value = '-4';
            sizestealth.value = '4';
            sizeintimidate.value = '-2';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '0.75';
        break;
        case 'tiny':
            sizecombat.value = '2';
            sizegrapple.value = '-8';
            sizestealth.value = '8';
            sizeintimidate.value = '-4';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '0.5';
        break;
        case 'dim':
            sizecombat.value = '4';
            sizegrapple.value = '-12';
            sizestealth.value = '12';
            sizeintimidate.value = '-6';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '0.25';
        break;
        case 'fine':
            sizecombat.value = '8';
            sizegrapple.value = '-16';
            sizestealth.value = '16';
            sizeintimidate.value = '-8';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '0.125';
        break;
        case 'min':
            sizecombat.value = '12';
            sizegrapple.value = '-20';
            sizestealth.value = '20';
            sizeintimidate.value = '-10';
            sizecarrylarge.value = '0';
            sizecarrysmall.value = '0.0625';
        break;
    }
    inputValues.forEach(el => {
        valReplacer(el)
    })
}


console.log('MnM Scripts Loaded')