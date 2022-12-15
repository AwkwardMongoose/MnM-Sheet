const tabRadios = $(".tabradio").toArray();
const tabSwitches = $(".tabswitch").toArray();
const inputValues = $('input').toArray();

// UPDATE INPUT MACROS
inputValues.forEach(el => {
    if (el.name.includes('attr_')) {
        el.title = "@{"+el.name.replace('attr_','')+"}";
        el.id = el.name.replace('attr_','');
        valReplacer(el)
        el.addEventListener('change', function() {
            valReplacer(this)
            if (this.type == 'number') {
                this.value = Math.floor(parseInt(this.value));
                valReplacer(this)
            }
        })
    }
    el.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            el.blur()
        }
      });
})

function flooring(macro,id) {
    let el = macro;
    let mod = false;
    if (el.startsWith('+')) {
        el = el.replace('+','');
        mod = true;
    }
    if (el.includes('floor')) {
        let floor = macro.match(/floor\[(.*?)\]/g);
        floor.forEach(fl => {
            let floor2 = fl.match(/floor\[(.*?)\]/)[1];
            let floorCut = floor2.match(/(\@([^}]+)\})/g);
            if (floorCut != null) {
                let floorCut1 = floorCut[0].match(/\{([^}]+)\}/)[1];
                let floored = Math.floor(eval(floor2.replace(floorCut,macroReplacer(floorCut1))))
                el = el.replace(fl,floored)            
            } else {
                el = el.replace(fl,Math.floor(eval(floor2)));
            }
        })
        return macroSplitter(el,id,mod);
    } else {
        return macroSplitter(el,id,mod);
    }
}

function macroReplacer(macro) {
    let valRef = document.getElementsByName('attr_'+macro+'');
    return parseInt(valRef[0].value)
}

function macroSplitter(macro,id,mod) {
    let el = macro;
    let cut = macro.match(/(\@([^}]+)\})/g);
    if (cut != null) {
        cut.forEach(cl => {
            let cut2 = cl.match(/\{([^}]+)\}/)[1];
            let ind = cut.indexOf(cl);
            el = el.replace(cut[ind],macroReplacer(cut2))
        })
        if (mod == true && eval(el) >= 0) {
            console.log(el)
            return '+'+eval(el)
        } else {
            return eval(el)
        }
    } else {
        if (mod == true && eval(el) >= 0) {
            return '+'+eval(el)
        } else {
            return eval(el)
        }
    }
}

function macroSolver(el) {
    let macro = el.dataset.macro;
    let id = el.id;
    return flooring(macro,id)
}

function valReplacer(el) {
    if (el.name.includes('attr') == true) {
        let attrName = el.name.replace('attr_','')
        inputValues.forEach(el2 => {
            let macro = el2.dataset.macro;
            if (macro && macro.includes('@{'+attrName+'}')) {
                el2.value = macroSolver(el2);
                valReplacer(el2)
            }
        })
    }
}

// TAB SWITCHING
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

console.log('Main Scripts Loaded')