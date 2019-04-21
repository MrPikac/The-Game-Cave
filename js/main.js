function validate(){
    var name = document.getElementById("name").value;
    if (name === "") {
        alert('The name is required');
        return false;
    }
    if (name === Number) {
        alert('The name is not a number...');
        return false;
    }
    
    
    var age = document.getElementById("age").value;
    if (age === "") {
        alert('The age is required');
        return false;
    } 
    if (isNaN(age)) {
        alert('Age must be a number, ofc');
        return false;
    }   
    if (age % 1 !== 0) {
        alert('Age must be a whole number');
        return false;
    }
    
    return true
}