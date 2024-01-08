import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch';

let stsWheel = 0;
const TIME_WHEEL = 120;
export function setupSwiper() {
  const cube = $('.cube');
  let stsWheel = 0;
  const TIME_WHEEL = 120;

  let hcode = '';
  for (let i = 0; i < 11; i++) {
      hcode += `<span><img src="./image/player/rp${i + 1}.jpg" alt=""></span>`;
  }
  cube.html(hcode);

  $(window).on('wheel', wheelFn);

  const ppic = $('.cube span img');
  ppic.on('click', clickFn);
}

export function wheelFn(e) {
  const cube = $('.cube');
  let numWheel = 0;

  if (stsWheel) return; // 휠 이벤트 조절
  stsWheel = 1; // 휠 이벤트 잠금
  setTimeout(() => stsWheel = 0, TIME_WHEEL); // 지정된 시간 후 휠 이벤트 잠금 해제

  let delta = e.originalEvent.wheelDelta;
  let cus = $('.cube span');

  if (delta < 0) {
    cube.prepend(cus.last());
    numWheel++;
  } else {
    cube.append(cus.first());
    numWheel--;
  }
}

export function clickFn() {
  const mlogo = $('.mlogo');
  const cube = $('.cube');
  const ppic = $('.cube span img');

  mlogo.addClass('on');
  cube.addClass('on');
  $(this).addClass('big');
  // ppic.on('mouseout', outFn);
}

// function outFn() {
//   const mlogo = $('.mlogo');
//   const cube = $('.cube');
//   $('.mlogo').removeClass('on');
//   cube.removeClass('on');
//   $(this).removeClass('big');
// }
export const SwiperFunctions = {
  setupSwiper,
  wheelFn,
  clickFn,
  // outFn
};