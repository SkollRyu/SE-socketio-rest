from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/", methods=['GET'])
def get_dice():
    return {
        "dice num": 6,
    }