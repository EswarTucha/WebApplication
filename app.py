import os
from flask import Flask, render_template, request
from supabase import create_client, Client

SUPABASE_URL = "https://psvzufejedscsmarkgwo.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzdnp1ZmVqZWRzY3NtYXJrZ3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MDE0MjAsImV4cCI6MjA1NTM3NzQyMH0.ZWhbMrCJwuyLvpWPexgEOlVSTcRTkHMHWQLI0CSwzu4"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default-secret-key")

quiz_questions = [
    {
        'id': 1,
        'text': 'How do developers link a Jira issue to a commit in their source control repository?',
        'options': ['By including the Jira issue key in the commit message', 'By using the Jira Automation feature', 'By attaching the commit file to the issue', 'By creating a linked issue in the workflow'],
        'correct': 'By including the Jira issue key in the commit message'
    },
    {
        'id': 2,
        'text': 'In Jira, which of these features is most commonly used by developers to track their work?',
        'options': ['Labels', 'Roadmaps', 'Backlog', 'Workflows'],
        'correct': 'Backlog'
    },
    {
        'id': 3,
        'text': 'You have cloned a repository from Bitbucket. How do you update your local repository with the latest changes from the remote repository?',
        'options': ['git fetch origin', 'git merge origin/master', 'git pull', 'git push'],
        'correct': 'git pull'
    },
    {
        'id': 4,
        'text': 'What does Bitbucket Pipelines allow you to do?',
        'options': ['Host static websites', 'Automatically build, test, and deploy your code', 'Merge pull requests automatically', 'Perform manual deployments only'],
        'correct': 'Automatically build, test, and deploy your code'
    },
    {
        'id': 5,
        'text': 'You are working on a feature branch and have successfully merged the latest changes from the main branch into your feature branch. What is the next step to push your changes to the remote repository?',
        'options': ['git merge main', 'git rebase main', 'git push origin feature-branch', 'git commit -m "Merged main into feature-branch"'],
        'correct': 'git push origin feature-branch'
    },
    {
        'id': 6,
        'text': 'SonarQube has detected a vulnerability in your project. What can you do to address it?',
        'options': ['Ignore the issue if its not affecting functionality', 'Fix the code to mitigate the vulnerability', 'Decrease the severity level of the vulnerability', 'Delete the file that contains the vulnerability'],
        'correct': 'Fix the code to mitigate the vulnerability'
    },
    {
        'id': 7,
        'text': 'How does Atlassian Compass help software teams improve their overall development workflow?',
        'options': ['By providing a version control system for all your code', 'By offering continuous integration and deployment automation', 'By offering real-time monitoring and tracking of your teams technical architecture', 'By generating reports on project status and bug counts'],
        'correct': 'By offering real-time monitoring and tracking of your teams technical architecture'
    },
    {
        'id': 8,
        'text': 'What type of reports or insights does Atlassian Compass provide to help teams make better technical decisions?',
        'options': ['Historical bug reports', 'Live build and deployment status', 'Dependency analysis and component health', 'Project cost and timeline estimates'],
        'correct': 'Dependency analysis and component health'
    },
    {
        'id': 9,
        'text': 'You need to host a static website on AWS with minimal cost and without managing servers. Which service would you use?',
        'options': ['Amazon EC2', 'Amazon S3', 'AWS Lambda', 'Amazon CloudFront'],
        'correct': 'Amazon S3'
    },
    {
        'id': 10,
        'text': 'What is Amazon EC2 used for?',
        'options': ['Managing databases', 'Hosting static websites', 'Running virtual machines (servers) in the cloud', 'Creating serverless applications'],
        'correct': 'Running virtual machines (servers) in the cloud'
    }
]

@app.route('/')
def index():
    return render_template('quiz.html', questions=quiz_questions)



@app.route('/submit', methods=['POST'])
def submit():
    total_questions = len(quiz_questions)
    correct_answers = 0
    user_answers = {}

    # Check if this is the name submission
    if 'user_name' in request.form:
        user_name = request.form.get('user_name')
        score = int(request.form.get('score'))
        total = int(request.form.get('total'))
        percentage = float(request.form.get('percentage'))
        passed = percentage >= 80

        # Get user answers from hidden fields
        user_answers = {i: request.form.get(f'answer_{i}') for i in range(1, total_questions + 1)}

        # Store in Supabase
        data = {
            "Name": user_name,
            "Scored": score,
            "Total": total,
            "Result": "Pass" if passed else "Fail"
        }
        supabase.table('Results').insert(data).execute()
        stored_answers = {}
        for q in quiz_questions:
            answer_key = f'answer_{q["id"]}'
            stored_answers[q['id']] = request.form.get(answer_key)

        return f"""
            <html>
            <head>
                <style>
                    body {{
                        background-color: #f0f2f5;
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                    }}
                    .result-header {{
                        text-align: center;
                        background: linear-gradient(45deg, #1a73e8, #0d47a1);
                        color: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 30px;
                    }}
                    .qa-container {{
                        max-width: 800px;
                        margin: 0 auto;
                    }}
                    .question-card {{
                        background-color: white;
                        padding: 20px;
                        margin: 15px 0;
                        border-radius: 8px;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                    }}
                    .question {{
                        color: #1a73e8;
                        font-weight: bold;
                        margin-bottom: 10px;
                        font-size: 18px;
                    }}
                    .correct-answer {{
                        color: #28a745;
                        padding: 10px;
                        background-color: #f8f9fa;
                        border-radius: 4px;
                        margin-top: 10px;
                    }}
                    .user-answer {{
                        color: #dc3545;
                        padding: 10px;
                        background-color: #f8f9fa;
                        border-radius: 4px;
                        margin-top: 10px;
                    }}
                </style>
            </head>
            <body>
                <div class="result-header">
                    <h2>Quiz Results for {user_name}</h2>
                    <p>Score: {score}/{total} ({percentage:.1f}%)</p>
                    <p>Result: {"Pass" if passed else "Fail"}</p>
                </div>
                <div class="qa-container">
                </div>
            </body>
            </html>
        """

    # First submission - calculate quiz results
    for question in quiz_questions:
        user_answer = request.form.get(f'q_{question["id"]}')
        user_answers[str(question['id'])] = user_answer
        if user_answer and user_answer == question['correct']:
            correct_answers += 1

    percentage = (correct_answers / total_questions) * 100
    passed = percentage >= 80

    # Show name input form
    return f"""
        <html>
        <head>
            <style>
                body {{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f2f5;
                    font-family: Arial, sans-serif;
                }}
                .form-container {{
                    background-color: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }}
                h2 {{
                    color: #1a73e8;
                    margin-bottom: 20px;
                }}
                input[type="text"] {{
                    width: 300px;
                    padding: 12px;
                    margin: 10px 0;
                    border: 2px solid #1a73e8;
                    border-radius: 5px;
                    font-size: 16px;
                }}
                button {{
                    background-color: #1a73e8;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.3s;
                }}
                button:hover {{
                    background-color: #1557b0;
                }}
            </style>
        </head>
        <body>
            <div class="form-container">
                <form method="POST" action="/submit">
                    <h2>Ready To Submit?</h2>
                    <input type="text" name="user_name" required placeholder="Enter your name">
                    <input type="hidden" name="score" value="{correct_answers}">
                    <input type="hidden" name="total" value="{total_questions}">
                    <input type="hidden" name="percentage" value="{percentage}">
                    {' '.join([f'<input type="hidden" name="answer_{q["id"]}" value="{user_answers.get(str(q["id"]), "")}">' for q in quiz_questions])}
                    <br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </body>
        </html>
    """
