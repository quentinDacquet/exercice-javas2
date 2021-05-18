let age = parseInt(prompt('Entre ton age'));

verifage();

function verifage(){
    if(age<18){
        alert('Tu n\'as pas l\'âge');
        age = parseInt(prompt('Entre ton age'));
        verifage();
    }
    else{
        alert('Tu as ' + age);
    }
}