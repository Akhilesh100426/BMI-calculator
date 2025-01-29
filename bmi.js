function calculateBMI() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    document.getElementById('result').innerHTML = '';
    document.getElementById('comment').innerHTML = '';
    const error = document.getElementById('error');
    error.innerHTML = '';

    if (!age || !height || !weight) {
        error.innerHTML = 'Please fill in all fields.';
        return;
    }

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        document.getElementById('error').innerHTML = 'Please enter valid numbers.';
        return;
        
    }

    if (age <= 0 || height <= 0 || weight <= 0) {
        document.getElementById('error').innerHTML = 'Values must be greater than zero.';
        return;
    }

    if (age < 2 || age > 120) {
        document.getElementById('error').innerHTML = 'Please enter a valid age (2-120 years).';
        return;
    }

    if (height < 50 || height > 300) {
        document.getElementById('error').innerHTML = 'Please enter a valid height (50-300 cm).';
        return;
    }

    if (weight < 2 || weight > 500) {
        document.getElementById('error').innerHTML = 'Please enter a valid weight (2-500 kg).';
        return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById('result').innerHTML = `Your BMI is: ${bmi}`;

    if (bmi < 18.5) {
        document.getElementById('comment').innerHTML = 'You are underweight'; 
        document.getElementById('result').style.color = 'red';
        document.getElementById('comment').style.color = 'red';
        
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('comment').innerHTML = 'You are healthy';
        document.getElementById('result').style.color = 'green';
        document.getElementById('comment').style.color = 'green';
        
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('comment').innerHTML = 'You are overweight';
        document.getElementById('result').style.color = 'orange';
        document.getElementById('comment').style.color = 'orange';
        
    } else {
        document.getElementById('comment').innerHTML = 'You are obese';
        document.getElementById('result').style.color = 'red';
        document.getElementById('comment').style.color = 'red';
        
    }
    
    document.getElementById('graphBtn').style.display = 'block';
}