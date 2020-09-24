
import {contentShow, contentHide} from './content.js';

document.getElementById('buttonShow').addEventListener('click', () => {
    contentShow();
})
document.getElementById('buttonHide').addEventListener('click', () =>{
    contentHide();
})


// ES2020
// document.getElementById('buttonShow').addEventListener('click', async () =>{
//     const {contentShow} = await import('./content.js')
//     contentShow();
// })
// document.getElementById('buttonHide').addEventListener('click', async () =>{
//     const {contentHide} = await import('./content.js')
//     contentHide();
// })