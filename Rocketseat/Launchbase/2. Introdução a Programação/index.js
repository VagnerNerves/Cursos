const classA = [
    {
        name: "Vagner",
        grade: 9.8
    },
    {
        name: "Nerves",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 5
    },
    {
        name: "Robson",
        grade: 0
    },
    {
        name: "Ciclano",
        grade: 2
    },
    {
        name: "Novo student",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} avarage: ${average}. Congrats.`)
    } else {
        console.log(`${turma} avarage: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} esta flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

sendMessage(average1, 'Class A');
sendMessage(average2, 'Class B');

studentsReprovados(classA)
studentsReprovados(classB)











