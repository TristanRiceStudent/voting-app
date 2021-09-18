from app import api
from app.resources import Election
from app.resources import ElectionList

api.add_resource(Election, "/election/<string:id>")
api.add_resource(ElectionList, "/election")
