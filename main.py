from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('cashier1.html')

@app.route('/cashier2.html')
def record():
    return render_template('cashier2.html')

@app.route('/cashier3.html')
def display():
    return render_template('cashier3.html')

if __name__ == '__main__':
    app.run(debug=True)

