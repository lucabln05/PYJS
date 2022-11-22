#This script create the database and the tables for the social media website

import mysql.connector

#create the database
def create_database():
    mydb = mysql.connector.connect(
        host="localhost",
        user="main",
        password=""
    )

    mycursor = mydb.cursor()
    mycursor.execute("CREATE DATABASE IF NOT EXISTS PYJS_DB")

#create the tables
def create_table():
    mydb_2 = mysql.connector.connect(
        host="localhost",
        user="main",
        password="",
        database="PYJS_DB"
    )

    mycursor_2 = mydb_2.cursor()
    try:
        mycursor_2.execute("CREATE TABLE post (post_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), content_language VARCHAR(255), content LONGTEXT, title TEXT, likes INT, createt_at DATETIME)")
    except:
        print("Table post already exists")
    try:
        mycursor_2.execute("CREATE TABLE user (username VARCHAR(255) PRIMARY KEY, password VARCHAR(255), email VARCHAR(255), follower INT, following INT, bio VARCHAR(255), createt_at DATETIME)")
    except:
        print("Table user already exists")
    try:
        mycursor_2.execute("CREATE TABLE post_liked_user(post_id INT, user_id INT, liked_at DATETIME)")
    except:
        print("Table post_liked_user already exists")
    try:
        mycursor_2.execute("CREATE TABLE follow(following_user_id INT, follower_user_id INT, follow_at DATETIME)")
    except:
        print("Table follow already exists")

#run the functions first database then tables
create_database()
create_table()