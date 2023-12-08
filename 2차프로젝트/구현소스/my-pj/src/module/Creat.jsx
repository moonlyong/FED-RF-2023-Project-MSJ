import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');

// CreateList 함수 내부에서 useHistory를 사용하지 않고 단순히 데이터 배열을 반환하도록 합니다.
export function CreateList() {
    const ititValues = [];
    $('.basket .imozbox').each(function() {
        const ititText = $(this).find('span').text();
        ititValues.push(ititText);
    });
    return ititValues;
}