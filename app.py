import base64
import io
import json
import operator
import os
import re
import requests
from flask import Flask, flash, \
        render_template, request, jsonify, \
        redirect, url_for, Response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import *

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/<custom endpoint>', methods=['GET', 'POST'])
def methodName1():
    if request.method == 'POST':
        # Do things if POST
        # Nested if statement:
            # return res
        return "Placeholder"
    return "successsssssss"



if __name__ == "__main__":
    app.run()
