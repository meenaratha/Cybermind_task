document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.querySelector('.select-selected');
    var itemsElement = document.querySelector('.select-items');

    selectElement.addEventListener('click', function(e) {
        e.stopPropagation();
        itemsElement.classList.remove('select-hide');
        selectElement.classList.toggle('select-arrow-active');
    });

    var options = itemsElement.querySelectorAll('.option');

    options.forEach(function(option) {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            selectElement.innerHTML = option.innerHTML;
            itemsElement.classList.add('select-hide');
            selectElement.classList.remove('select-arrow-active');
        });
    });

    document.addEventListener('click', function() {
        itemsElement.classList.add('select-hide');
        selectElement.classList.remove('select-arrow-active');
    });
    itemsElement.addEventListener('mouseleave', function(){
        itemsElement.classList.add('select-hide');
         selectElement.classList.toggle('select-arrow-active');
    });
});


