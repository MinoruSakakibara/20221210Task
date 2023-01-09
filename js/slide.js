let images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg']
let current = 0;

let pageNum = function() {
    document.getElementById('page').textContent =(current + 1) + '/' + images.length;
}

let changeImage = function(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
};

pageNum();

document.getElementById('prev').onclick = function() {
    changeImage(-1);
};

document.getElementById('next').onclick = function() {
    changeImage(1);
};

document.getElementById('thumb1').onclick = function() {
    document.getElementById('main_image').src = images[0];
    current = 0;
    pageNum();
}

document.getElementById('thumb2').onclick = function() {
    document.getElementById('main_image').src = images[1];
    current = 1;
    pageNum();
}

document.getElementById('thumb3').onclick = function() {
    document.getElementById('main_image').src = images[2];
    current = 2;
    pageNum();
}

document.getElementById('thumb4').onclick = function() {
    document.getElementById('main_image').src = images[3];
    current = 3;
    pageNum();
}

document.getElementById('thumb5').onclick = function() {
    document.getElementById('main_image').src = images[4];
    current = 4;
    pageNum();
}