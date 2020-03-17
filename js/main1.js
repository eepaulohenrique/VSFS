
  var imagesF = [
	{
		
		src:'images/fantasy1.jpg'
	},
	{
		
		src:'images/fantasy2.jpg'
	},
	{

		src:'images/fantasy3.jpg'
	},
	{

		src:'images/fantasy4.jpg'
	},
	{
		src:'images/fantasy5.jpg'
	}

];

var indexF = 0;

setInterval(function () {
	if(indexF<4){

	indexF+=1;
	

} else{

	indexF=0;
	
}
$('#fantasy').attr('src',imagesF[indexF].src);

}, 2000);

