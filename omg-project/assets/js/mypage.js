function loadFile(input) {
    var file = input.files[0]; // 선택된 파일 불러오기

    // 새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", "img");

    // 이미지 source 불러오기
    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "200px";
    newImage.style.height = "200px";
    newImage.style.objectFit = "contain";

    // 이미지를 myImg div에 추가
    var container = document.getElementById("myImg");

    if (container.firstChild) { // 이미지가 존재하는 경우, 삭제 후 등록
        container.textContent = "";
        container.appendChild(newImage);
    } else { // 이미지가 존재하지 않는 경우, 등록
        container.appendChild(newImage);
    }
}
