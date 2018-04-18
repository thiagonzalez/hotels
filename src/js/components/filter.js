var sliderContainer = $('#price-slider'),
    slider = sliderContainer[0],
    minValue = sliderContainer.data('min-value'),
    maxValue = sliderContainer.data('max-value'),
    maxText = $('#price-slider-max-text'),
    minText = $('#price-slider-min-text');

noUiSlider.create(slider, {
  start: [minValue, maxValue],
  connect: true,
  range: {
    'min': minValue,
    '25%': maxValue / 4,
    '50%': maxValue / 2,
    'max': maxValue
  }
});


slider.noUiSlider.on('update', function(values, handle) {
  if (handle) {
    maxText.text(Math.round(values[handle]));
  } else {
    minText.text(Math.round(values[handle]));
  }
});
