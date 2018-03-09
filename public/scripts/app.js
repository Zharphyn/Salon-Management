$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });

  const loginForm = () => {
    const $formDiv = $('<div>').addClass('container').attr('id', 'generalLoginForm');
    const $emailField = $('<div>').addClass('field');
    const $emailP = $('<p>').addClass('control has-icons-left');
    const $emailInput = $('<input>').addClass('input').attr({ type: 'email', placeholder: 'Email' });
    const $emailSpan = $('<span>').addClass('icon is-small is-left');
    const $emailIcon = $('<i>').addClass('fas fa-envelope');
    const $passwordField = $('<div>').addClass('field');
    const $passwordP = $('<p>').addClass('control has-icons-left');
    const $passwordInput = $('<input>').addClass('input').attr({ type: 'password', placeholder: 'Password' });
    const $passwordSpan = $('<span>').addClass('icon is-small is-left');
    const $passowrdIcon = $('<i>').addClass('fas fa-lock');

    $emailField.append($emailP);
    $emailP.append($emailInput).append($emailSpan);
    $emailSpan.append($emailIcon);
    $passwordField.append($passwordP);
    $passwordP.append($passwordInput).append($passwordSpan);
    $passwordSpan.append($passowrdIcon);
    $formDiv.append($emailField).append($passwordField);
    return $formDiv;
  }

  const registerForm = () => {
    const $formDiv = $('<div>').addClass('container').attr('id', 'generalLoginForm');
    const $emailField = $('<div>').addClass('field');
    const $emailP = $('<p>').addClass('control has-icons-left');
    const $emailInput = $('<input>').addClass('input').attr({ type: 'email', placeholder: 'Email' });
    const $emailSpan = $('<span>').addClass('icon is-small is-left');
    const $emailIcon = $('<i>').addClass('fas fa-envelope');
    const $passwordField = $('<div>').addClass('field');
    const $passwordP = $('<p>').addClass('control has-icons-left');
    const $passwordInput = $('<input>').addClass('input').attr({ type: 'password', placeholder: 'Password' });
    const $passwordVerifyInput = $('<input>').addClass('input').attr({ type: 'password', placeholder: 'Verify Password' });
    const $passwordSpan = $('<span>').addClass('icon is-small is-left');
    const $passowrdIcon = $('<i>').addClass('fas fa-lock');

    $emailField.append($emailP);
    $emailP.append($emailInput).append($emailSpan);
    $emailSpan.append($emailIcon);
    $passwordField.append($passwordP);
    $passwordP.append($passwordInput).append($passwordSpan);
    $passwordSpan.append($passowrdIcon);
    $formDiv.append($emailField).append($passwordField);
    return $formDiv;
  }

  const buildModal = ($contentObj,text) => {
    console.log('dafaq');
    const $base = $('<div>').addClass('modal is-active');
    const $background = $('<div>').addClass('modal-background');
    const $card = $('<div>').addClass('modal-card');
    const $header = $('<div>').addClass('modal-card-head');
    const $headerTitle = $('<p>').addClass('modal-card-title').text(text);
    const $headerClose = $('<button>').addClass('delete').attr('aria-labe', 'close');
    const $body = $('<section>').addClass('modal-card-body');
    const $footer = $('<div>').addClass('modal-card-foot');
    const $footerButton1 = $('<button>').addClass('button is-success').text('Confirm');
    const $footerButton2 = $('<button>').addClass('button').text('Cancel').attr('id', 'modalCancel');;

    $header.append($headerTitle).append($headerTitle);
    $footer.append($footerButton1).append($footerButton2);
    $card.append($header).append($body).append($footer);
    $body.append($contentObj);
    $base.append($background).append($card);
    $('section').prepend($base);
    $('html').addClass('is-clipped');
  }


  $('#loginButton').click(() => {
    const $loginForm = loginForm();
    buildModal($loginForm,'Login');

  });

    $('#registerButton').click(() => {
    const $registerForm = registerForm();
    buildModal($registerForm,'Register');

  });
  //use this template when element doesn't exist but you expect it to exist
  // $('body').on('click', '.modal-background', function(event){

  $('body').on('click', '.modal-background', function(event) {
    event.preventDefault();
    $(this).parent().removeClass('is-active');
    $('html').removeClass('is-clipped');
  });

  $('body').on('click', '#modalCancel', function(event) {
    event.preventDefault();
    $(this).parent().parent().parent().removeClass('is-active');
    $('html').removeClass('is-clipped');
  });

});
