const textCon = document.querySelector('.text-con')
const words = textCon.getAttribute("data-text").split(",")
const sleep  = (milli) =>{ return new Promise(res => setTimeout(res, milli))}
const options = {
    wordSpeed: 3, 
    charSpeed:1, 
    charBackWordSpeed: .6,
    breakBetweenWords: 1,
}
async function loop(){


    
        for ( let word of words ){

            let chars = word.split("")
            chars = chars.map((char)=>char.replaceAll(" ", " &ThinSpace;"))
            
            for (let char of chars) {
                await sleep(100 * options.charSpeed)
                textCon.innerHTML += char
            }

            await sleep(1000 * options.wordSpeed)

            for (let char of chars.reverse()) {
                await sleep(100 * options.charBackWordSpeed)
                textCon.innerHTML = textCon.innerText.substring(0, textCon.innerText.length-1);
            }
            await sleep(100 * options.breakBetweenWords)
            
        };

        // await sleep(2000)
        loop()
}
loop()