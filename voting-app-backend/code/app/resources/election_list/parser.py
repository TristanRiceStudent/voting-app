from flask_restful import reqparse


election_parser = reqparse.RequestParser()

election_parser.add_argument("multipleChoice", type=bool, required=True,
                             help="Multiple Choice must be a boolean value")
election_parser.add_argument("options", required=True, type=list, location="json",
                             help="Options must be a list")


def validate_options(options):
    return all(isinstance(option, str) for option in options)
