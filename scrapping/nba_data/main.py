#for data chart creation
import pandas as pd
pd.set_option('display.max_columns', None)

#to request information from websites on the web
import requests

# import time
# import numpy as np


# For scraping images on nba website
from PIL import Image
from io import BytesIO
import os

#function for saving and nba player photos
def save_image_from_url(url, directory):
    # Create the directory if it doesn't exist
    if not os.path.exists(directory):
        os.makedirs(directory)
    
    # Send a GET request to the URL to fetch the image data
    response = requests.get(url)
    if response.status_code == 200:
        # Open the image using PIL
        image = Image.open(BytesIO(response.content))
        
        # Extract the filename from the URL
        filename = url.split("/")[-1]  # Get the last component of the URL
        
        # Construct the full file path including the directory
        file_path = os.path.join(directory, filename)
        
        # Save the image to the specified file path using 'with open'
        with open(file_path, "wb") as f:
            image.save(f, format="PNG")
        print(f"Image saved as {file_path}")
    else:
        print("Failed to fetch image")

#These are the test websites that we have used to grab nba data
test_url = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2023-24&SeasonType=Regular%20Season&StatCategory=PTS"
test_url2 = "https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2022-23&SeasonType=Regular%20Season&StatCategory=PTS"

#data request from nba
r = requests.get(url=test_url).json()

#tables creation
table_set = r["resultSet"]["headers"]
player_stats = r["resultSet"]["rowSet"]
df = pd.DataFrame(player_stats, columns=table_set)

#seperation for the players and their ids
player_id = df["PLAYER_ID"]
player_name = df["PLAYER"]
players = pd.concat([player_id, player_name], axis=1)


#this is where we will go to the webpage and then save the file to a path in our folder
for postition in range(len(player_id)):
    name = player_name[postition].replace(" ", "")
    save_image_from_url(f"https://cdn.nba.com/headshots/nba/latest/1040x760/{player_id[postition]}.png", f"./nba_photos/{name}")
    

