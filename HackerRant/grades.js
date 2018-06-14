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
        if(mult > 38 ){
            if(mult - grades[x] < 3){
                console.log(mult);
            }
            else{
                console.log(grades[x]);
            }
        }
        else{
            console.log(grades[x])
        }
    }
}

gradingStudents([73, 67, 38, 33]);