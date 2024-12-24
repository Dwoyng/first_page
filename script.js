function login() {
    const Ques1 = document.getElementById('ques1').value.trim();
    const Ques2 = document.getElementById('ques2').value.trim();
    const Question3 = document.getElementById('ques3').value.trim();
    const errorElement = document.getElementById('error');

    console.log("Inputs:", Ques1, Ques2, Question3); // Debugging

    // Các câu trả lời hợp lệ
    const validQues1 = ["Vương Ngọc Hà", "Hà", "vương ngọc hà"];
    const validQues2 = ["Hà Liu", "hà liu", "Hà liu", "hà Liu"];
    const validQues3 = ["Thái Tuấn Dương", "Dương", "Chó", "chó", "Dwoyng", "dương", "cậu", "dwoyng"];

    const isQues1Valid = validQues1.includes(Ques1);
    const isQues2Valid = validQues2.includes(Ques2);
    const isQues3Valid = validQues3.includes(Question3);

    console.log("Validation:", isQues1Valid, isQues2Valid, isQues3Valid); // Debugging

    // Kiểm tra các câu trả lời
    if (isQues1Valid && isQues2Valid && isQues3Valid) {
        // Chuyển hướng trang
        window.location.assign("https://dwoyng.github.io/nhungloinhanhu/");
    } else if (isQues1Valid && isQues2Valid && !isQues3Valid) {
        alert("Sai rồi đấy, xem lại xem thằng nào đẹp zai nhất đi :))))");
    }
    else if (!isQues1Valid && isQues2Valid && isQues3Valid) {
        alert("Tên mình còn viết sai là thế nào đây !")
    }
    else if (isQues1Valid && !isQues2Valid && isQues3Valid) {
        alert("Sai câu 2 rồi cưng ơiiiiii")
    }
    else if (!isQues1Valid && !isQues2Valid && isQues3Valid) {
        alert("Sai câu 1, 2 rồi cưng ơiiiiii")
    }
    else if (isQues1Valid && !isQues2Valid && !isQues3Valid) {
        alert("Sai câu 2, 3 rồi cưng ơiiiiii")
    }
    else if (!isQues1Valid && isQues2Valid && !isQues3Valid) {
        alert("Sai câu 1, 3 rồi cưng ơiiiiii")
    }
    else {
        alert("Sai hết rồi cưng ơi, làm lại đi :)))");
    }
}