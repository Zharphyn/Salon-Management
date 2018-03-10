
const carouselItems = [
  {
      img: 'https://goo.gl/u6P9Pd',
    title: 'Check out these nails!!',
     video: 'https://goo.gl/2oFsTq'
  },
  {
      img: 'https://goo.gl/FRnwip',
    title: 'Amazing Nails!!',
     video: 'https://goo.gl/So2iCS'
  },
  {
      img: 'https://goo.gl/aPkWSZ',
    title: "Grace's Nails!!",
     video: ''
  },
  {
      img: 'https://goo.gl/H9w2ry',
    title: 'This is a dog',
     video: 'https://goo.gl/PSLWHj'
  },
  {
      img: 'https://goo.gl/WwFgr3',
    title: 'A Little Bit of Bling',
     video: ''
  },
  {
      img: 'https://goo.gl/2U4h2o',
    title: 'Crazy Nails!!',
     video: 'https://goo.gl/qos3kU'
  },
  {
      img: 'https://goo.gl/1ZPuXT',
    title: 'Blingy Nails!!',
     video: 'https://goo.gl/QKcVyR'
  }];


$(() => {
  function createCarouselItem(element){
    let $divCarouselItem = $('<div>').addClass('carousel-item has-background is-active');
    const $img = $('<img>').addClass('is-background').attr('src',element.img).attr('height','40');
    let $title = $('<div>').addClass('title').text(element.title);
    const $video = $('<a>').attr('href',element.video).attr('target','_blank').text('  Video');

    $divCarouselItem.append($img);
    if (element.video) {
      $title.append($video);
    }
    $divCarouselItem.append($title);

    return $divCarouselItem;
  }

  function buildNavigation() {
    let $navigation = $('<div>').addClass('carousel-navigation is-centered');
    const $nav_left = $('<div>').addClass('carousel-nav-left');
    const $text_left = $('<i>').addClass('fa fa-chevron-left').attr('aria-hidden', 'true');
    const $nav_right = $('<div>').addClass('carousel-nav-right');
    const $text_right = $('<i>').addClass('fa fa-chevron-right').attr('aria-hidden', 'true');

    $navigation.append($nav_left);
    $navigation.append($text_left);
    $navigation.append($nav_right);
    $navigation.append($text_right);

    return $navigation;
  }

  function renderCarousel () {
    let $carousel = $('<div>').addClass('carousel is-centered is-animated carousel-animate-slide').attr('data-autoplay', 'true');
    let $carousel_container = $('<div>').addClass('carousel-container');
    const $carousel_navigation = buildNavigation();
    carouselItems.forEach(function(element) {
      const carouselItemHtml = createCarouselItem(element);
      $carousel_container.append(carouselItemHtml);
    });
    $carousel.append($carousel_container);
    $carousel.append($carousel_navigation);

    $('#carousel').append($carousel);
    console.log('In renderCarousel');

  }

  renderCarousel();
});
