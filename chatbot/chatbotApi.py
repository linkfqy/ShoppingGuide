from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
from chatbot import Chatbot


class ChatApi(Resource):
    def post(self):
        data = request.get_json()
        aiMsg = Chatbot.chat(data['userMsg'])
        return {'aiMsg':aiMsg}
    

class NewChatApi(Resource):
    def post(self):
        info = request.get_json()
        firstMsg = Chatbot.startNewChat(info)
        return {'aiMsg':firstMsg}


if __name__ == '__main__':
    app = Flask('LLM')
    api = Api(app)
    api.add_resource(ChatApi, '/chat')
    api.add_resource(NewChatApi, '/newchat')

    cors = CORS(app,resources={r"/*":{'origins':'*'}})

    app.run(port=9193)
