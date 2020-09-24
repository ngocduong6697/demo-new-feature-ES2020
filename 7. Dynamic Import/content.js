function contentShow(){
    document.getElementById("content").innerHTML=`
    <h1>Hello Everyone</h1>
    <p>This is a new feature of Javascript</p>
    `
}

function contentHide(){
    document.getElementById("content").innerHTML=``
}

export {contentShow, contentHide};


// ES2020
// export function contentShow(){
//     document.getElementById("content").innerHTML=`
//     <h1>Hello Everyone</h1>
//     <p>This is a new feature of Javascript</p>
//     `
// }

// export function contentHide(){
//     document.getElementById("content").innerHTML=``
// }