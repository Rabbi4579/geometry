
//triangle
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangle = getInputValue2('triangle-left', 'triangle-right');
    const triangleText = document.getElementById('triangle-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 ">${triangleText}</td>
    <td class="px-3">${triangle}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)
    // showData(triangle)
    
})

// rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangle =  getInputValue1('rectangle-left', 'rectangle-right');
    const rectangleText = document.getElementById('rectangle-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 mt-2">${rectangleText}</td>
    <td class="px-3">${rectangle}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)
})

//Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogram = getInputValue1('parallelogram-left','parallelogram-right')
    const parallelogramText = document.getElementById('parallelogram-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 mt-2">${parallelogramText}</td>
    <td class="px-3">${parallelogram}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)
})

//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombus = getInputValue2('rhombus-left','rhombus-right')
    const rhombusText = document.getElementById('rhombus-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 mt-2">${rhombusText}</td>
    <td class="px-3">${rhombus}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)

})

//pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagon = getInputValue2('pentagon-left','pentagon-right');
    const pentagonText = document.getElementById('pentagon-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 mt-2">${pentagonText}</td>
    <td class="px-3">${pentagon}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)
    

})

//Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const leftInputField = document.getElementById('ellipse-left').value;
    const rightInputField = document.getElementById('ellipse-right').value;
    const leftInputValue = parseFloat(leftInputField);
    const rightInputValue =parseFloat(rightInputField);
    const ellipse = 3.1416 * (leftInputValue * rightInputValue);
    const fixedellipse = ellipse.toFixed(2);
    count += 1;
    const ellipseText = document.getElementById('ellipse-text').innerText;
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="px-3 ">${count}</td>
    <td class="px-3 mt-2">${ellipseText}</td>
    <td class="px-3">${fixedellipse}cm<sup> 2 </sup></td>
    <td><button class="bg-sky-500 py-2 px-2 text-white rounded-md">Convert to m <sup>2</sup></button></td>
    
    `
    container.appendChild(tr)
})



document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href="blog.html";
})

