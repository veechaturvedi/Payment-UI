$(document).ready(function() {
    /*radio button select set up payment*/
    var flag = ""
    $("input[name='payment-option']").click(function() {
        if ($('#payone').is(":checked")) {
            flag = 1;
            radiobutonValue = $("input[name='payment-option']:checked").val();
        } else if ($('#paytwo').is(":checked")) {

            flag = 2;
        } else if ($('#paythree').is(":checked")) {
            flag = 3;
        } else {
            flag = 4;
        }
    });

    /*page navigation as per payment radio button selected*/
    $('#setupPayment').click(function() {
        if (flag == 1) {
            $('.chs-container').show()
            $('.card-container').hide();
            $('.apay-container').hide();
            $('.gpay-container').hide();
        } else if (flag == 2) {
            $('.chs-container').hide()
            $('.card-container').show();
            $('.apay-container').hide();
            $('.gpay-container').hide();
        } else if (flag == 3) {
            $('.chs-container').hide()
            $('.card-container').hide();
            $('.apay-container').show();
            $('.gpay-container').hide();
        } else {
            $('.chs-container').hide()
            $('.card-container').hide();
            $('.apay-container').hide();
            $('.gpay-container').show();
        }
    });
});


// Add active class to the current button (highlight it)
$(document).ready(function() {
    $('.payment-method a.thumbnail').click(function() {
        $('.payment-method a.thumbnail').removeClass("active");
        $(this).addClass("active");
    });
});

// Steper form

$(document).ready(function() {
    $('.stepper-form fieldset:first-child').fadeIn('slow');

    $('.stepper-form input[type="text"]').on('focus', function() {
        $(this).removeClass('input-error');
    });

    // next step
    $('.stepper-form .btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"],input[type="email"]').each(function() {
            // if ($(this).val() == "") {
            //     $(this).addClass('input-error');
            //     next_step = false;
            // } else {
            //     $(this).removeClass('input-error');
            // }
            // Do some validation if required any or remove commented section
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function() {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.stepper-form .btn-previous').on('click', function() {
        $(this).parents('fieldset').fadeOut(400, function() {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.stepper-form').on('submit', function(e) {

        $(this).find('input[type="text"],input[type="email"]').each(function() {
            // if ($(this).val() == "") {
            //     e.preventDefault();
            //     $(this).addClass('input-error');
            // } else {
            //     $(this).removeClass('input-error');
            // }

            // Do some validation if required any or remove commented section
        });

    });


});


// Image Upload plugin
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});


// store-image 1

// Image Upload plugin
function readURL1(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap1').hide();

            $('.file-upload-image1').attr('src', e.target.result);
            $('.file-upload-content1').show();

            $('.image-title1').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload1();
    }
}

function removeUpload1() {
    $('.file-upload-input1').replaceWith($('.file-upload-input1').clone());
    $('.file-upload-content1').hide();
    $('.image-upload-wrap1').show();
}
$('.image-upload-wrap1').bind('dragover', function() {
    $('.image-upload-wrap1').addClass('image-dropping1');
});
$('.image-upload-wrap1').bind('dragleave', function() {
    $('.image-upload-wrap1').removeClass('image-dropping1');
});

// Image Upload plugin
function readURL2(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap2').hide();

            $('.file-upload-image2').attr('src', e.target.result);
            $('.file-upload-content2').show();

            $('.image-title2').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload2();
    }
}

function removeUpload2() {
    $('.file-upload-input2').replaceWith($('.file-upload-input2').clone());
    $('.file-upload-content2').hide();
    $('.image-upload-wrap2').show();
}
$('.image-upload-wrap2').bind('dragover', function() {
    $('.image-upload-wrap2').addClass('image-dropping2');
});
$('.image-upload-wrap2').bind('dragleave', function() {
    $('.image-upload-wrap2').removeClass('image-dropping2');
});