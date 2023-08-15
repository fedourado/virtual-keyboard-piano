const whiteKeys = document.querySelectorAll('.branca');
const blackKeys = document.querySelectorAll('.preta');


//CODE COOLOR

whiteKeys.forEach((branca) =>
    branca.addEventListener("click", (event) => {
        console.log(event.currentTarget.textContent);
        console.log("Pressionada!")
        branca.style.backgroundColor = "#969595";

    })
);

whiteKeys.forEach((branca) =>
  branca.addEventListener('mouseout', (event) => {
  branca.style.backgroundColor = '#fff'
  
    })
);

blackKeys.forEach((preta) =>
  preta.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent);
    console.log("Pressionada!");
    preta.style.backgroundColor = "#070707";
                 
  })                 
);

blackKeys.forEach((preta) =>
  preta.addEventListener('mouseout', (event) => {
  preta.style.backgroundColor = '#131313'
  
    })
);



// CODE SOUND WHITE KEYS
// CODE SOUND - BASS

function playAudio(){
    var audio1 = document.getElementById('c-bass');
    audio1.play();
}

function playAudio2(){
    var audio2 = document.getElementById('d-bass');
    audio2.play();
}

function playAudio3(){
    var audio3 = document.getElementById('e-bass');
    audio3.play();
}

function playAudio4(){
    var audio4 = document.getElementById('f-bass');
    audio4.play();
}

function playAudio5(){
    var audio5 = document.getElementById('g-bass');
    audio5.play();
}

const key_C_bass = document.querySelector('#c-bass-key');
key_C_bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAudio()

});

key_C_bass.addEventListener("keydown", (event) => {
    console.log(event.key);

    if(event.key === "a") {
        console.log("Playing-keyboard")
        playAudio();
    }

});


const key_D_bass = document.querySelector('#d-bass-key');
key_D_bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAudio2()

});

const key_E_bass = document.querySelector('#e-bass-key');
key_E_bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAudio3()

});

const key_F_bass = document.querySelector('#f-bass-key');
key_F_bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAudio4()

});


const key_G_bass = document.querySelector('#g-bass-key');
key_G_bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAudio5()

});


// CODE SOUND - MEDIUM

function playMedium(){
    var medium1 = document.getElementById('a-medium');
    medium1.play();
}

function playMedium2(){
    var medium2 = document.getElementById('b-medium');
    medium2.play();
}

function playMedium3(){
    var medium3 = document.getElementById('c-medium');
    medium3.play();
}

function playMedium4(){
    var medium4 = document.getElementById('d-medium');
    medium4.play();
}

function playMedium5(){
    var medium5 = document.getElementById('e-medium');
    medium5.play();
}

function playMedium6(){
    var medium6 = document.getElementById('f-medium');
    medium6.play();
}

function playMedium7(){
    var medium7 = document.getElementById('g-medium');
    medium7.play();
}

const key_A_medium = document.querySelector('#a-medium-key');
key_A_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium()

});

const key_B_medium = document.querySelector('#b-medium-key');
key_B_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium2()

});

const key_C_medium = document.querySelector('#c-medium-key');
key_C_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium3()

});

const key_D_medium = document.querySelector('#d-medium-key');
key_D_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium4()

});

const key_E_medium = document.querySelector('#e-medium-key');
key_E_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium5()

});

const key_F_medium = document.querySelector('#f-medium-key');
key_F_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium6()

});

const key_G_medium = document.querySelector('#g-medium-key');
key_G_medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMedium7()

});


// CODE SOUND - MEDIUM-TREBLE

function playMediumTreble(){
    var mediumTreble1 = document.getElementById('a-medium-treble');
    mediumTreble1.play();
}

function playMediumTreble2(){
    var mediumTreble2 = document.getElementById('b-medium-treble');
    mediumTreble2.play();
}

function playMediumTreble3(){
    var mediumTreble3 = document.getElementById('c-medium-treble');
    mediumTreble3.play();
}

function playMediumTreble4(){
    var mediumTreble4 = document.getElementById('d-medium-treble');
    mediumTreble4.play();
}

function playMediumTreble5(){
    var mediumTreble5 = document.getElementById('e-medium-treble');
    mediumTreble5.play();
}

function playMediumTreble6(){
    var mediumTreble6 = document.getElementById('f-medium-treble');
    mediumTreble6.play();
}

function playMediumTreble7(){
    var mediumTreble7 = document.getElementById('g-medium-treble');
    mediumTreble7.play();
}


const key_A_mediumTreble = document.querySelector('#a-medium-treble-key');
key_A_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble()

});

const key_B_mediumTreble = document.querySelector('#b-medium-treble-key');
key_B_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble2()

});

const key_C_mediumTreble = document.querySelector('#c-medium-treble-key');
key_C_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble3()

});

const key_D_mediumTreble = document.querySelector('#d-medium-treble-key');
key_D_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble4()

});

const key_E_mediumTreble = document.querySelector('#e-medium-treble-key');
key_E_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble5()

});

const key_F_mediumTreble = document.querySelector('#f-medium-treble-key');
key_F_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble6()

});

const key_G_mediumTreble = document.querySelector('#g-medium-treble-key');
key_G_mediumTreble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playMediumTreble7()

});


// CODE SOUND - TREBLE

function playTreble(){
    var treble1 = document.getElementById('a-treble');
    treble1.play();
}

function playTreble2(){
    var treble2 = document.getElementById('b-treble');
    treble2.play();
}

function playTreble3(){
    var treble3 = document.getElementById('c-treble');
    treble3.play();
}

function playTreble4(){
    var treble4 = document.getElementById('d-treble');
    treble4.play();
}

function playTreble5(){
    var treble5 = document.getElementById('e-treble');
    treble5.play();
}

function playTreble6(){
    var treble6 = document.getElementById('f-treble');
    treble6.play();
}

function playTreble7(){
    var treble7 = document.getElementById('g-treble');
    treble7.play();
}


const key_A_Treble = document.querySelector('#a-treble-key');
key_A_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble()

});

const key_B_Treble = document.querySelector('#b-treble-key');
key_B_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble2()

});

const key_C_Treble = document.querySelector('#c-treble-key');
key_C_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble3()

});

const key_D_Treble = document.querySelector('#d-treble-key');
key_D_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble4()

});

const key_E_Treble = document.querySelector('#e-treble-key');
key_E_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble5()

});

const key_F_Treble = document.querySelector('#f-treble-key');
key_F_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble6()

});

const key_G_Treble = document.querySelector('#g-treble-key');
key_G_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTreble7()

});


// CODE SOUND - TREBLE-TINY

function playTrebleTiny(){
    var trebleTiny1 = document.getElementById('a-treble-tiny');
    trebleTiny1.play();
}

function playTrebleTiny2(){
    var trebleTiny2 = document.getElementById('b-treble-tiny');
    trebleTiny2.play();
}

const key_A_TrebleTiny = document.querySelector('#a-treble-tiny-key');
key_A_TrebleTiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTrebleTiny()

});

const key_B_TrebleTiny = document.querySelector('#b-treble-tiny-key');
key_B_TrebleTiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playTrebleTiny2()

});


// CODE SOUND BLACK KEYS

// BLACK KEYS - BASS

function playCS_Bass(){
    var CSBass = document.getElementById('cs-bass');
    CSBass.play();
}

const key_CS_Bass = document.querySelector('#cs-bass-key');
key_CS_Bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playCS_Bass()

});

function playDS_Bass(){
    var DSBass = document.getElementById('ds-bass');
    DSBass.play();
}

const key_DS_Bass = document.querySelector('#ds-bass-key');
key_DS_Bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playDS_Bass()

});

function playFS_Bass(){
    var FSBass = document.getElementById('fs-bass');
    FSBass.play();
}

const key_FS_Bass = document.querySelector('#fs-bass-key');
key_FS_Bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playFS_Bass()

});

function playGS_Bass(){
    var GSBass = document.getElementById('gs-bass');
    GSBass.play();
}

const key_GS_Bass = document.querySelector('#gs-bass-key');
key_GS_Bass.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playGS_Bass()

});


// BLACK KEYS - MEDIUM

function playAS_Medium(){
    var ASMedium = document.getElementById('as-medium');
    ASMedium.play();
}

const key_AS_Medium = document.querySelector('#as-medium-key');
key_AS_Medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAS_Medium()

});


function playCS_Medium(){
    var CSMedium = document.getElementById('cs-medium');
    CSMedium.play();
}

const key_CS_Medium = document.querySelector('#cs-medium-key');
key_CS_Medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playCS_Medium()

});


function playDS_Medium(){
    var DSMedium = document.getElementById('ds-medium');
    DSMedium.play();
}

const key_DS_Medium = document.querySelector('#ds-medium-key');
key_DS_Medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playDS_Medium()

});

function playFS_Medium(){
    var FSMedium = document.getElementById('fs-medium');
    FSMedium.play();
}

const key_FS_Medium = document.querySelector('#fs-medium-key');
key_FS_Medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playFS_Medium()

});


function playGS_Medium(){
    var GSMedium = document.getElementById('gs-medium');
    GSMedium.play();
}

const key_GS_Medium = document.querySelector('#gs-medium-key');
key_GS_Medium.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playGS_Medium()

});


// BLACK KEYS - TREBLE

function playAS_Treble(){
    var ASTreble = document.getElementById('as-treble');
    ASTreble.play();
}

const key_AS_Treble = document.querySelector('#as-treble-key');
key_AS_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAS_Treble()

});


function playCS_Treble(){
    var CSTreble = document.getElementById('cs-treble');
    CSTreble.play();
}

const key_CS_Treble = document.querySelector('#cs-treble-key');
key_CS_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playCS_Treble()

});


function playDS_Treble(){
    var DSTreble = document.getElementById('ds-treble');
    DSTreble.play();
}

const key_DS_Treble = document.querySelector('#ds-treble-key');
key_DS_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playDS_Treble()

});


function playFS_Treble(){
    var FSTreble = document.getElementById('fs-treble');
    FSTreble.play();
}

const key_FS_Treble = document.querySelector('#fs-treble-key');
key_FS_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playFS_Treble()

});


function playGS_Treble(){
    var GSTreble = document.getElementById('gs-treble');
    GSTreble.play();
}

const key_GS_Treble = document.querySelector('#gs-treble-key');
key_GS_Treble.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playGS_Treble()

});


// BLACK KEYS - TREBLE

function playAS_Treble_Tiny(){
    var ASTrebleTiny = document.getElementById('as-treble-tiny');
    ASTrebleTiny.play();
}

const key_AS_Treble_Tiny = document.querySelector('#as-treble-tiny-key');
key_AS_Treble_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAS_Treble_Tiny()

});


function playCS_Treble_Tiny(){
    var CSTrebleTiny = document.getElementById('cs-treble-tiny');
    CSTrebleTiny.play();
}

const key_CS_Treble_Tiny = document.querySelector('#cs-treble-tiny-key');
key_CS_Treble_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playCS_Treble_Tiny()

});






function playDS_Treble_Tiny(){
    var DSTrebleTiny = document.getElementById('ds-treble-tiny');
    DSTrebleTiny.play();
}

const key_DS_Treble_Tiny = document.querySelector('#ds-treble-tiny-key');
key_DS_Treble_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playDS_Treble_Tiny()

});


function playFS_Treble_Tiny(){
    var FSTrebleTiny = document.getElementById('fs-treble-tiny');
    FSTrebleTiny.play();
}

const key_FS_Treble_Tiny = document.querySelector('#fs-treble-tiny-key');
key_FS_Treble_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playFS_Treble_Tiny()

});


function playGS_Treble_Tiny(){
    var GSTrebleTiny = document.getElementById('gs-treble-tiny');
    GSTrebleTiny.play();
}

const key_GS_Treble_Tiny = document.querySelector('#gs-treble-tiny-key');
key_GS_Treble_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playGS_Treble_Tiny()

});


// BLACK KEYS - TREBLE-TINY-TINY

function playAS_Treble_Tiny_Tiny(){
    var ASTrebleTinyTiny = document.getElementById('as-treble-tiny-tiny');
    ASTrebleTinyTiny.play();
}

const key_AS_Treble_Tiny_Tiny = document.querySelector('#as-treble-tiny-tiny-key');
key_AS_Treble_Tiny_Tiny.addEventListener("click", (event) => {
    console.log(event.currentTarget.textContent)
    console.log("Playing!")
    playAS_Treble_Tiny_Tiny()

});
