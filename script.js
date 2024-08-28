document.getElementById('calculateBtn').addEventListener('click', function(){
    // Get the value in the input fields
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

    // Hide the home page and show the loading page.
    document.getElementById('HomePage').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    // Stimulate loading delay
    setTimeout(() => {
        //Calculate the Age
        const today = new Date();
        const birthDate = new Date(year, month -1, day);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

    })
    
})