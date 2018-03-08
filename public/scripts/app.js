$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
  console.log('trash');
  //bulding a modal
  const buildModal=()=>{
    console.log('dafaq');
    const $base = $('<div>').addClass('modal is-active');
    const $background = $('<div>').addClass('modal-background');
    const $card = $('<div>').addClass('modal-card');
    const $header = $('<div>').addClass('modal-card-head');
    const $headerTitle = $('<p>').addClass('modal-card-title').text('Login');
    const $headerClose = $('<button>').addClass('delete').attr('aria-labe','close');
    const $body = $('<section>').addClass('modal-card-body');
    const $footer = $('<div>').addClass('modal-card-foot');
    const $footerButton1 = $('<button>').addClass('button is-success').text('Button1');
    const $footerButton2 = $('<button>').addClass('button').text('button2');

    $header.append($headerTitle).append($headerTitle);
    $footer.append($footerButton1).append($footerButton2);
    $card.append($header).append($body).append($footer);
    $base.append($background).append($card);
    $('section').prepend($base);
  }

  $('#loginButton').click(()=>{
    console.log('working');
    buildModal();

  });



});
