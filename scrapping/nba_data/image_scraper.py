# # # For scraping images on nba website
# # from PIL import Image
# # from io import BytesIO
# # import os

# # #function for saving and nba player photos
# # def save_image_from_url(url, directory):
# #     # Create the directory if it doesn't exist
# #     if not os.path.exists(directory):
# #         os.makedirs(directory)
    
# #     # Send a GET request to the URL to fetch the image data
# #     response = requests.get(url)
# #     if response.status_code == 200:
# #         # Open the image using PIL
# #         image = Image.open(BytesIO(response.content))
        
# #         # Extract the filename from the URL
# #         filename = url.split("/")[-1]  # Get the last component of the URL
        
# #         # Construct the full file path including the directory
# #         file_path = os.path.join(directory, filename)
        
# #         # Save the image to the specified file path using 'with open'
# #         with open(file_path, "wb") as f:
# #             image.save(f, format="PNG")
# #         print(f"Image saved as {file_path}")
# #     else:
# #         print("Failed to fetch image")

# this is where we will go to the webpage and then save the file to a path in our folder
# for postition in range(len(player_id)):
#     name = player_name[postition].replace(" ", "")
#     save_image_from_url(f"https://cdn.nba.com/headshots/nba/latest/1040x760/{player_id[postition]}.png", f"./nba_photos/{name}")