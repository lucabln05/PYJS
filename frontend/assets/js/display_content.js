
// ^%^ Split the content from one post into an array of lines. ^$^ Split the post 
// raw content from the server.
// write hello world if the content from html is not empty
    var raw_content =  localStorage.getItem('raw_data');
     // seperate the post from the raw content.
    var user_posts = raw_content.split('^$^');

    // display every post.
    for (post in user_posts) {
        document.write('</br>'); // Add a line break between posts.
        // ^%^ Split the post into an array of lines.
        var post_content = user_posts[post].split('^%^');

        /* write the content to the page */
        for (line in post_content) {
            switch (line) {
                /* display the username */
                case '0':
                    document.write('<h2 id="published_user'+ line +'" style="margin-right: 156px;padding-right: 43px;">@' + post_content[line] + '</h2>');
                    break;
                /* display the language */
                case '1':
                    document.write('<h6 id="code_language'+ line +'" style="margin-right: 237px;">' + post_content[line] + '</h6>')
                    break;
            /* display the code */
                default:
                    var line_display = line-1 + ' ' + post_content[line];
                    document.write('<div id="code_content'+ line +'" style="padding-left: 10px;padding-bottom: 2px; padding-top: 5px; background-color: rgb(22, 27, 34);color: white;">' + line_display + '</div>');
                    break;
                }
        }
    }
