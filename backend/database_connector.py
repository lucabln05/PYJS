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
    connector.mycursor.execute(f'SELECT * FROM user WHERE username = "{username}" AND password = "{password}"')
    login_data = connector.mycursor.fetchall()
    if login_data:
        connector.mycursor.execute(f'INSERT INTO post (username, content_language, content, title, likes, createt_at) VALUES ("{username}", "{content_language}", "{content}", "{title}", 0, "{now}")')
        connector.mydb.commit()


def get_logi(login_content):
    connector()
    # if username and password is correct return True, if not return False
    server_command, username, password = login_content.split('/--/')
    connector.mycursor.execute(f'SELECT * FROM user WHERE username = "{username}" AND password = "{password}"')
    login_data = connector.mycursor.fetchall()
    if login_data:
        get_logi.login = True
    else:
        get_logi.login = False




