var number1 = 1;
var number2 = 2;
var number3 = 3;
var sum = 2;
for (number1 = 1;number1 < 4000000; number3 = number1 + number2){
	if (number3 % 2 === 0){
		sum += number3;
		number1 = number2;
		number2 = number3;
	}else{
		number1 = number2;
		number2 = number3;
	}
}
console.log(sum)