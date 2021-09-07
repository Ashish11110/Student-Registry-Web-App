student_array = [];
function submit(){
    var name1 = document.getElementById("student-1").Value;
    var name2 = document.getElementById("student-2").Value;
    var name3 = document.getElementById("student-3").Value;
    var name4 = document.getElementById("student-4").Value;

    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    student_array.push(name4);

    console.log(student_array);
    document.getElementById("displayName").innerHTML = student_array;

    document.getElementById("buttonSubmit").style.display = "none";
    document.getElementById("buttonSort").style.display = "inline-block";
}