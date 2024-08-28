document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Check if the day, month and year are valid
    if (day < 1 || day > 31){
        alert('Invalid day');
        return;
    }
    if (month < 1 || month > 12) {
        alert('Invalid month');
        return;
    }
    if (year < 1900 || year > new Date().getFullYear()) {
        alert('Invalid year');
        return;
    }

     // Basic validation
     if (!day || !month || !year) {
        alert('Please enter a valid date.');
        return;
    }

    // Hide home page and show loading screen
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    // Simulate loading delay
    setTimeout(() => {
        // Calculate age
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // Hide loading screen and show output
        document.getElementById('loading').style.display = 'none';
        document.getElementById('output').style.display = 'block';
        document.getElementById('ageResult').innerText = age;
    }, 2000);
});
