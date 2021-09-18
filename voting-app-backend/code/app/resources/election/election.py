from flask import request
from flask_restful import Resource, reqparse
from app.models.election import Election as ElectionModel

class Election(Resource):
    def get(self, id):
        election = ElectionModel.objects.get(id=id)
        if not election:
            return {"error": "Election not found"}, 404
        return election.to_json()
