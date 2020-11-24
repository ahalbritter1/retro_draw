function makeGrid(makeGrid) {
    function makePalette() {

        for (let i = 0; i < 64; i++) {
            let newDiv = $('<div class="cell">')
            $('.grid').append(newDiv);
        }

        const PALETTE = [
            'red',
            'blue',
            'yellow',
            'green'
        ]

        for (let i = 0; i < PALETTE.length; i++) {
            const nextColor = PALETTE[i];
            const button = $('<button>')
                .css("backgroundColor", nextColor);
            $('.palette').append(button);

            $('.palette button').first().addClass('active');
        }

    }

    makePalette();
}

makeGrid();

function onPaletteClick() {
    $('.palette button').removeClass('active');
    $(this).addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    $('.grid .cell').click(function () {
        if ($(this).css('backgroundColor') === $('.palette .active').css('backgroundColor')) {
            $(this).css('backgroundColor', 'rgba(0, 0, 0, 0');
        }
        else $(this).css("backgroundColor", $('.palette .active').css('backgroundColor'))
    });
}
onGridClick();

function onClearClick() {
    $('.controls .clear').click(function () {
        $('.grid .cell').css("backgroundColor", "");
    })
}

onClearClick();

function onFillAllClick() {
    $('.controls .fill-all').click(function () {
        $(".grid .cell").css("backgroundColor", $('.palette .active').css('backgroundColor'))
    })
}

onFillAllClick()

function onFillEmptyClick() {
    $('.controls .fill-empty').click(function () {
        const elements = $('.grid .cell')
        for (let index = 0; index < elements.length; index = index + 1) {
            let nextElement = $(elements[index]);
            if (nextElement.css('backgroundColor') === 'rgba(0, 0, 0, 0)') {
                nextElement.css('backgroundColor', $('.palette .active').css('backgroundColor'))
            }
        }
    })
}
onFillEmptyClick();

function addColor() {
    $('.addColor').click(function () {
        let textValue = $('.inputText').val()
        let newColorButton = $("<button>").css("backgroundColor", textValue).click(onPaletteClick)
        $('.palette').prepend(newColorButton);
        $('.palette button').removeClass('active');

        $('.palette button').first().addClass('active');
    })
}

addColor();

// function colorSpreader() {
//     $('.grid .cell').click(function () {
//         let mouseisDown = false;
//         if ($('.grid .cell').on('mousedown', function () {
//             $(this).css('backgroundColor', $('.palette .active'))
//         }
//     if$('.grid .cell')on('mouseup', function ()) {
//             $(this) == false;
//     }
// }

// colorSpreader();

function customGridSize() {
    $(".addRows").click(function () {
        let rowsValue = $('.newRows').val()
        for (let i = 0; i <= rowsValue; i++)
            // You don't have to add a class here but you do need to add the click handler for these to work like the other cells
            $('.grid').append($('<div class="cell">').click(onGridClick))

    })
}
$(".addColumns").click(function () {
    let columnsValue = $('.newColumns').val()
    for (let i = 0; i <= columnsValue; i++)
        $('.grid').append($('<div class="cell">').click(onGridClick))
}
);

customGridSize();
