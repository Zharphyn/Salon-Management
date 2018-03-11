$(() => {


  var datePicker = new bulmaCalendar(document.getElementById('datepickerDemo'), {
    startDate: new Date(), // Date selected by default
    dateFormat: 'yyyy-mm-dd', // the date format `field` value
    lang: 'en', // internationalization
    overlay: false,
    closeOnOverlayClick: true,
    closeOnSelect: true,
    // callback functions
    onSelect: null,
    onOpen: null,
    onClose: null,
    onRender: null
  });
  var datePicker = new bulmaCalendar(document.getElementById('datepickerDemo2'), {
    overlay: true
  });

});
