console.log('Скрипт работает');
console.log(document.forms.my_body.mass.value);
function calc_age(year_of_birth) {
    let dt = new Date();
    var result = dt.getFullYear() - year_of_birth;
    age.innerHTML = result;
	return result;
}
