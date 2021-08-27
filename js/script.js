// video
document.getElementById("vid1").addEventListener('play', dimBack1, false);
document.getElementById("vid2").addEventListener('play', dimBack1, false);


 function dimBack1() {
        var videos = [
            document.getElementById("vid1"),
            document.getElementById("vid2")
        ];

        function stopOthers () {
            var id = this.id, i = 0;
            for (var j = videos.length; i < j; i++) {
                if (videos[i].id !== id) {
                    videos[i].pause();
                }
            }
        }

        var i = 0;
        for (var j = videos.length; i < j; i++) {
            videos[i].addEventListener("play", stopOthers, false);
        }
      }


      // gallery

      $(".gallery").ready(function(){

        $('.buttons').click(function(){
        
            $(this).addClass('active').siblings().removeClass('active');
        
            var filter = $(this).attr('data-filter')
        
            if(filter == 'all'){
                $('.image').show(400);
            }else{
                $('.image').not('.'+filter).hide(200);
                $('.image').filter('.'+filter).show(400);
            }
        
        });
        
        $('.gallery').magnificPopup({
        
            delegate:'a',
            type:'image',
            gallery:{
                enabled:true
            }
        
        });
        
        });

        