function getInputValue1(getId1, getId2) {
    const leftInputField = document.getElementById(getId1).value;
    const rightInputField = document.getElementById(getId2).value;
    const leftINputValue = parseFloat(leftInputField);
    const rightInputValue = parseFloat(rightInputField);

    if (isNaN(leftINputValue) || isNaN(rightInputValue) || leftINputValue < 0 || rightInputValue < 0) {
        alert('Please provide valid number')
        return;

    }

    const value = leftINputValue * rightInputValue;
    count += 1;
    return value;
}
let count = 0;
function getInputValue2(getId1, getId2) {
    const leftInputField = document.getElementById(getId1).value;
    const rightInputField = document.getElementById(getId2).value;
    const leftINputValue = parseFloat(leftInputField);
    const rightInputValue = parseFloat(rightInputField)
    if (isNaN(leftINputValue) || isNaN(rightInputValue) || leftINputValue < 0 || rightInputValue < 0) {
        alert('Please provide valid number')
        return;

    }
    const value = 0.5 * (leftINputValue * rightInputValue);
    count += 1;

    return value;
}

// const colors = document.querySelectorAll('.custom-color')

// // function generateColor() {
// //     colors.forEach((color) => {
// //         let hexCode = "#" + Math.random().toString(16).substring(2, 8);
// //         color.style.backgroundColor = hexCode;
// //     })
// // }
// // generateColor()



const customColorone = document.getElementsByClassName('color-box');

for(let i = 0; i < customColorone.length; i++){
    customColorone[i].addEventListener('mouseover', function(){
        let hexCode = "#" + Math.random().toString(16).substring(2, 8);
        this.style.backgroundColor = hexCode;
        console.log(this.getElementsByClassName)

     
    });
  
    customColorone[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = "white";
    })

}



// const customColorTwo = document.getElementsByClassName('custom-color-two');
// for(let i = 0; i < customColorTwo.length; i++){
//     customColorTwo[i].addEventListener('mouseover', function(){
//         generateColor();
//     })
// }





