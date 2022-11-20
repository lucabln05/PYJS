import mysql.connector
def create_database():
    mydb = mysql.connector.connect(
        host="localhost",
        user="main",
        password=""
    )

    mycursor = mydb.cursor()
    mycursor.execute("CREATE DATABASE IF NOT EXISTS PYJS_DB")

def create_table():
    mydb_2 = mysql.connector.connect(
        host="localhost",
        user="main",
        password="",
        database="PYJS_DB"
    )

    mycursor_2 = mydb_2.cursor()
    mycursor_2.execute("CREATE TABLE PYJS_Content (post_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), content_language VARCHAR(255), content LONGTEXT, post_date DATETIME)")

create_table()