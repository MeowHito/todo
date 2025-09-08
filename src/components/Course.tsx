import { useState } from 'react'

function TodoApp(){

    type Course = {
        subject: string;
        grade: string;

    };
    const[subject,setSubject] = useState<string>("");
    const[grade,setGrade] = useState<string>("");
    const[courses,setCourses] = useState<Course[]>([]);

}

return
<div style={{textAlign: " center",marginTop: "50px" }}>
    <h1>My Course</h1>
    <input type="text" name="" id="" />
     </div>