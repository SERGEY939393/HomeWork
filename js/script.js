// №1

const num = 4;

if (num > 0) {
	console.log('Введенное число положительное')
} else if (num < 0) {
	console.log('Введенное число отрицательное')
} else {
	console.log('Введенное число - 0')
}

// №2

const weight = prompt('Введите свой вес в киллограммах')

const height = prompt('Введите свой рост в сантиметрах')

const bmi = (Number(weight) / (Number(height) / 100) ** 2)

if (bmi >= 25) {
	alert('У Вас избыточная масса тела или ожирение, прекратите много кушать')
} else if (bmi <= 18.5) {
	alert('У Вас дефицит массы тела, Вам надо срочно покушать')
} else {
	alert('Ваша масса тела в норме, кушайте как обычно')
}

// №3

const month = 3;
let monthName;

switch (month) {
	case 1:
		monthName = 'Январь';
		break;
	case 2:
		monthName = 'Февраль';
		break;
	case 3:
		monthName = 'Март';
		break;
	case 4:
		monthName = 'Апрель';
		break;
	case 5:
		monthName = 'Май';
		break;
	case 6:
		monthName = 'Июнь';
		break;
	case 7:
		monthName = 'Июль';
		break;
	case 8:
		monthName = 'Август';
		break;
	case 9:
		monthName = 'Сентябрь';
		break;
	case 10:
		monthName = 'Октябрь';
		break;
	case 11:
		monthName = 'Ноябрь';
		break;
	case 12:
		monthName = 'Декабрь';
		break;
	default:
		monthName = 'Неверный день';
}

console.log(monthName);

// №4

const assessment = 6

let schoolAssessment;

switch (assessment) {
	case 1:
		schoolAssessment = 'Пересдача';
		break;
	case 2:
		schoolAssessment = 'Неудовлетворительно';
		break;
	case 3:
		schoolAssessment = 'Удовлетворительно';
		break;
	case 4:
		schoolAssessment = 'Хорошо';
		break;
	case 5:
		schoolAssessment = 'Отлично';
		break;
	default:
		schoolAssessment = 'Такой оценки не существует';
}

console.log(schoolAssessment);