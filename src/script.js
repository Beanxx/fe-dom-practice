let elInputUsername = document.querySelector("#username");
let elFailureMessage = document.querySelector(".failure-message");
let elSuccessMessage = document.querySelector(".success-message");

let elPassword = document.querySelector("#password");
let elRePassword = document.querySelector("#password-retype");
let elPasswordMessage = document.querySelector(".mismatch-message");

// 아이디 입력란에 키보드가 눌렸을 때 실행
elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value);
  // isMoreThan4Length 함수가 true일 때
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공 메시지가 보여야 함
    elSuccessMessage.classList.remove("hide");

    // 실패 메시지가 가려져야 함
    elFailureMessage.classList.add("hide");
  } else {
    // isMoreThan4Length 함수가 false일 때
    // 성공 메시지가 가려져야 함
    elSuccessMessage.classList.add("hide");

    // 실패 메시지가 보여야 함
    elFailureMessage.classList.remove("hide");
  }
};

// 비밀번호 확인 입력란에 키보드가 눌렸을 때 실행
elRePassword.onkeyup = function () {
  // isMatch 함수가 true일 때
  if (isMatch(elPassword.value, elRePassword.value)) {
    // 실패 메시지가 가려져야 함
    elPasswordMessage.classList.add("hide");
  } else {
    // isMatch 함수가 false일때
    // 실패 메시지가 보여야 함
    elPasswordMessage.classList.remove("hide");
  }
};

// 1. 아이디 유효성 검사: 아이디가 4글자 이상이여야 함
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 2. 비밀번호 유효성 검사: 처음 입력한 비밀번호 내용과 비밀번호 확인란의 내용이 같아야 함
function isMatch(password1, password2) {
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}
