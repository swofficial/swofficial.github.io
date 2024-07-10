document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Stars World', 
                             'Info',
                             'Join us', 
                             'End'],
        showActiveTooltip: false,
        scrollingSpeed: 1200,
        loopBottom: true,
    });
});
