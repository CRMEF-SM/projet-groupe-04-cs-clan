from flask import Flask

app = Flask(__name__)

#Inscription API route

@app.route("/inscription")
def inscription():
    return "S'inscrire en tant qu'apprenant"

if __name__== "__main__":
    app.run(debug=True)