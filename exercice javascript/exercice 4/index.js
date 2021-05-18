for(a=2; a<=100; a++) {
	var x = 1;
	var racine = Math.floor(Math.sqrt(a)); 

	do {
	x++;
	} while(x <= racine && a%x != 0);
	if(x > racine) {
	document.write(a +"<br>");
	}
}
