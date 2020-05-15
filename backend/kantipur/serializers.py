from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
class AdminDataSerilizer(serializers.Serializer):
    # _id=serializers.CharField(max_length=200)
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=50)
   
class AddCourseSerilizer(serializers.Serializer):
    # _id=serializers.CharField(max_length=200)
    courseName = serializers.CharField(max_length=200,default="")
    courseId = serializers.CharField(max_length=50,default="")
class deleteCourseSerilizer(serializers.Serializer):
    courseId = serializers.CharField(max_length=200)
class AddSemisterSelizer(serializers.Serializer):
    subCode1 = serializers.CharField(max_length=50,default="")
    subName1 = serializers.CharField(max_length=200,default="")
    subCode2 = serializers.CharField(max_length=50,default="")
    subName2 = serializers.CharField(max_length=200,default="")
    subCode3 = serializers.CharField(max_length=50,default="")
    subName3 = serializers.CharField(max_length=200,default="")
    subCode4 = serializers.CharField(max_length=50,default="")
    subName4 = serializers.CharField(max_length=200,default="")
    subCode5 = serializers.CharField(max_length=50,default="")
    subName5 = serializers.CharField(max_length=200,default="")
    subCode6 = serializers.CharField(max_length=50,default="")
    subName6 = serializers.CharField(max_length=200,default="")
    subCode7 = serializers.CharField(max_length=50,default="")
    subName7 = serializers.CharField(max_length=200,default="")
    subCode8 = serializers.CharField(max_length=50,default="")
    subName8 = serializers.CharField(max_length=200,default="")

class FetchTeacherSelizer(serializers.Serializer):

    teacherfirstName=serializers.CharField(max_length=200,default="")
    teacherlastName=serializers.CharField(max_length=50,default="")
    Contact=serializers.IntegerField(default=0)
    address=serializers.CharField(max_length=100,default="")
    email=serializers.CharField(max_length=100,default="")
    timeType=serializers.CharField(max_length=200,default="")

    monday=serializers.ListField(child=serializers.CharField(),default=[])
    tuesday=serializers.ListField(child=serializers.CharField(),default=[])
    wednesday=serializers.ListField(child=serializers.CharField(),default=[])
    thrusday=serializers.ListField(child=serializers.CharField(),default=[])
    friday=serializers.ListField(child=serializers.CharField(),default=[])
    saturday=serializers.ListField(child=serializers.CharField(),default=[])

    checkSemList=serializers.ListField(child=serializers.CharField(),default=[])

    image=serializers.URLField(max_length=200, min_length=None, allow_blank=False)
    chooseSubList=serializers.ListField(child=serializers.CharField(),default=[])
    
    courseId=serializers.CharField(max_length=20,default='')
    sex=serializers.CharField(max_length=8,default="")
    teacherID=serializers.CharField(max_length=50,default="")

class FetchStudentSelizer(serializers.Serializer):
    studentName=serializers.CharField(max_length=200,default="")
    contactNo=serializers.IntegerField(default=0)
    email=serializers.CharField(max_length=200,default="")
    parAddress=serializers.CharField(max_length=200,default="")
    currentAdddress=serializers.CharField(max_length=200,default="")
    courseId=serializers.CharField(max_length=200,default="")
    semister=serializers.CharField(max_length=200,default="")
    parentsName=serializers.CharField(max_length=200,default="")
    parentsContact=serializers.IntegerField(default=0)
    image=serializers.URLField(max_length=200, min_length=None, allow_blank=False)
    studentID=serializers.CharField(max_length=200,default="")
    entrydate=serializers.CharField(max_length=200,default="")