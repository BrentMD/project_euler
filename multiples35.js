var n = 1;
var sum = 0;
var multiples35 = function(i){
    while (n < i){
    	if (n % 3 === 0) {
			sum += n;
			n++;
		}
		else if (n % 5 === 0) {
			sum +=n;
			n++;
		}
		else {
			n++;
		}
	}
  console.log(sum);
}
multiples35(1000)