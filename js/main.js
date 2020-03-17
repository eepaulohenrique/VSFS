
$('.hamburger').on('click', function(){
	$('.sidebar').addClass('active');
});


$('.close').on('click', function(){
	$('.sidebar').removeClass('active');
});

var images = [
	{
		
		src:'images/vs1.webp'
	},
	{
		
		src:'images/vs2.webp'
	},
	{
		
		src:'images/vs3.webp'
	},
	{
		
		src:'images/vs4.jpeg'
	},
	{
		
		src:'images/vs5.jpg'
	},
];

var indexNumber = 0;

setInterval(function () {
	if(indexNumber<4){

	indexNumber+=1;
	

} else{

	indexNumber=0;
	
}
$('#mainimages').attr('src',images[indexNumber].src);


}, 4000);

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });

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

}, 3000);

