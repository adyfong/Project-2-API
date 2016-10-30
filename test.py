import requests
from requests_oauthlib import OAuth1

auth = OAuth1("587037dc0bbe4d30b72e71197f6cd063", "8a3570a59540488e9b7f1d22a731069e")
endpoint = "http://api.thenounproject.com/icon/1"

response = requests.get(endpoint, auth=auth)
print response.content
