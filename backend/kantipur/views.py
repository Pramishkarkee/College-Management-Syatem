from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse,HttpResponse
from  .import models
from .serializers import *
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import datetime
from django.core.files.storage import FileSystemStorage
# Create your views here.
@csrf_exempt 
@api_view(['GET','POST'])
def login(request):
    if request.method=='GET':
        
        return Response({'age':20})
       
@csrf_exempt 
@api_view(['GET','POST'])
def loginPost(request):
    print("Hey")
    x={}
    if request.method=='GET':
        return Response({'name':'pramish'})
    elif request.method=='POST':
        serializer=AdminDataSerilizer(data=request.data)
        data=request.data
        # print("serializer data pramish request******",serializer.is_valid())
        
        if serializer.is_valid():
            print("***data come from frontend",data['username'],data['password'])
            frontend={'username':data['username'],'password':data['password']}
            loginData=models.sendAdminKey(frontend)
            if loginData:
                data=1
            else:
                data=0
            return Response({'status':data})
        else:
            return Response(x)
    else:
        return Response(x)



@csrf_exempt 
@api_view(['GET','POST'])
def addFaculty(request):
    if request.method=='POST':
        serilizer=AddCourseSerilizer(data=request.data)
        data=request.data
        print("serializer data pramish request******",data)
        if serilizer.is_valid():
            addCourse=models.addCourse(data)
            serilizer=AddCourseSerilizer(addCourse,context={'request': request}, many=True)
            return Response(serilizer.data)
    else:
        addCourse=models.fetchDataFromCourse()
        serilizer=AddCourseSerilizer(addCourse,context={'request': request}, many=True)
        return Response(serilizer.data)
@csrf_exempt 
@api_view(['GET','POST'])
def deleteFaculty(request):
    if request.method=='POST':
        serilizer=deleteCourseSerilizer(data=request.data)
        data=request.data
        dataUpdate=models.deleteCourse(data)
        # addFaculty()
        serilizer=AddCourseSerilizer(dataUpdate,context={'request': request}, many=True)
        print("serializer data pramish request******",data)
        return Response(serilizer.data)
    else:
        return Response({'signal':0})
@csrf_exempt 
@api_view(['GET','POST'])
def addSemister(request):
    if request.method=="POST":
        data=request.data
        
        serilize=AddSemisterSelizer(data=request.data)
        print("this is request %$##Y*((",request.data,serilize.is_valid())
        if serilize.is_valid():
            addFacSem=models.AddFacultiesSemister(data)
            return Response({'message':"Add Semister is Success"})
        else:
            return Response({'message':"It Is not valid"})
    else:
        return Response({'message':"it is not post method"})

@csrf_exempt 
@api_view(['GET','POST'])
def inputStudentDetail(request):
    yearToday = datetime.datetime.today().year
    updateData={}
    fi={}
    if request.method=='POST':
        data=request.data
        for i in data:
            if i=='image':
                fs=FileSystemStorage()
                print("image",i)
                img=data[i]
                name=fs.save(img.name,img)
                fi['url']=fs.url(name)
                imgUrl=fi['url']
            else:
                updateData.update({i:data[i]})
        updateData.update({"image":imgUrl})
        print("this is data",updateData)
        sid=models.storeStudentDetail(updateData)
        return Response(sid)
    else:
        return Response({"studentID":"get"})
@csrf_exempt 
@api_view(['GET','POST'])
def ShowSubject(request):
    if request.method=="POST":
        data=request.data
        return Response({'message':'this is  post'})
    else:
        courseId=models.CourseIdSearch()
        return Response({"courseId":courseId})

@csrf_exempt 
@api_view(['GET','POST'])
def fetchSemister(request):
    if request.method=="POST":
        data=request.data
        print(data)
        fetchSem=models.fetchSemisterUseId(data)
        return Response({"semister":fetchSem})
@csrf_exempt 
@api_view(['GET','POST'])
def searchSubject(request):
    if request.method=='POST':
        data=request.data
        print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",data)
        subject=models.searchSubject(data)
        return Response(subject)


@csrf_exempt 
@api_view(['GET','POST'])
def fetchSubjectFromBackend(request):
    if request.method=='POST':
        print("data this is teacher data",request.data)
        courseSem=request.data
        dictData={'courseId':courseSem['courseId']}
        print("pramish data",courseSem['courseId'])
        subList=[]
        for i in courseSem['semister']:
            dictData.update({'semister':i})
            subject=models.fetchSubjectFromBackend(dictData)
            subList.append(subject)
            
        print("data database***",subList)
        return Response({'message':subList})
@csrf_exempt 
@api_view(['GET','POST'])
def Teacher(request):
    
    if request.method=="POST":
        print(request.data)
        data=request.data
        teacher={}
        fi={}
        for i in data:
            if i=='teacherImage':
                fs=FileSystemStorage()
                print("image",fs)
                img=data[i]
                name=fs.save(img.name,img)
                print("fi&&&***",fi)
                fi['url']=fs.url(name)
                print("fi&&&***",fi)
                imgUrl=fi['url']
                teacher.update({'image':imgUrl})
            elif i=='chooseSubList' or i=='checkSemList':
                li=list(data[i].split(','))
                print("\n\n\n&&&%%%%%\n\n",li,type(li))
                teacher.update({i:li})
            elif i=='monday' or i=='tuesday' or i=='wednesday' or i=='thrusday' or i=='friday' or i=='saturday':
                days=list(data[i].split(','))
                # print()
                teacher.update({i:days})
            elif i=='course':
                teacher.update({'courseId':data[i]})
            else:
                teacher.update({i:data[i]})
            # print(data[i])
        check=data['chooseSubList']
        print(check,len(check))
        print("teacher*****",teacher)
        teach=models.Teacher(teacher)
        return Response(teach)
    return Response({'msz':'get'})
@csrf_exempt 
@api_view(['GET','POST'])
def FetchTeacher(request):
    if request.method=="GET":
        teacher=models.FetchTeacher()
        serilizer=FetchTeacherSelizer(teacher,context={'request': request}, many=True)
        print(serilizer)
        return Response(serilizer.data)
    return Response({'msz':1})
@csrf_exempt 
@api_view(['GET','POST'])
def searchTeacher(request):
    if request.method=="POST":
        dat=request.data
        search=models.searchTeacher(dat['fleater'])
        print("search in views",search)
        serilizer=FetchTeacherSelizer(search,context={'request': request}, many=True)
        return Response(serilizer.data)
    return Response({'msz':'get'})
@csrf_exempt 
@api_view(['GET','POST'])
def FetchStudent(request):
    if request.method=='GET':
        student=models.FetchStudent()
        serilizer=FetchStudentSelizer(student,context={'request':request},many=True)
        print(serilizer)
        return Response(serilizer.data)
    return Response({'msz':'error'})

@csrf_exempt 
@api_view(['GET','POST'])
def searchStudent(request):
    if request.method=="POST":
        data=request.data
        print("gdata%%%",data['fleater'])
        student=models.searchStudent(data['fleater'])
        serilizer=FetchStudentSelizer(student,context={'request':request},many=True)
        return Response(serilizer.data)
    return Response({'msz':'get'})