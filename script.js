var models = [

	{
		name : 'Kozmoz',
		image : 'img/book1.jpg',
		link : 'https://www.amazon.com.tr/Kozmos-Carl-Sagan/dp/9752107834/ref=sr_1_1?qid=1653577312&refinements=p_27%3A-&s=books&sr=1-1'
	},
	{
		name : 'Kızıl Veba',
		image : 'img/book2.jpg',
		link : 'https://www.amazon.com.tr/K%C4%B1z%C4%B1l-Veba-Jack-London/dp/6257070783/ref=sr_1_2?qid=1653577312&refinements=p_27%3A-&s=books&sr=1-2'
	},{
		name : 'Gece Yarısı Kütüphanesi',
		image : 'img/book3.jpg',
		link : 'https://www.amazon.com.tr/Gece-Yar%C4%B1s%C4%B1-K%C3%BCt%C3%BCphanesi-Matt-Haig/dp/6051981837/ref=sr_1_3?qid=1653577312&refinements=p_27%3A-&s=books&sr=1-3'
	},{
		name : 'İnsanlığımı Yitirirken',
		image : 'img/book4.jpg',
		link : 'https://www.amazon.com.tr/%C4%B0nsanl%C4%B1%C4%9F%C4%B1m%C4%B1-Yitirirken-Osamu-Dazai/dp/6258401473/ref=sr_1_4?qid=1653577312&refinements=p_27%3A-&s=books&sr=1-4'
	},{
		name : 'Mutlu Olma Sanatı',
		image : 'img/book5.jpg',
		link : 'https://www.amazon.com.tr/Mutlu-Olma-Sanat%C4%B1-Arthur-Schopenhauer/dp/975074120X/ref=sr_1_5?qid=1653577312&refinements=p_27%3A-&s=books&sr=1-5'
	},
]

var index = 0;
var slayCount = models.length;
var interval;

var settings = {
	duration : '1000',
	random : false
};

init(settings);


document.querySelector('.fa-caret-left').addEventListener('click',function(){
	index--;
	showSlide(index);
	console.log(index);
});

document.querySelector('.fa-caret-right').addEventListener('click',function(){
	index++;
	showSlide(index);
	console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
	var prev;
	interval = setInterval(function(){
		
		if(settings.random){
			// Random Index
			do{
				index = Math.floor(Math.random() * slayCount);
			}while(index == prev)
			prev = index ;
			console.log(index)
		}else{
			// Artan Index
			if(slayCount == index+1){
				index = -1;
			}
			showSlide(index);
			console.log(index)
			index++; 
		}
		
		
		showSlide(index);
		
		
	},settings.duration)
}






function showSlide(i){
	index = i;
	if(i<0){
		index = slayCount - 1;
	}
	if(i >= slayCount){
		index = 0;
	}
	
	document.querySelector('.card-img-top').setAttribute('src',models[index].image);
	document.querySelector('.card-title').textContent = models[index].name;
	document.querySelector('.card-link').setAttribute('href',models[index].link);

}



