# sudo service mongodb stop 
# 
# sudo rm /var/lib/mongodb/mongod.lock 
# 
# sudo mongod --repair --dbpath /var/lib/mongodb 
# 
# sudo mongod --fork --logpath /var/lib/mongodb/mongodb.log --dbpath /var/lib/mongodb 
# 
# sudo service mongodb start



from pymongo import MongoClient
import datetime

def mongo_conn():
    try:
        conn=MongoClient('localhost',27017)
        return conn.kcc
    except expression as e:
        print("Error in mongo connection:",e)
    
db=mongo_conn()


def sendAdminKey(dataFrontend):
    
    Adminkey=db.AdminLogin.find_one(dataFrontend)
    print("what is this ",Adminkey,dataFrontend)
    return Adminkey
def addCourse(course):
    cid=course['courseId']
    repeat=db.Course.find_one({'courseId':cid})
    if repeat==None:
        db.Course.insert(course)
    # print("#########",cid,"$$",repeat)
    courseData=db.Course.find()
    return(courseData)
def fetchDataFromCourse():
    courseData=db.Course.find()
    return(courseData)

def deleteCourse(data):
    db.Course.delete_one(data)
    db.addSemister.delete_many(data)
    return(db.Course.find())

def AddFacultiesSemister(data):
    print("msjdhfjsdhf",data['courseId'])
    db.addSemister.insert(data)
    return({'name':"pramish"})
def storeStudentDetail(data):
    allinfo=db.studentDetail.find()
    print("*****^$###",allinfo)
    x=0
    for i in allinfo:
        x=x+1
    if(x==0):
        l=7
    else:
        l=x+7
    
    l=str(l)
    yearToday = datetime.datetime.today().year
    courseId=data['courseId']
    yearToday=str(yearToday)
    courseId=str(courseId)
    studentID=courseId+yearToday+"kcc"+l
    sid={"studentID":studentID}
    print("studentID",sid)
    data.update(sid)
    leatestdate=str(datetime.date.today())
    print(leatestdate)
    lDate={"entrydate":leatestdate}
    data.update(lDate)
    
    
    db.studentDetail.insert(data)
    return(sid)


def CourseIdSearch():
    data=db.addSemister.find()
    courseId=set()
    for i in data:
        courseId.add(i['courseId'])
        print("&&&i",i['courseId'])
    print(courseId)
    
    courseIdList=[]
    for i in courseId:
        print("set",i)
        courseIdList.append(i)
    print("dictionary",courseIdList)
    return(courseIdList)

def fetchSemisterUseId(data):
    semister=db.addSemister.find()
    semlist=[]
    searchSemFac=data['courseId']
    print('searchSemFac',searchSemFac)
    for i in semister:
        if searchSemFac==i['courseId']:
            print("i",i['semister'])
            semlist.append(i['semister'])
    print('semlist',semlist)
    return(semlist)
def searchSubject(data):
    sub=db.addSemister.find_one(data)
    subject=[]
    subjectCode=[]
    x=0
    for i in sub:
        if  i=='_id' or i=='courseId' or i=='semister': 
            continue
        else:
            print("%%%%%%% key and value\n\n",i,sub[i])
            if x%2==0:
                subjectCode.append(sub[i])
                x=x+1
            else:
                subject.append(sub[i])
                x=x+1
            
    subjectAndCode={'Code':subjectCode,'subject':subject}

    print("%%%%%%%",subjectAndCode)
    print("$$$$$$$$$$$$$$$$$$$$$$$$$$$$",sub['semister'],len(sub))
    return(subjectAndCode)

def fetchSubjectFromBackend(data):
    sub=db.addSemister.find_one(data)
    subject=[]
    subjectCode=[]
    x=0
    for i in sub:
        if  i=='_id' or i=='courseId' or i=='semister': 
            continue
        else:
            print("%%%%%%% key and value\n\n",i,sub[i])
            if x%2==0:
                subjectCode.append(sub[i])
                x=x+1
            else:
                subject.append(sub[i])
                x=x+1
    subjectChoose={'semister':sub['semister'] ,'subject':subject}
    print("hsdgfshdf",subjectChoose)
    return(subject)

def Teacher(data):
    allinfo=db.Teacher.find()
    print("*****^$###",allinfo)
    x=0
    for i in allinfo:
        x=x+1
    if(x==0):
        l=7
    else:
        l=x+7
    
    l=str(l)
    yearToday = datetime.datetime.today().year
    courseId=data['courseId']
    yearToday=str(yearToday)
    courseId=str(courseId)
    teacherID=courseId+yearToday+"kccStaf"+l
    tid={"teacherID":teacherID}

    data.update(tid)
    leatestdate=str(datetime.date.today())
    print(leatestdate)
    lDate={"EntryDate":leatestdate}
    data.update(lDate)
    db.Teacher.insert(data)
    return(tid)

def FetchTeacher():
    data=db.Teacher.find()
    return(data)

def searchTeacher(dat):
    d=dat
    data=db.Teacher.find({'teacherfirstName':{"$regex": d}})
    print("search data\n\n\n",data)
    return(data)

def FetchStudent():
    student=db.studentDetail.find()
    return(student)

def searchStudent(dat):
    x=dat
    print("data come feom views\n\n\n",dat)
    student=db.studentDetail.find({'studentName':{"$regex":x}})
    # print("model",student)
    # for i in  student:
    #     print("jsgfjsd model i",i)
    return(student)