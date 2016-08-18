import $ from 'jquery';

export function init() {
  const template = $('#attendance-review-template').html();
  const insertSelector = $('#nav-main-frame').find('ul').last();
  insertSelector.append(template);
}
