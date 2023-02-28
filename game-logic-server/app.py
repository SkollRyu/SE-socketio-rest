from flask import Flask, jsonify, request
import random

app = Flask(__name__)

@app.route("/", methods=['GET'])
def get_dice():
    number = random.randint(3,9)
    return {
        "number": number,
    }