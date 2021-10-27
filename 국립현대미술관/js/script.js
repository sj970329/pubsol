$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();   
    },
    function(){
        $(this).children(".sub").stop().slideUp(); 
    }
);

$(".lali").hover(
    function(){
        $(this).children(".la").stop().fadeIn();   
    },
    function(){
        $(this).children(".la").stop().fadeOut(); 
    }
);

$(".sgnb li").hover(
    function(){
        $(this).children(".ssub").stop().fadeIn();   
    },
    function(){
        $(this).children(".ssub").stop().fadeOut(); 
    }
);
$(document).ready(function(){ 
    var currentPosition = parseInt($("#sideMenu").css("top")); 
    $(window).scroll(function() { 
        var position = $(window).scrollTop(); 
        $("#sideMenu").stop().animate({"top":position+currentPosition+"px"},200);
    }); 
});

var box = document.querySelector("#sideMenu");
var boxtop = window.pageYOffset + box.getBoundingClientRect().top;
window.addEventListener('wheel', showbox);

function showbox(){
    console.log(box.getBoundingClientRect().top);
    console.log(scrollY);
    if(scrollY > box.getBoundingClientRect().top){
        box.classList.add("active");
    }else{
        box.classList.remove("active");
    }
}
$("#sch").click(
    function(){
        $("#popup").stop().slideDown();   
    }
);
$(".cross").click(
    function(){
        $("#popup").stop().slideUp();  
    }
);





// notice


jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('.rolling li:first').animate( {marginTop: '-40px'}, 600, function()
            {
                $(this).detach().appendTo('ul.rolling').removeAttr('style');
            });
            ticker();
        }, 2000);         
      };

      $(document).on('click','.prev',function()
      {
            $('.rolling li:last').hide().prependTo($('.rolling')).slideDown();
            clearTimeout(timer);
            ticker();
      }); 
  
      $(document).on('click','.next',function()
      {
            $('.rolling li:first').animate( {marginTop: '-40px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul.rolling').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
        }); 
    

    var tickerover = function()
    {
        $('.rolling').mouseover(function(){
            clearTimeout(timer);
        });
        $('.rolling').mouseout(function(){
            ticker();
        });  
    };
    tickerover();

        ticker();
    
});


// btSlider

var imgWidth = document.querySelector(".btSlider img").width;
		var gallMove = document.querySelector(".btSlider ul");
		var gallZone = document.querySelector(".btSlider");
		var arrow = document.querySelectorAll(".arrow");

		window.addEventListener('load',start);
		gallZone.addEventListener('mouseover',stop);
		gallZone.addEventListener('mouseout',start);

		var interval;
		var aniStartPoint;
		var aniEndPoint;
		var count = 0;
		var slideon = "on";

		function start(){
			interval = setInterval(go, 5000);
			arrow[0].style.opacity = "0";
			arrow[1].style.opacity = "0";
		}

		function go(){
			if(slideon == "on"){

				slideon = "off";

				if(count == 5) count = 0;

				aniStartPoint = -imgWidth * count;
				count++;
				aniEndPoint = -imgWidth * count;

				goAni();
			}
		}

		function left(){
			if(slideon == "on"){

				slideon = "off";

				if(count == 0) count = 5;

				aniStartPoint = -imgWidth * count;
				count--;
				aniEndPoint = -imgWidth * count;

				goAni();
			}
		}

		function goAni(){
			var ani = gallMove.animate([
				{
					transform:"translateX(" + aniStartPoint + "px)"
				},{
					transform:"translateX(" + aniEndPoint + "px)"
				}
			],1000);

			ani.addEventListener('finish',function(){
				gallMove.style.transform = "translateX(" + aniEndPoint + "px)";
				slideon = "on";
			});
		}

		function stop(){
			clearInterval(interval);
			arrow[0].style.opacity = "0.3";
			arrow[1].style.opacity = "0.3";
		}