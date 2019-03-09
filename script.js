upload.onclick = function() {

    let input = document.createElement('input');
    input.type = 'file';
    input.accept = "image/jpeg,image/png,image/gif";

    input.onchange = e => {
        let file = e.target.files[0];
        console.log(file.name);
        console.log(file.size);
        if(file.size < 5000) {

            document.getElementById('uploadItem').innerHTML = file.name + " (" + file.size + "Кб)";
            document.getElementById('resultPositive').innerHTML = "Проверено";
            document.getElementById('resultBlock').classList.add("show");
            document.getElementById('negative').classList.remove("show");
        }else{
            document.getElementById('negative').classList.add("show");
            document.getElementById('resultNegative').innerHTML = "Отклонено";
            document.getElementById('resultBlock').classList.remove("show");
        }
    }

    input.click();


}