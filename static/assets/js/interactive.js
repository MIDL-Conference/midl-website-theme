jQuery(function($) {
    var $nav = $('#sidebar nav ul');
    $('#sidebar nav .toggle button').click(function() {
        $nav.slideToggle('fast');
    });

    $('.toggle_visibility').click(function() {
        var self = $(this);
        var selector = self.data('selector');
        var level = self.data('level');

        var rootElement = self;
        if (typeof level == 'undefined') {
            level = 1;
        }
        for (var i = 0; i < parseInt(level); ++i) {
            rootElement = rootElement.parent();
        }

        if (selector) {
            rootElement = rootElement.find(selector);
        }

        rootElement.slideToggle('fast');
    });
});