function gradingStudents(grades) {

    for(var x in grades){
        var mult = grades[x]; 
        while(true){
            if(mult%5 != 0){
                mult++
            }
            else{
                break;
            }
        }
        console.log(mult);
    }
}

gradingStudents([73, 67, 38, 33]);