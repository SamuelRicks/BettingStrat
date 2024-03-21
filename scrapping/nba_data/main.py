# # #for data chart creation
# import pandas as pd
# pd.set_option('display.max_columns', None)

# # # #to request information from websites on the web
# import requests

# # #These are the test websites that we have used to grab nba data
# test_url = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2023-24&SeasonType=Regular%20Season&StatCategory=PTS"
# test_url2 = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2022-23&SeasonType=Regular%20Season&StatCategory=PTS"

# # #data request from nba
# r = requests.get(url=test_url).json()

# #tables creation
# table_set = r["resultSet"]["headers"]
# player_stats = r["resultSet"]["rowSet"]

# df = pd.DataFrame(player_stats, columns=table_set)
# df.to_csv('data.csv')

# #seperation for the players and their ids
# # player_id = df["PLAYER_ID"]
# # player_name = df["PLAYER"]
# # player_team = df["TEAM"]

# # for postition in range(len(player_id)):
# #      player_name[postition] = player_name[postition].replace(" ", "")
    

# # players = pd.concat([player_id, player_name, player_team], axis=1)


# df.to_csv('data.csv', index=False)

# # # ################################ PART 2 OF THE PROCESS #################################


import csv
import json

def csv_to_js(csv_file, js_file):
    data = []
    with open(csv_file, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)

    with open(js_file, 'w') as jsfile:
        jsfile.write('const data = ')
        json.dump(data, jsfile, indent=4)
        jsfile.write(';')

# Example usage
csv_file_path = 'data.csv'
js_file_path = 'data.js'
csv_to_js(csv_file_path, js_file_path)