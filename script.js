let textContent = $('#text-content');
let textHeader = $('#text-header h1');
let textDate = $('#text-header span');

$('.card').hover(function() {
    let card = $(this)
    textContent.html(card.find(".card-body").html());
    textHeader.text(card.find(".card-header h2").text());
    textDate.text(card.find(".card-header p").text())
});

$(document).ready(() => {
    $('.card:last-of-type').trigger("mouseover");
})
