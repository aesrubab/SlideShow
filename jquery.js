$(document).ready(function () {
    const slide = [
        "https://cdn.ntvspor.net/ec854f59a90644ab98ffc3acd40c84fa.jpg?mode=crop&w=940&h=626",
        "https://images.oxu.az/2024/08/08/lWZoLFBEJaUWyuCKVj94GL17d3zKfXbyGETWAUQO:1200.jpg",
        "https://image.hurimg.com/i/hurriyet/75/0x0/673101288344db512b4d407d.jpg",
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/677f/live/4a94dba0-a988-11ee-b24e-51da5a67bed3.jpg.webp",
        "https://leadership.ng/wp-content/uploads/2023/09/Altay-Bayindir.jpg"
    ];
    let currentSlide = 0;
    //yeniden evvelden baslasin deye
    function slideShow(index) {
        $("#slide").attr("src", slide[index]);
        $("#container img").removeClass("active");
        $(`#container img[data-index=${index}]`).addClass("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slide.length;
        slideShow(currentSlide);
    }

    function beforeSlide() {
        currentSlide = (currentSlide === 0) ? slide.length - 1 : currentSlide - 1;
        slideShow(currentSlide);
    }

    $("#next").click(function () {
        nextSlide();
    });
    $("#before").click(function () {
        beforeSlide();
    });

    slide.forEach((imgSrc, index) => {
        const thumbnail = $(`<img src="${imgSrc}" data-index="${index}" class="thumbnail">`);
        $("#container").append(thumbnail);

        thumbnail.click(function () {
            currentSlide = index;
            slideShow(currentSlide);
        });
    });

    slideShow(currentSlide);
});
