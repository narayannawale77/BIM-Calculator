
    let form = document.querySelector('#bmiForm');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;
        let result = document.querySelector('#result');

        if(height === '') {
            result.innerHTML = "Height cannot be empty";
            return;
        }

        if(weight === '') {
            result.innerHTML = "Weight cannot be empty";
            return;
        }

        // Convert height from cm to meters
        height = height / 100;

        // Calculate BMI
        let bmi = weight / (height * height);

        // Display the result
        result.innerHTML = "Your BMI is " + bmi.toFixed(2);
    });

