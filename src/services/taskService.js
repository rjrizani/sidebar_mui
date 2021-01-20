const KEYS ={
    tasks:'tasks',
    taskId: 'taskId'
}

//get data for back-and API
// export const getDepartmentCollection = () => ([
//     { id: '1', title: 'Development'},
//     { id: '2', title: 'Marketing'},
//     { id: '3', title: 'Accounting'},
//     { id: '4', title: 'HR'},
// ])

//belajar back-and lihat di web mozilla devlover
export function insertTask(data) {
    let tasks = getAllTask();
    data['id'] = generateTaskId()
    tasks.push(data)
    localStorage.setItem(KEYS.tasks,JSON.stringify(tasks))
}

export function updateTask(data) {
    let tasks = getAllTask();
    let recordIndex = tasks.findIndex(x => x.id === data.id);
    tasks[recordIndex] = {...data}
    localStorage.setItem(KEYS.tasks,JSON.stringify(tasks))
}


//fungsi membuat id
export function generateTaskId() {
    if (localStorage.getItem(KEYS.taskId) == null)
        localStorage.setItem(KEYS.taskId, '0')
    var id = parseInt(localStorage.getItem(KEYS.taskId))
    localStorage.setItem(KEYS.taskId, (++id).toString())
    return id;
}

//cek localStorage
export function getAllTask() {
        if (localStorage.getItem(KEYS.tasks) == null)
            localStorage.setItem(KEYS.tasks, JSON.stringify([]))
       return JSON.parse(localStorage.getItem(KEYS.tasks));
}
       
        //map department to department title
        // let departments = getDepartmentCollection();
        // return employees.map(x => ({
        //     ...x,
        //     department: departments[x.departmentId-1].title
        // }))
