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

  module.exports {buildModal}