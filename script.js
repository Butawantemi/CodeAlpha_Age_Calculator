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
    
})