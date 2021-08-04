const nav = document.querySelector('nav.navbar')
const alter = document.querySelector('#learned')
window.onscroll = e=>{
    let navGCR = nav.getBoundingClientRect()
    let alterGCR = alter.getBoundingClientRect()
    if(alterGCR.top <= 0 ){
        // console.log(alterGCR)
        // console.log(navGCR)
        !nav.classList.contains('active') && nav.classList.add('active')
        console.log('no', alterGCR)
    }else if (alterGCR.top > 0){
        nav.classList.contains('active') && nav.classList.remove('active')
    }
} 