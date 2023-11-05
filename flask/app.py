from flask import Flask, request, jsonify
from flask_cors import CORS
from helpers import get_response


app = Flask(__name__)


text_selected = None


# Allow CORS for all origins
CORS(app)


@app.route("/")
def main():
    return "Magic mouse 🪄"


@app.route("/explain")
def explain():

    req = request.args.get("q")

    if not req.strip() == "":
        global text_selected
        text_selected = req

    return "text selected updated"


@app.route("/generate_res")
def generate_res():
    if not text_selected == None:
        return jsonify(get_response(text_selected))
    
    return None