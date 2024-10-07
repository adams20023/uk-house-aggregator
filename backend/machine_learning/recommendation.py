import sys
import json

def recommend(user_id):
    # Mock recommendation logic
    recommendations = [
        {"id": 1, "title": "Modern Apartment", "location": "London", "price": 250000},
        {"id": 2, "title": "Cozy Cottage", "location": "Manchester", "price": 150000},
    ]
    print(json.dumps(recommendations))

if __name__ == "__main__":
    user_id = sys.argv[1]  # Get the user ID from the command line arguments
    recommend(user_id)

