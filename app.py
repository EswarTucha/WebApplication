from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/apply')
def apply():
    return render_template('apply.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/admin-dashboard')
def admin_dashboard():
    return render_template('admin-dashboard.html')