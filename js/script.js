document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 간단한 유효성 검사
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('모든 필드를 채워주세요!');
        return;
    }

    // 회원가입 처리 시뮬레이션 (실제로는 서버와 통신 필요)
    alert('회원가입이 완료되었습니다!\n사용자 이름: ' + username + '\n이메일: ' + email);
});
