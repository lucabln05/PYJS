# this script connect to the database and give the server the requested data

def connector():
    import mysql.connector

    connector.mydb = mysql.connector.connect(
        host="localhost",
        user="main",
        password="",
        database="PYJS_DB"
    )
    connector.mycursor = connector.mydb.cursor()

# check if username and password is correct
def check_user(username, password):
    connector.mycursor.execute(f'SELECT * FROM user WHERE username = "{username}" AND password = "{password}"')
    check_user.login_data = connector.mycursor.fetchall()

def get_post():
    connector()
    get_post.content = ''
    for rows in range(10):
        connector.mycursor.execute(f'SELECT * FROM post ORDER BY RAND() LIMIT 1 ')
        random_content = connector.mycursor.fetchall()
        for (post_id, username, content_language, content, title, likes, createt_at) in random_content:
            split_content = '/--/'
            split_post = '^$^'
            get_post.content += f'{post_id} {split_content} {username} {split_content} {content_language} {split_content} {likes} {split_content} {createt_at} {split_content} {title} {split_content} {content} {split_post}'

def add_post(post_content):
    #get date and time now
    import datetime
    now = datetime.datetime.now()
    now = now.strftime("%Y-%m-%d %H:%M:%S")

    connector()
    server_command, username, password, content_language, title, content = post_content.split('/--/')
    check_user(username, password)
    if check_user.login_data:
        connector.mycursor.execute(f'INSERT INTO post (username, content_language, content, title, likes, createt_at) VALUES ("{username}", "{content_language}", "{content}", "{title}", 0, "{now}")')
        connector.mydb.commit()

def get_logi(login_content):
    connector()
    # if username and password is correct return True, if not return False
    server_command, username, password = login_content.split('/--/')
    check_user(username, password)
    if check_user.login_data:
        get_logi.login = True
    else:
        get_logi.login = False

def get_usco(login_content):
    connector()
    server_command, username, password = login_content.split('/--/')
    check_user(username, password)

    get_usco.content = ''
    # check how many posts the user has 
    connector.mycursor.execute(f'Select COUNT(*) FROM post WHERE username = "{username}"')
    rows_total = connector.mycursor.fetchall()
    # get all posts from the user if the login data is correct
    if check_user.login_data:
        # get all posts from the user (rows_total)
        for rows in range(rows_total[0][0]):
            connector.mycursor.execute(f'SELECT * FROM post WHERE username = "{username}" LIMIT {rows}, {rows}')  # get post from user only one by one 
            random_content = connector.mycursor.fetchall()
            # made the content readable for the client
            for (post_id, username, content_language, content, title, likes, createt_at) in random_content:
                        split_content = '/--/'
                        split_post = '^$^'
                        get_usco.content += f'{post_id} {split_content} {username} {split_content} {content_language} {split_content} {likes} {split_content} {createt_at} {split_content} {title} {split_content} {content} {split_post}'


