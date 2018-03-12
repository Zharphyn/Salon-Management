$(() => {




  var timetable = new Timetable();

  timetable.setScope(9, 3)



  const staff = ['Liz', 'Staff1', 'Staff2', 'Staff3'];
  const randomStaff = (staff) => {
    let number = Math.floor(Math.random() * Math.floor(staff.length))
    return staff[number];
  }

  const timeFormatting = (time) => {
    const sliced = time.slice(0, -5);
    return sliced;
  }

  const endTimeCalc = (time) => {
    console.log('time[12] START:',time[12]);
  time[12] = String(Number(time[12]+1))
    console.log('time[12] END:',time[12]);
    return time;
  }

  timetable.addLocations(staff);

  $.getJSON('/schedule', (data) => {
    data.forEach((row) => {

      let start = timeFormatting(row.start_time);
      let end = timeFormatting(row.end_time);
      console.log(endTimeCalc(start));

      timetable.addEvent(row.name, randomStaff(staff), new Date(start), new Date(end), { url: '#' });

    })
    // timetable.addLocations(['Rotterdam', 'Madrid', 'Los Angeles', 'London', 'New York', 'Jakarta', 'Tokyo']);

    // timetable.addEvent('Zumba', 'Madrid', new Date(2015, 7, 17, 12), new Date(2015, 7, 17, 13), { url: '#' });
    // timetable.addEvent('Zumbu', 'Madrid', new Date(2015, 7, 17, 13, 30), new Date(2015, 7, 17, 15), { url: '#' });
    // timetable.addEvent('Lasergaming', 'London', new Date(2015, 7, 17, 17, 45), new Date(2015, 7, 17, 19, 30), { class: 'vip-only', data: { maxPlayers: 14, gameType: 'Capture the flag' } });
    // timetable.addEvent('All-you-can-eat grill', 'New York', new Date(2015, 7, 17, 21), new Date(2015, 7, 18, 1, 30), { url: '#' });
    // timetable.addEvent('Hackathon', 'Tokyo', new Date(2015, 7, 17, 11, 30), new Date(2015, 7, 17, 20)); // options attribute is not used for this event
    // timetable.addEvent('Tokyo Hackathon Livestream', 'Los Angeles', new Date(2015, 7, 17, 12, 30), new Date(2015, 7, 17, 16, 15)); // options attribute is not used for this event
    // timetable.addEvent('Lunch', 'Jakarta', new Date(2015, 7, 17, 9, 30), new Date(2015, 7, 17, 11, 45), {
    //   onClick: function(event) {
    //     window.alert('You clicked on the ' + event.name + ' event in ' + event.location + '. This is an example of a click handler');
    //   }
    // });
    // timetable.addEvent('Cocktails', 'Rotterdam', new Date(2015, 7, 18, 00, 00), new Date(2015, 7, 18, 02, 00), { class: 'vip-only' });

    var renderer = new Timetable.Renderer(timetable);
    renderer.draw('.timetable');


    // $('#bookNow').click((event) => {

    // });

  })

});
