$(document).ready(function () {
        arrowUpEq();
        arrowDownEq();
        pushArrowUpPr();
        pushArrowDownPr();
        partnersSlider();
        increaseCertSize();
        rotateImagesInSlider();
    }
);
function arrowUpEq() {
    var clickCounter = 0;
    var promoArray = ['images/right1.png', 'images/promoImg1.png', 'images/promoImg2.png'];

    $('#gearTypeTringUp').on('click', function () {
        clickCounter++;
        if (clickCounter === 3) {
            clickCounter = 0;
            $('.circleEquipment').css({
                'background-image': 'url(' + promoArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
        else {
            $('.circleEquipment').css({
                'background-image': 'url(' + promoArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
    });
}
function arrowDownEq() {
    var clickCounter = 3;
    var promoPathsArray = ['images/right1.png', 'images/promoImg1.png', 'images/promoImg2.png'];
    $('#gearTypeTringDown').on('click', function () {
        clickCounter--;
        if (clickCounter < 0) {
            clickCounter = 3;
            $('.circleEquipment').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
        else {
            $('.circleEquipment').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
    });
}
function pushArrowDownPr() {
    var clickCounter = 3;
    var promoPathsArray = ['images/right2.png', 'images/promoImg3.png', 'images/promoImg4.png'];
    $('#gearTypeTringPrDown').on('click', function () {
        clickCounter--;
        if (clickCounter < 0) {
            clickCounter = 3;
            $('.circleProducts').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
        else {
            $('.circleProducts').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
    });
}
function pushArrowUpPr() {
    var clickCounter = 0;
    var promoPathsArray = ['images/right2.png', 'images/promoImg3.png', 'images/promoImg4.png'];
    $('#gearTypeTringUpPr').on('click', function () {
        clickCounter++;
        if (clickCounter === 3) {
            clickCounter = 0;
            $('.circleProducts').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
        else {
            $('.circleProducts').css({
                'background-image': 'url(' + promoPathsArray[clickCounter] + ')',
                'background-repeat': 'no-repeat', 'background-position': '50%'
            });
        }
    });
}
function partnersSlider() {
    $('#pPar1').on('click', function () {
        $(this).css({'font-weight': 'normal'});
        $('#pTring1').css({'visibility': 'visible'});
        $('#pTring2').css({'visibility': 'hidden'});
        $('#pTring3').css({'visibility': 'hidden'});
        $('#pTring4').css({'visibility': 'hidden'});
        $('#pPar2').css({'font-weight': 'bold'});
        $('#pPar3').css({'font-weight': 'bold'});
        $('#pPar4').css({'font-weight': 'bold'});
        $('#banner1').css('background-image', 'url(images/alstom.png)');
        $('#banner2').css('background-image', 'url(images/specauto.png)');
        $('#banner3').css('background-image', 'url(images/shneider.png)');
        $('#banner4').css('background-image', 'url(images/holmer.png)');
        $('#banner5').css('background-image', 'url(images/wikus.png)');
        $('#banner6').css('background-image', 'url(images/caterplillar.png)');
    });

    $('#pPar2').on('click', function () {
        $(this).css({'font-weight': 'normal'});
        $('#pPar1').css({'font-weight': 'bold'});
        $('#pPar3').css({'font-weight': 'bold'});
        $('#pPar4').css({'font-weight': 'bold'});
        $('#pTring1').css({'visibility': 'hidden'});
        $('#pTring2').css({'visibility': 'visible'});
        $('#pTring3').css({'visibility': 'hidden'});
        $('#pTring4').css({'visibility': 'hidden'});
        $('#banner1').css('background-image', 'url(images/shneider.png)');
        $('#banner2').css('background-image', 'url(images/specauto.png)');
        $('#banner3').css('background-image', 'url(images/alstom.png)');
        $('#banner4').css('background-image', 'url(images/caterplillar.png)');
        $('#banner5').css('background-image', 'url(images/wikus.png)');
        $('#banner6').css('background-image', 'url(images/holmer.png)');
    });
    $('#pPar3').on('click', function () {
        $(this).css({'font-weight': 'normal'});
        $('#pPar1').css({'font-weight': 'bold'});
        $('#pPar2').css({'font-weight': 'bold'});
        $('#pPar4').css({'font-weight': 'bold'});
        $('#pTring1').css({'visibility': 'hidden'});
        $('#pTring2').css({'visibility': 'hidden'});
        $('#pTring3').css({'visibility': 'visible'});
        $('#pTring4').css({'visibility': 'hidden'});
        $('#banner1').css('background-image', 'url(images/holmer.png)');
        $('#banner2').css('background-image', 'url(images/wikus.png)');
        $('#banner3').css('background-image', 'url(images/caterplillar.png)');
        $('#banner4').css('background-image', 'url(images/alstom.png)');
        $('#banner5').css('background-image', 'url(images/specauto.png)');
        $('#banner6').css('background-image', 'url(images/shneider.png)');
    });
    $('#pPar4').on('click', function () {
        $(this).css({'font-weight': 'normal'});
        $('#pPar1').css({'font-weight': 'bold'});
        $('#pPar2').css({'font-weight': 'bold'});
        $('#pPar3').css({'font-weight': 'bold'});
        $('#pTring1').css({'visibility': 'hidden'});
        $('#pTring2').css({'visibility': 'hidden'});
        $('#pTring3').css({'visibility': 'hidden'});
        $('#pTring4').css({'visibility': 'visible'});
        $('#banner1').css('background-image', 'url(images/alstom.png)');
        $('#banner2').css('background-image', 'url(images/wikus.png)');
        $('#banner3').css('background-image', 'url(images/caterplillar.png)');
        $('#banner4').css('background-image', 'url(images/holmer.png)');
        $('#banner5').css('background-image', 'url(images/specauto.png)');
        $('#banner6').css('background-image', 'url(images/shneider.png)');
    });
}
function increaseCertSize() {
    $('#cert').on('click', function () {
        if ($(this).hasClass("certClicked") === false) {

            $(this).animate({height: '505px', 'width': '379px'}).css({
                'background-size': '379px 505px'
            }).addClass("certClicked");

        }
        else if ($(this).hasClass("certClicked") === true) {
            $('#cert').on('click', function () {
                $(this).animate({height: '405px', 'width': '279px'}).css({
                    'background-size': '279px 405px'
                }).removeClass("certClicked");
            });
        }
    });
}
function rotateImagesInSlider() {
    setTimeout(function () {
        $('#SecondSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
    }, 2000);
    setTimeout(function () {
        $('#ThirdThirdLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
    }, 4000);
    setTimeout(function () {
        $('#SecondSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
    }, 6000);
    setTimeout(function () {
        $('#FourthSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
    }, 8000);
    setTimeout(function () {
        $('#ThirdSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
    }, 10000);
    setTimeout(function () {
        $('#FourthSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
    }, 12000);
    setTimeout(function () {
        $('#ThirdSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
    }, 14000);
    setTimeout(function () {
        $('#ThirdThirdLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
    }, 16000);
    setInterval(function () {
        setTimeout(function () {
            $('#SecondSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
        }, 2000);
        setTimeout(function () {
            $('#ThirdThirdLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
        }, 4000);
        setTimeout(function () {
            $('#SecondSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
        }, 6000);
        setTimeout(function () {
            $('#FourthSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
        }, 8000);
        setTimeout(function () {
            $('#ThirdSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(+90deg)'});
        }, 10000);
        setTimeout(function () {
            $('#FourthSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
        }, 12000);
        setTimeout(function () {
            $('#ThirdSecondLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
        }, 14000);
        setTimeout(function () {
            $('#ThirdThirdLayer').css({'transition': 'all 600ms', 'transform': 'rotateX(0deg)'});
        }, 16000);
    }, 18000);
}