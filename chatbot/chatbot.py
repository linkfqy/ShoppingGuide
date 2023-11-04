import os
from configparser import ConfigParser
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory


def initialize():
    cf = ConfigParser()
    cf.read("chatbot.conf", encoding='utf-8')
    options = cf.options('env')
    for opt in options:
        os.environ[opt] = cf.get('env', opt)


initialize()


class RecommandBot():
    template = (
        "你是一个虚拟导购员，你的职责是在电商平台中为用户推荐可能想要的商品，"
        "以下是可作为你推荐参考依据的信息：\n"
        "用户名：{username}\n"
        "用户购物车内商品：{cartItems}\n"
        "用户曾购买商品：{orderItems}\n"
        "用户当前位于分类页面：{category}\n"
        "用户当前分类页面下的子分类或商品：{categoryList}\n\n"
        "请在用户当前分类页面下的子分类或商品中选择最合适的一项，向用户推荐，注意不要带任何多余字符。示例：女上衣"
    )
    llm = ChatOpenAI(model_name="gpt-3.5-turbo-0301")

    def __init__(self) -> None:
        pass

    @classmethod
    def recommand(cls, info):
        res = cls.llm.predict((cls.template.format_map(info)))
        return res.strip()


class Chatbot():
    template = (
        "你是一个虚拟导购员，你的职责是在电商平台中为用户推荐可能想要的商品，"
        "以下是可作为你推荐参考依据的信息：\n"
        "用户名：{username}\n"
        "用户购物车内商品：{cartItems}\n"
        "用户曾购买商品：{orderItems}\n"
        "商城中所有商品：{allItems}\n"
        "注意：你只需要回答AI的发言，每次向用户推荐的商品必须为1~3件！！！\n"
        "\n以下是你和用户的对话：\n\n"
        "{chat_history}\n"
        "User: {user_msg}\n"
        "AI:"
    )
    prompt = PromptTemplate(
        input_variables=[
            "username", "cartItems", "orderItems", "allItems",
            "chat_history", "user_msg",
        ],
        template=template
    )
    memory = ConversationBufferMemory(
        input_key='user_msg',
        memory_key="chat_history",
        human_prefix='User'
    )
    conversation = LLMChain(
        llm=ChatOpenAI(model_name="gpt-3.5-turbo-0301", temperature=0),
        prompt=prompt,
        verbose=True,
        memory=memory,
    )

    def __init__(self) -> None:
        pass

    @classmethod
    def startNewChat(cls, info) -> str:
        '''param info is a dict including:
        "username"
        "cartItems"
        "orderItems"
        "allItems"
        "currentFirstCategory"
        "currentSecondCategory"
        "currentFirstCategoryList"
        "currentSecondCategoryList"
        '''
        cls.info = info
        cls.memory.clear()

        if info['currentFirstCategory'] is not None:
            info['category']=info['currentFirstCategory']
            info['categoryList']=info['currentFirstCategoryList']
            return (
                "您好，我是虚拟导购员，很高兴为您服务！"
                f"您当前位于{info['category']}分类，"
                "根据您的购物车内商品和曾购买商品，我为您推荐以下子分类："
                +RecommandBot.recommand(info)
            )
        elif info['currentSecondCategory'] is not None:
            info['category']=info['currentSecondCategory']
            info['categoryList']=info['currentSecondCategoryList']
            return (
                "您好，我是虚拟导购员，很高兴为您服务！"
                f"您当前位于{info['category']}分类，"
                "根据您的购物车内商品和曾购买商品，我为您推荐以下商品："
                +RecommandBot.recommand(info)
            )
        else:
            return "您好，我是虚拟导购员，很高兴为您服务！您可以向我描述需求，我来为您推荐合适的商品。"

    @classmethod
    def chat(cls, userMsg) -> str:
        answer = cls.conversation.predict(user_msg=userMsg, **cls.info)
        return answer
