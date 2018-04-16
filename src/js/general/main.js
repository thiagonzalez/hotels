$(function() {
  $('#calendar-picker').dateRangePicker({
    inline: true,
    alwaysOpen: true,
    container: '#calendar-picker-container',
    format: 'MMMM D, YYYY',
    singleMonth: true,
    startDate: new Date()
  }).bind('datepicker-first-date-selected', function(event, obj){
    $('[data-first-date]').text(moment(obj.date1).format('MMMM D, YYYY'));
  }).bind('datepicker-change',function(event,obj){
    $('[data-second-date]').text(moment(obj.date2).format('MMMM D, YYYY'));
  });
});
