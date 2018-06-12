function gradingStudents(grades) {

    for(var x in grades){
        var mult = grades[x]; 
        if(grades[x] % 5 == 0){
            mult = mult;
        }
        else{
            mult++;
        }
        console.log(mult)
    }
}

gradingStudents([73, 67, 38, 33]);