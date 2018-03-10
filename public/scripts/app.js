$(() => {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });

  var loginForm = () => {
    var $formDiv = $('<div>').addClass('container').attr('id', 'generalLoginForm');
    var $emailField = $('<div>').addClass('field');
    var $emailP = $('<p>').addClass('control has-icons-left');
    var $emailInput = $('<input>').addClass('input email').attr({
      type: 'email',
      placeholder: 'Email',
      name: 'useremail'

    });
    var $emailSpan = $('<span>').addClass('icon is-small is-left');
    var $emailIcon = $('<i>').addClass('fas fa-envelope');

    var $passwordField = $('<div>').addClass('field');
    var $passwordP = $('<p>').addClass('control has-icons-left');
    var $passwordInput = $('<input>').addClass('input secret').attr({
      type: 'password',
      placeholder: 'Password',
      name: 'userpassword',
    });
    var $passwordSpan = $('<span>').addClass('icon is-small is-left');
    var $passowrdIcon = $('<i>').addClass('fas fa-lock');

    $emailField.append($emailP);
    $emailP.append($emailInput).append($emailSpan);
    $emailSpan.append($emailIcon);

    $passwordField.append($passwordP);
    $passwordP.append($passwordInput).append($passwordSpan);
    $passwordSpan.append($passowrdIcon);
    $formDiv.append($emailField);
    $formDiv.append($passwordField);

    return $formDiv;
  }

  const registerForm = () => {
    const $formDiv = $('<div>').addClass('container').attr('id', 'generalLoginForm');
    const $emailField = $('<div>').addClass('field');
    const $emailP = $('<p>').addClass('control has-icons-left');
    const $emailInput = $('<input>').addClass('input').attr({
      type: 'email',
      placeholder: 'Email'
    });
    const $emailSpan = $('<span>').addClass('icon is-small is-left');
    const $emailIcon = $('<i>').addClass('fas fa-envelope');
    const $passwordField = $('<div>').addClass('field');
    const $passwordP = $('<p>').addClass('control has-icons-left');
    const $passwordInput = $('<input>').addClass('input').attr({
      type: 'password',
      placeholder: 'Password'
    });
    const $passwordVerifyInput = $('<input>').addClass('input').attr({
      type: 'password',
      placeholder: 'Verify Password'
    });
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

  const buildModal = ($contentObj, text) => {

    const $base = $('<div>').addClass('modal is-active');
    const $background = $('<div>').addClass('modal-background');
    const $card = $('<div>').addClass('modal-card');
    const $header = $('<div>').addClass('modal-card-head');
    const $headerTitle = $('<p>').addClass('modal-card-title').text(text);
    const $headerClose = $('<button>').addClass('delete').attr('aria-labe', 'close');
    const $body = $('<section>').addClass('modal-card-body');
    const $footer = $('<div>').addClass('modal-card-foot');
    const $footerButton1 = $('<button>').addClass('button is-success').text('Confirm').attr('id', "modal" + text);
    const $footerButton2 = $('<button>').addClass('button').text('Cancel').attr('id', 'modalCancel');

    $header.append($headerTitle).append($headerTitle);
    $footer.append($footerButton1).append($footerButton2);
    $card.append($header).append($body).append($footer);
    $body.append($contentObj);
    $base.append($background).append($card);
    $('.main').prepend($base);
    $('html').addClass('is-clipped');
    const $modal = $base;
    return $modal;
  }


  $('#loginButton').click(() => {
    const $loginForm = loginForm();
    buildModal($loginForm, 'Login');

  });

  $('#registerButton').click(() => {
    const $registerForm = registerForm();
    buildModal($registerForm, 'Register');

  });
  //use this template when element doesn't exist but you expect it to exist
  // $('body').on('click', '.modal-background', function(event){

  $('body').on('click', '.modal-background', function(event) {
    event.preventDefault();
    const $modal = $(this).parent();
    $modal.removeClass('is-active');
    $('html').removeClass('is-clipped');
    console.log($($modal));
    $($modal).remove();
  });

  $('body').on('click', '#modalCancel', function(event) {
    event.preventDefault();
    const $modal = $(this).parent().parent().parent();
    $modal.removeClass('is-active');
    $('html').removeClass('is-clipped');
    $($modal).remove()
  });

  $('body').on('click', '#modalLogin', function(event) {
    let email = $('.email').val();
    let password = $('.secret').val();
    let dataObj = {
      email: email,
      password: password
    };

    $.ajax({
      type: "POST",
      url: '/login',
      data: dataObj,
    }).then(() => location = '/');

  });
});
