(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-33818296-1', 'webjato.com.br');
ga('send', 'pageview');

var gaEvent = function(category_req, action_req, label_opt) {
	ga('send', {
		hitType: 'event',
		eventCategory: category_req,
		eventAction: action_req,
		eventLabel: label_opt
	});
}