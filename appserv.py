from flask import Flask,render_template


app=Flask(__name__,static_folder='./build/static',template_folder='./build')


state={
    'first_name':"Serge Aboubacar",
    'last_name':"Toure",
    'age':32,
    'position':"Senior project manager",
    'avatar':{
        'img':"st.jpg",
        'width':"200px",
        'height':"200px"
    },

    'bio':"A result oriented professional with 8+ years of experience in information system with a focus on gathering business, IT and project management skills.With strong technical background in Information Technology, i have got tangible knowledge, interpersonal skills and experience to walk through complexity of your business and add value while transforming and managing risk to your information system. A talented, self-driven, motivated and confident engineer looking for real challenge in a leading international organization"


}

@app.route('/')
def index():
    return render_template("index.html",state=state)

if __name__=="__main__":
    app.run(debug=True)
    