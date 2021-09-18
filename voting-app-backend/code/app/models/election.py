import uuid
from app import db
from uuid import uuid4

class Election(db.Document):
    options = db.ListField(db.StringField())
    multiple_choice = db.BooleanField()

    def to_json(self):
        return {
            "id": str(self.id),
            "options": self.options,
            "multipleChoice": self.multiple_choice
        }