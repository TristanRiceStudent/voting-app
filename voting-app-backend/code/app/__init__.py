from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_mongoengine import MongoEngine

app = Flask(__name__)
api = Api(app)

app.config["MONGODB_SETTINGS"] = {
    "db": "voting-app",
    "host": "localhost",
    "port": 27017
}

db = MongoEngine()
db.init_app(app)

from app import routes
