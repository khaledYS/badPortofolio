const toType = document.querySelectorAll('.typed-lib')


toType.forEach((element) => {
    
    let attr = element.getAttribute('typed-data')
    attr = attr.split(',')
    attr = attr.map(e=>e.trim())

    setInterval(() => {
        let text = attr[Math.floor(Math.random()*attr.length)]
        console.log(text)
        const promotion = element.querySelector('span')
        promotion.style.width = '%0'
        promotion.setAttribute("typed-data-text", " "+text)
        promotion.innerHTML = promotion.getAttribute('typed-data-text')
        promotion.style.width = '100%'
    }, 5400);



});