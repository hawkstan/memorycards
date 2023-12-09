const gameContainer = document.getElementById("gameContainer");
const glyphColumn = document.getElementById("glyphColumn");
const soundColumn = document.getElementById("soundColumn");
const checkButton = document.querySelector(".checkButton");

const category = document.body.dataset.category;

let pairs;

// import correct list based on category
switch (category) {
    case "one":
        import("./lists/listone.js")
            .then(module => {
                pairs = module.default;
                setupGame();
            })
            .catch(error => console.error(error));
        break;
    case "two":
        import("./lists/listtwo.js")
            .then(module => {
                pairs = module.default;
                setupGame();
            })
            .catch(error => console.error(error));
        break;
    case "three":
        import("./lists/listthree.js")
            .then(module => {
                pairs = module.default;
                setupGame();
            })
            .catch(error => console.error(error));
        break;
    case "words":
            import("./lists/listwords.js")
                .then(module => {
                    pairs = module.default;
                    setupGame();
                })
                .catch(error => console.error(error));
            break;
    default:
        console.error("Invalid category specified.");
        break;
}

// deHTML the mess that is the glyph value
// why did i code it like that ? wish i'd noted my reasons but it works
// remember to add them if i ever remember
function deHTML(str){
    const txtArea = document.createElement("textarea");
    txtArea.innerHTML= str;
    return txtArea.value
}

// separate the data from the pair to create two tiles
function setupGame() {
    pairs.forEach((pair, index) => {
        createGlyphTile(glyphColumn, deHTML(pair.glyph), index, "glyph");
        createInfoTile(soundColumn, pair.translit, pair.sound, pair.trad, index, "sound");
    });
}

function createGlyphTile(column, glyph, index) {
    const tile = document.createElement("div");
    tile.classList.add("tile", "glyph");
    tile.dataset.index = index;
    tile.dataset.type = "glyph";
    tile.textContent = glyph;
    column.appendChild(tile);
}

function createInfoTile(column, translitValue, soundValue, tradValue, index) {
    const tile = document.createElement("div");
    tile.classList.add("tile", "infoTile");
    tile.dataset.index = index;
    tile.dataset.type = "info";
    const translit = document.createElement("p");
    translit.textContent = `${translitValue}`;
    const sound = document.createElement("p");
    sound.classList.add("sound");
    sound.textContent = `${soundValue}`;
    const trad = document.createElement("p");
    trad.classList.add("trad");
    trad.textContent = `${tradValue}`;
    tile.appendChild(translit);
    tile.appendChild(sound);
    tile.appendChild(trad);
    column.appendChild(tile);
}

// adapt old shuffle function, need to keep a way to check if pair

// highlight selected tile and mark when paired

// check all tiles and say if :
// some tiles are unmatched and need to be paired
// errors made, unselect incorrect tiles but leave correct matched
// all correct, congrats