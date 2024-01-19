import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');

export function CreateList() {
    const ititValues = [];
    $('.basket .imozbox').each(function() {
        const ititText = $(this).find('span').text();
        ititValues.push(ititText);
    });
    return ititValues;
}