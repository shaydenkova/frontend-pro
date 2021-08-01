

//3я задача
var valuesArray = [];
btn.addEventListener('click', () => {
    var val = document.getElementsByName('value')[0].value;
    document.getElementById('valueItem').value='';
    valuesArray.push(val);
    function checkInput() {
        var pattern = /^\d+$/;
        return pattern.test(val); 
    }
    if (!checkInput()) {
        alert('Введите число');
    } else {
        var counterBlock = document.createElement('div');
        var counterName = document.createElement('p');
        var counterValue = document.createElement('p');
        counterName.textContent = `Counter value: `;
        counterValue.textContent = val;
        counterBlock.appendChild(counterName);
        counterBlock.appendChild(counterValue);
        document.body.appendChild(counterBlock);
        const counterBtn = document.createElement('button');
        counterBtn.className = 'btnCount';
        counterBtn.innerText = 'Count';
        counterBlock.appendChild(counterBtn);
    }

    console.log(valuesArray);

    var elements = document.querySelectorAll(".btnCount");
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick = function(){
            let counter = valuesArray[i]++;
            elements[i].previousElementSibling.innerText  = counter;
        };
    }
})

