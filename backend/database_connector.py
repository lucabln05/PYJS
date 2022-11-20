import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="main",
    password="",
    database="PYJS_DB"
)

mycursor = mydb.cursor()
raw_content = ' '
for rows in range(10):
    mycursor.execute(f'SELECT * FROM pyjs_content ORDER BY RAND() LIMIT 1')
    random_content = mycursor.fetchall()
    raw_content += str(random_content)
    
print(raw_content)
