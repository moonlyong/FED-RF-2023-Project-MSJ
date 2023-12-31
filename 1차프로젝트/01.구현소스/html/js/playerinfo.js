// 회전제어 JS - cube2.js //////////////

/************************************* 
    [구현내용]
    - 마우스휠 이벤트에 따라 기본기능은
    막고 큐브를 회전하는 속성인 transform의
    rotateY(각도)의 값변경을 이용한
    큐브 회전을 적용함!
    - 대상: window
    - 사용이벤트 : wheel
    - 단위각도 : 360도 / 9개 = 40도
    - CSS 이징적용 : ease-out

*************************************/

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

  const cube = domFn.qs('.cube');

  // 0. 변수셋팅
  // 단위각도
  const DEG = 40;
  // 광휠상태변수(0-허용,1-금지)
  let stsWheel = 0;
  // 휠제어시간
  const TIME_WHEEL = 120;
  // 휠단위수(휠할때 증감하는수)
  let numWheel = 0;

  let hcode = ''

  for(let i = 0; i <11;i++){
    hcode += `
    <span><img src="./image/player/rp${i+1}.jpg" alt=""></span>
    `
  }

  cube.innerHTML = hcode

  // 1. 대상선정 : .cube
  // console.log('대상:',cube);

  /// 2. 이벤트 설정하기 
  domFn.addEvt(window,'wheel',wheelFn);

  // 3. 함수만들기 ///////
  function wheelFn(){

    // 0. 휠이벤트 발생수 조절하기(광휠금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금!
    setTimeout(()=>stsWheel=0,TIME_WHEEL); //해제

    // 1. 휠방향 알아내기 : 휠델타
    let delta = event.wheelDelta;

    
    // 2. 방향에 따른 휠단위수 증감하기
    if(delta<0){
        // 휠단위수 증가
        
         let cus = domFn.qsa('.cube span')
        // 맨뒤 li 맨앞으로 이동
        // insertBefore(넣을놈,넣을놈전놈)
        cube.insertBefore(cus[cus.length-1],cus[0])
        numWheel++;
    }
    else{
        let cus = domFn.qsa('.cube span')[0]
        // console.log(cus)
        cube.appendChild(cus)
       
        // 휠단위수 감소
        numWheel--;
    }

    // 호출확인
    // console.log('휠!~~~~',delta,numWheel);

  } //////////// rotateMem 함수 ///////////

  let ppic =  domFn.qsa('.cube span img')
  console.log(ppic)
  ppic.forEach(ele => {
    domFn.addEvt(ele,'click',clickFn);
  });

  function clickFn(){
    let mlogo = domFn.qs('.mlogo')
    console.log(this)
    mlogo.classList.add('on')
    cube.classList.add('on')
    this.classList.add('big')
    ppic.forEach(ele => {
      domFn.addEvt(ele,'mouseout',outFn)
      function outFn(){
        mlogo.classList.remove('on')
        cube.classList.remove('on')
        this.classList.remove('big')
      }
    })
  }