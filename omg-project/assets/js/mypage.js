var submit = document.getElementById("submit_button");
submit.onclick = showImage; // submit 버튼 클릭 시, 이미지 보여주기

function loadFile(input) {
    var file = input.files[0]; // 선택된 파일 불러오기

    // 새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "img");

    // 이미지 source 불러오기
    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "200px";
    newImage.style.height = "200px";
    newImage.style.visibility = "hidden"; // 버튼 클릭 전, 이미지 숨기기
    newImage.style.objectFit = "contain";

    // 이미지를 myImg div에 추가
    var container = document.getElementById("myImg");
    container.appendChild(newImage);
}

function showImage() {
    var newImage = document.getElementById("myImg").lastElementChild;

    // 이미지 화면 출력
    newImage.style.visibility = "visible";

    // 이미지 업로드 버튼 숨기기
    document.getElementById("image_upload").style.visibility = "hidden";
    document.getElementById("myText").textContent = null; // 기존 파일 이름 지우기
}
