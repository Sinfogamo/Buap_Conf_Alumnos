$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarHeader'
})