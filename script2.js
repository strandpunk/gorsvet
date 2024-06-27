document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        const employeeId = localStorage.getItem('selectedEmployee');
        if (employeeId) {
            document.getElementById('employeeId').textContent = employeeId;


            const employeeData = data.find(employee => {
                return employee.id === employeeId;
            });
            // console.log(employeeData)
            document.getElementById('employeePhoto').src = `${employeeData.img}`
            document.getElementById('employeeId').textContent = "Сотрудник № " + employeeId;
            document.getElementById('employeeName').textContent = "ФИО: " + employeeData.name;
            document.getElementById('employeeAge').textContent = "Возраст: " + employeeData.age;
            document.getElementById('employeeGender').textContent = "Пол: " + employeeData.gender;
        }
    }
        , 500);

});

window.addEventListener('load', function () {


window.addEventListener("beforeunload", function () {
    localStorage.setItem('isPageOpen', "false");
});

const data = [
    {
        id: '1',
        name: 'Антон Городецкий',
        age: '27',
        gender: 'Муж.',
        img: '/images/1.PNG'
    },
    {
        id: '2',
        name: 'Светлана Назарова',
        age: '25',
        gender: 'Жен.',
        img: '/images/2.PNG'
    },
    {
        id: '3',
        name: 'Семён Колобков',
        age: '50',
        gender: 'Муж.',
        img: '/images/3.PNG'
    },
]

