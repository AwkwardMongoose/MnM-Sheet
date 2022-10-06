console.log('Loaded')

const tabRadios = $(".tabradio").toArray();
const tabSwitches = $(".tabswitch").toArray();



tabRadios.forEach(tab => {
    tab.addEventListener('change', function() {
        tabSwitches.forEach(swit => {
            if (swit.id != tab.id) {
                swit.checked = false;
            } else {
                swit.checked = true;
            }
        })
    })
})