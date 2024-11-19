//랜덤번호 저장
//유저가 번호를 입력 그리고 go라는 버튼을 누름
//유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 <유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Rest버튼을 누르면 게임이 리셋된다.
//5본의 기회를 다 쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//dbwjrk 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다., 기회를 깎지 않는다.

let computernum = 0;

function pickRandomNum() {
  computernum = Math.floor(Math.random() * 100) + 1;
  //math.floor은 따로 찾아보기***
  //Math.random란 랜덤으로 숫자를 뽑을 수 있게 도와주는 함수
  //0~1까지의 숫자 소수점까지 나오게 한다.
  console.log("정답", computernum);
}
pickRandomNum();
