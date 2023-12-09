//need to make the glyph readable
function deHTML(str){
    const txtArea = document.createElement("textarea");
    txtArea.innerHTML= str;
    return txtArea.value
}

function Shuffle(list) {
    var currentIndex = list.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }
    return list;
}

function Grid(tiles) {
    return (
        <div class="tile-grid">
            {tiles.map(tile => { return <Tile tile={tile} key={tile.id} /> })}
        </div>
    )
}

//load the glyph and display 
function Tile(tile) {
    const [select, setSelect] = useState(false);

    return (
        //when clicked, the tile will show it has been selected
        <div class={`tile ${select ? "select" : ""}`} onclick={() => setSelect(!select)}>
            <div class="glyph">
                {deHTML(tile.glyph)}
            </div>
            <div class="answer">
                {tile.translit}
                <div class="help">
                    <div class="sound">{tile.sound}</div>
                    {card.trad}
                </div>
            </div>
        </div>
    )
}