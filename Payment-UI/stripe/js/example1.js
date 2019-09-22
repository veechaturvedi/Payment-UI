(function() {
    'use strict';

    var elements = stripe.elements({
        fonts: [{
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        }, ],
        // Stripe's examples are localized to specific languages, but if
        // you wish to have Elements automatically detect your user's locale,
        // use `locale: 'auto'` instead.
        locale: window.__exampleLocale
    });

    var card = elements.create('card', {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: '#EB8519',
                color: '#EB8519',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                ':-webkit-autofill': {
                    color: '#33333',
                },
                '::placeholder': {
                    color: '#66666',
                },
            },
            invalid: {
                iconColor: '#ff4900',
                color: '#ff4900',
            },
        },
    });
    card.mount('#example1-card');

    registerElements([card], 'example1');
})();