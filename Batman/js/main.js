jQuery(function () {
    var menuItems = $('.menu-item');
    menuItems.on('click', function (event) {
        event.preventDefault();
        var target = $(event.target).attr('href');
        for (const element of menuItems) {
            var tmp = $(element).attr('href');
            if (tmp !== target) {
                $(tmp).hide()
                $(element).css({ 'color': 'black' });
            }
            else {
                $(target).show();
                $(element).css({ 'color': '#FF8F27' });
            }

        }
    });
});
