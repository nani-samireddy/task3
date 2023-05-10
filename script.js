const button=document.querySelector('button');
button.addEventListener('click', event => {
    let input = Number(document.getElementById('input').value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let output = input;
    if (from == "Fahrenheit" && to == "Celsius") {
      output = (input - 32) * (5 / 9);
    } else if (from == "Fahrenheit" && to == "Kelvin") {
      output = (input - 32) * (5 / 9) + 273.15;
    } else if (from == "Celsius" && to == "Fahrenheit") {
      output = input * (9 / 5) + 32;
    } else if (from == "Celsius" && to == "Kelvin") {
      output = input + 273.15;
    } else if (from == "Kelvin" && to == "Fahrenheit") {
      output = (input - 273.15) * (9 / 5) + 32;
    } else if (from == "Kelvin" && to == "Celsius") {
      output = input - 273.15;
    } else {
      output = input;
    }

    document.getElementById("output").value = output;

})