jQuery(function($) {
    let $nav = $('#sidebar nav ul');
    $('#sidebar nav .toggle button').click(function() {
        $nav.slideToggle('fast');
    });

    $('.toggle_visibility').click(function() {
        let self = $(this);
        let selector = self.data('selector');
        let level = self.data('level');

        let rootElement = self;
        if (typeof level == 'undefined') {
            level = 1;
        }
        for (let i = 0; i < parseInt(level); ++i) {
            rootElement = rootElement.parent();
        }

        if (selector) {
            rootElement = rootElement.find(selector);
        }

        rootElement.slideToggle('fast');
    });
});