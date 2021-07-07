jQuery(function($) {
    /* Open navigation bar on mobile devices */
    let $nav = $('#sidebar nav ul');
    $('#sidebar nav .toggle button').click(function() {
        $nav.slideToggle('fast');
    });

    /* Buttons and links that show or hide another elements */
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

    /* Sponsor logos, switch height for maximum height */
    $('div.logos img').each(function() {
        let self = $(this);
        let height = self.attr('height');
        self.css('height', 'auto');
        self.css('max-height', height + 'px');
    });
});