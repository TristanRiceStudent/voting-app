from flask_restful import Resource
from flask import request
from app.resources.election_list.parser import *
from app.models import Election as ElectionModel


class ElectionList(Resource):
    def post(self):
        data = election_parser.parse_args(req=request)
        
        options = data["options"]
        if not len(options) or not validate_options(options):
            return {"message": {"options": "Options must be an array of strings"}}
        
        election = ElectionModel(options=options, multiple_choice=data["multipleChoice"])
        election.save()
        
        return { "id": str(election.id) }
