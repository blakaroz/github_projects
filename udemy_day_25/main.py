# import csv

# with open("weather_data.csv") as data_file:
#     data = csv.reader(data_file)
#     temperatures = []
#     for row in data:
#         if row[1] != "temp":
#             temperatures.append(int(row[1]))
#         #print(row)



# print(temperatures)
import pandas
data = pandas.read_csv("weather_data.csv")
print(data["temp"])

data_dict = data.to_dict()
temp_list = data["temp"].to_list()
print(temp_list)



# temp_avr = sum(temp_list)/ len(temp_list)
#
temp_avr = data["temp"].mean()
print(temp_avr)
temp_max = data["temp"].max()
print(temp_max)