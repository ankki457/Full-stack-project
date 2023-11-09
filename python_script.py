import mysql.connector
import json

db_config = {
    "host": "localhost", 
    "user": "root",  
    "password": "Ankit@457",  
    "database": "city_wise_contry"  
}

data_to_insert = [
    ('India', 'Maharashtra', 50),
    ('India', 'Madhya Pradesh', 65),
    ('India', 'Andhra Pradesh', 55)
]

connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS location_data (
        country VARCHAR(255),
        state VARCHAR(255),
        city_count INT
    )
""")

insert_query = "INSERT INTO location_data (country, state, city_count) VALUES (%s, %s, %s)"
cursor.executemany(insert_query, data_to_insert)
connection.commit()

cursor.execute("SELECT * FROM location_data")
data = cursor.fetchall()

cursor.close()
connection.close()

data_list = []
for row in data:
    data_dict = {
        "country": row[0],
        "state": row[1],
        "city_count": row[2]
    }
    data_list.append(data_dict)

with open("country_data.json", "w") as json_file:
    json.dump(data_list, json_file, indent=4)

print("Data inserted into the database and exported to 'country_data.json'")
