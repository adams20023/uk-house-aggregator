# File: src/utils/recommendation.py

import sys
import json
import pandas as pd
from sklearn.neighbors import NearestNeighbors

def recommend(user_id):
    # Load property data
    data = pd.read_csv('properties.csv')

    # Mock user preferences
    user_preferences = {
        'price': 300000,
        'bedrooms': 3,
        'location': 'London',
    }

    # Filter data based on user preferences
    filtered_data = data[
        (data['price'] <= user_preferences['price'] + 50000) &
        (data['bedrooms'] == user_preferences['bedrooms'])
    ]

    # Return top 5 recommendations
    recommendations = filtered_data.head(5).to_dict('records')
    print(json.dumps(recommendations))

if __name__ == '__main__':
    user_id = sys.argv[1]
    recommend(user_id)

