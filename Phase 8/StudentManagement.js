class Person
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;

    }


}


class Student extends Person
{
    constructor(name,age,rollNo,department,marks)
    {
        super(name,age);
        this.age = age;
        this.rollNo = rollNo;
        this.department = department;
        this.marks = marks;
    }

    calculateAverage()
    {
        return this.marks.reduce((sum,mark) => {return sum+mark;})/this.marks.length;
    }

    calculateGrade()
    {
        let average = this.calculateAverage();

        if(average >= 90)
        {
            return "A+";
        }
        else if(average >= 80)
        {
            return "A";
        }
        else if(average >= 70)
        {
            return "B";
        }
        else if(average >= 60)
        {
            return "C";
        }
        else if(average >= 50)
        {
            return "D";
        }

        return "F";
    }


    displayStudent()
    {
        console.log("===== Student =====");

        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Department: ${this.department}`);
        console.log(`Marks: ${this.marks.join(", ")}`);

        console.log(`Average: ${this.calculateAverage()}`);

        console.log(`Grade: ${this.calculateGrade()}`);
    }
}



let student = new Student( "Sarim", 18,  574,  "Computer Science",   [95,88,91,86,92]);

student.displayStudent();