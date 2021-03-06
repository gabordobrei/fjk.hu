'use strict';

var util = require('util');

module.exports = function(calculatePrice) {
  $('#shirtOrders').on('change', 'select[name^="shirtType"]', function() {
    var self = $(this);
    var val = self.val();

    var shirtSizeOptions = self
      .parent()
      .children('select[name^="shirtSize"]')
      .children('option');

    shirtSizeOptions.show();

    if (val) {
      self.parent()
        .children('select[name^="shirtSize"], select[name^="shirtQuantity"]')
        .prop('selectedIndex', 0);

      shirtSizeOptions
        .filter(function() { return !$(this).hasClass(val); })
        .hide();
    }
  });

  $('#shirtOrders').on('click', 'a.minusOne', function() {
    $(this).parent().remove();

    calculatePrice();
  });

  $('#shirtOrders').on('change', 'select', function() {
    var row = $(this).parent();
    var price = 1;

    row.children().find(':selected').each(function() {
      price *= $(this).data().singlePrice;
    });

    row.children('input').data('price', price);

    calculatePrice();
  });

  var typeTexts = {
    label: $('select[name="shirtType-1"] option[value=""]').text(),
    men: $('option[value=men]').text(),
    women: $('option[value=women]').text(),
    menHoody: $('option[value=menHoody]').text(),
    womenHoody: $('option[value=womenHoody]').text()
  };

  var sizeTexts = { label: $('select[name="shirtSize-1"] option[value=""]').text() };

  var quantityTexts = { label: $('select[name="shirtQuantity-1"] option[value=""]').text() };

  $('#shirtPlusOne').click(function() {
    var lines = $('#shirtOrders .row');
    var count = lines.length + 1;
    $('#shirtOrders').append(
      '<div class="shirt-order form-inline row" data-count=' + count + '>' +
      '<input class="shirtOrder" type="hidden" data-price=0>' +
      '<select name="shirtType-' + count + '">' +
      '<option value="">' + typeTexts.label + '</option>' +
      '<option value="men" data-single-price=1250>' + typeTexts.men + '</option>' +
      '<option value="women" data-single-price=1250>' + typeTexts.women + '</option>' +
      '<option value="menHoody" data-single-price=4000>' + typeTexts.menHoody + '</option>' +
      '<option value="womenHoody" data-single-price=4500>' + typeTexts.womenHoody + '</option>' +
      '</select>' +
      '<select name="shirtSize-' + count + '">' +
      '<option class="menHoody womenHoody men women" value="" data-single-price=0>' + sizeTexts.label + '</option>' +
      '<option class="menHoody womenHoody men women" value="S" data-single-price=1>S</option>' +
      '<option class="menHoody womenHoody men women" value="M" data-single-price=1>M</option>' +
      '<option class="menHoody womenHoody men women" value="L" data-single-price=1>L</option>' +
      '<option class="menHoody womenHoody men women" value="XL" data-single-price=1>XL</option>' +
      '<option class="menHoody womenHoody men women" value="2XL" data-single-price=1>2XL</option>' +
      '<option class="men" value="3XL" data-single-price=1>3XL</option>' +
      '</select>' +
      '<select name="shirtQuantity-' + count + '">' +
      '<option value="" data-single-price=0>' + quantityTexts.label + '</option>' +
      '<option value="1" data-single-price=1>1</option>' +
      '<option value="2" data-single-price=2>2</option>' +
      '<option value="3" data-single-price=3>3</option>' +
      '<option value="4" data-single-price=4>4</option>' +
      '<option value="5" data-single-price=5>5</option>' +
      '</select>' +
      '<a type="button" class="minusOne plusOne">-</a>' +
      '</div>');
  });

  var image = '<img src="' + window.assetsPath + '/img/%s.jpg" width="%s" height="%s">';
  [
    { name: 'men', w: 400, h: 100 },
    { name: 'women', w: 727, h: 176 },
    { name: 'menHoody', w: 500, h: 431 },
    { name: 'womenHoody', w: 500, h: 289 },
    { name: 'menHoodySize', w: 400, h: 100 },
    { name: 'womenHoodySize', w: 821, h: 252 }
  ].forEach(function(pop) {
    var content = util.format(image, pop.name, pop.w, pop.h);
    $('#popover-' + pop.name).popover({ container: 'body', trigger: 'hover', content: content, html: true });
  });
};
