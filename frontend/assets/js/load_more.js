function load_more() {
    //scroll to the top of the page.
    window.scrollTo(0, 0);
    //refresh the page.
    //wait 1 second.
    setTimeout(function() {
        location.reload();
    }, 1000);
       
}