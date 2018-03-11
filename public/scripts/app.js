$(() => {

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for (user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  const loginForm = () => {
    var $formDiv = $('<div>').addClass('container').attr('id', 'generalLoginForm');
    var $emailField = $('<div>').addClass('field');
    var $emailP = $('<p>').addClass('control has-icons-left');
    var $emailInput = $('<input>').addClass('input email').attr({
      type: 'email',
      placeholder: 'Email',
      name: 'user[email]'

    });
    var $emailSpan = $('<span>').addClass('icon is-small is-left');
    var $emailIcon = $('<i>').addClass('fas fa-envelope');

    var $passwordField = $('<div>').addClass('field');
    var $passwordP = $('<p>').addClass('control has-icons-left');
    var $passwordInput = $('<input>').addClass('input secret').attr({
      type: 'password',
      placeholder: 'Password',
      name: 'user[password]'
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
    const $nameField = $('<div>').addClass('field');
    const $nameP = $('<p>').addClass('control has-icons-left');
    const $nameInput = $('<input>').addClass('input name').attr({
      type: 'text',
      placeholder: 'Your Name',
      name: 'user[name]'
    });
    const $nameSpan = $('<span>').addClass('icon is-small is-left');
    const $nameIcon = $('<i>').addClass('fas fa-address-card');
    const $phoneField = $('<div>').addClass('field');
    const $phoneP = $('<p>').addClass('control has-icons-left');
    const $phoneInput = $('<input>').addClass('input phone').attr({
      type: 'number',
      placeholder: 'Phone',
      name: 'user[phone]'
    });
    const $phoneSpan = $('<span>').addClass('icon is-small is-left');
    const $phoneIcon = $('<i>').addClass('fas fa-phone');
    const $emailField = $('<div>').addClass('field');
    const $emailP = $('<p>').addClass('control has-icons-left');
    const $emailInput = $('<input>').addClass('input email').attr({
      type: 'email',
      placeholder: 'Email',
      name: 'user[email]'
    });
    const $emailSpan = $('<span>').addClass('icon is-small is-left');
    const $emailIcon = $('<i>').addClass('fas fa-envelope');
    const $passwordField = $('<div>').addClass('field');
    const $passwordP = $('<p>').addClass('control has-icons-left');
    const $passwordInput = $('<input>').addClass('input secret').attr({
      type: 'password',
      placeholder: 'Password',
      name: 'user[password]'
    });
    const $passwordSpan = $('<span>').addClass('icon is-small is-left');
    const $passowrdIcon = $('<i>').addClass('fas fa-lock');

    $nameField.append($nameP);
    $nameP.append($nameInput).append($nameSpan);
    $nameSpan.append($nameIcon);
    $phoneField.append($phoneP);
    $phoneP.append($phoneInput).append($phoneSpan);
    $phoneSpan.append($phoneIcon);

    $emailField.append($emailP);
    $emailP.append($emailInput).append($emailSpan);
    $emailSpan.append($emailIcon);
    $passwordField.append($passwordP);
    $passwordP.append($passwordInput).append($passwordSpan);
    $passwordSpan.append($passowrdIcon);
    $formDiv.append($emailField).append($passwordField).append($nameField).append($phoneField);
    return $formDiv;
  }

  const buildModal = ($contentObj, text) => {
    const $base = $('<div>').addClass('modal is-active');
    const $background = $('<div>').addClass('modal-background');
    const $card = $('<div>').addClass('modal-card');
    const $header = $('<div>').addClass('modal-card-head');
    const $headerTitle = $('<p>').addClass('modal-card-title').text(text);
    const $headerClose = $('<button>').addClass('delete').attr('aria-label', 'close');
    const $body = $('<section>').addClass('modal-card-body');
    const $footer = $('<div>').addClass('modal-card-foot');
    const $footerButton1 = $('<button>').addClass('button is-success').text('Confirm').attr('id', "modal" + text)
    const $footerButton2 = $('<button>').addClass('button').text('Cancel').attr('id', 'modalCancel');
    $header.append($headerTitle).append($headerTitle);
    $body.append($contentObj);
    $footer.append($footerButton1).append($footerButton2);
    $card.append($header).append($body).append($footer);
    $base.append($background).append($card);
    $('.main').prepend($base);
    $('html').addClass('is-clipped');
    const $modal = $base;
    return $modal;
  }


  $('#loginButton').click((event) => {
    const $loginForm = loginForm();
    buildModal($loginForm, 'Login');
  });

  $('#registerButton').click(() => {
    const $registerForm = registerForm();
    buildModal($registerForm, 'Register');

  });
  // use this template when element doesn't exist but you expect it to exist
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

  $('body').on('click', '#modalRegister', function(event) {
    let email = $('.email').val();
    let password = $('.secret').val();
    let name = $('.name').val();
    let phone = $('.phone').val();
    let dataObj = {
      email: email,
      password: password,
      name: name,
      phone: phone
    };

    $.ajax({
      type: "POST",
      url: '/register',
      data: dataObj,
    }).then(() => location = '/');

  });

  $('body').on('click', '#logoutButton', (event) => {

    $.post('/logout');

  });
});
