export const slider = () => {
  try {
    const $teamSlider = $('.team__slider');
    const $newsSlider = $('.news__slider');
    let numSlick = 0;
    $('.team__slider').each( function() {
      numSlick++;
      $(this).addClass( 'slider__' + numSlick ).slick({

      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },
        {
          
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        }
      ]
      });
    });
    
    numSlick = 0;

    $('.news__slider').each( function() {
      numSlick++;
      $(this).addClass( 'slider-' + numSlick ).slick({

      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          },
        }
      ]
    });
    });
    (function() {
        console.log("2");
  
        let currentSlide;
        let slidesCount;
        let sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');
        
        let updateSliderCounter = function(slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide()/3 + 1;
          slidesCount = 3;//ADD number of sliders pages!!!!!
          $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };
  
        $teamSlider.on('init', function(event, slick) {
          $teamSlider.append(sliderCounter);
          updateSliderCounter(slick);
        });
  
        $teamSlider.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });
  
        $teamSlider.slick();
    })();
    (function() {
        console.log("1")
        let currentSlide;
        let slidesCount;
        let sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter-news');
        
        let updateSliderCounter = function(slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide()/3 + 1;
          // slidesCount =  slick.slideCount;
          slidesCount = 3;//ADD number of sliders pages!!!!!
          $(sliderCounter).text(currentSlide + '/' +slidesCount)
        };

        $newsSlider.on('init', function(event, slick) {
          $newsSlider.append(sliderCounter);
          updateSliderCounter(slick);
        });

        $newsSlider.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });

        $newsSlider.slick(); 
    })();
    
   
   

} catch (err) {
}
};
