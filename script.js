$(document).ready(function(){
    $('#greet-btn').click(function(){
        $('#greeting').text('Hello! Welcome to Jquery');
    });
});

//calculator
$(document).ready(function(){
    $('.addBtn').click(function(){
        let sum = parseFloat($('#num1').val()) + parseFloat($('#num2').val());
        return $('.answer').text(`The sum is ${sum}`);
    });

    $('.subtractBtn').click(function(){
        let difference = parseFloat($('#num1').val()) - parseFloat($('#num2').val());
        return $('.answer').text(`The difference is ${difference}`);
    });

    $('.divideBtn').click(function(){
        let quotient = parseFloat($('#num1').val()) / parseFloat($('#num2').val());
        return $('.answer').text(`The quotient is ${quotient}`);
    });

    $('.multiplyBtn').click(function(){
        let product = parseFloat($('#num1').val()) * parseFloat($('#num2').val());
        return $('.answer').text(`The sum is ${product}`);
    });
});