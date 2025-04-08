from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

# Function to generate a chatbot response based on user input
def chatbot_response(user_input):
    """
    Function to generate a chatbot response based on user input.
    It can handle predefined questions as well as simple math calculations.

    Args:
    user_input (str): The message input by the user.

    Returns:
    str: A response from the chatbot based on the input.
    """
    
    # A dictionary that holds predefined responses for specific inputs
    responses = {
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but thanks for asking! How are you?",
        "bye": "Goodbye! Have a great day!",
        "what's your name": "I am ChatBot, your virtual assistant.",
        "what can you do": "I can help answer basic questions, solve math problems, and assist with small tasks.",
        "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
        "what is the weather today": "I can't check the weather, but you can easily find it online!",
        "what is the capital of france": "The capital of France is Paris.",
        "who is the president of the united states": "As of 2024, the President of the United States is Joe Biden.",
        "what is python": "Python is a popular programming language known for its simplicity and versatility.",
        "can you help me": "Of course! How can I assist you today?",
        "thank you": "You're welcome! I'm here to help anytime."
    }

    # Normalize user input to lowercase for case-insensitive matching
    user_input = user_input.lower()

    # Check if the input is a mathematical expression
    if is_math_expression(user_input):
        return evaluate_math_expression(user_input)

    # Use the 'get' method to retrieve the appropriate response from the dictionary
    # If the input doesn't match any predefined keys, return a default message
    return responses.get(user_input, "Sorry, I don't understand that. Can you rephrase?")

# Function to check if the input is a mathematical expression
def is_math_expression(user_input):
    """
    Checks if the user input is a valid mathematical expression.

    Args:
    user_input (str): The user's input.

    Returns:
    bool: True if the input contains a mathematical expression, False otherwise.
    """
    # A simple regex to check if the input contains numbers and math operators (+, -, *, /)
    math_pattern = re.compile(r'^[0-9+\-*/.() ]+$')
    return bool(math_pattern.match(user_input))

# Function to evaluate a mathematical expression
def evaluate_math_expression(user_input):
    """
    Evaluates a mathematical expression.

    Args:
    user_input (str): The mathematical expression provided by the user.

    Returns:
    str: The result of the mathematical evaluation.
    """
    try:
        # Evaluate the mathematical expression safely
        result = eval(user_input)
        return f"The result is: {result}"
    except Exception as e:
        return "Sorry, I couldn't calculate that. Please check the expression and try again."

# Route for the chatbot page
@app.route('/')
def home():
    return render_template('chat.html')

# Route to handle chatbot response
@app.route('/get', methods=['POST'])
def chatbot_reply():
    user_message = request.form['msg']
    print(f"User input: {user_message}")  # Debugging line to print input in the console
    bot_response = chatbot_response(user_message)
    return jsonify({'response': bot_response})

if __name__ == "__main__":
    app.run(debug=True)
