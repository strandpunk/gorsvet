const table = document.getElementById('myTable');

table.addEventListener('click', function (event) {
    if (event.target.classList.contains('table-employee')) {

        const employeeId = event.target.getAttribute('data-employee');
        localStorage.setItem('selectedEmployee', employeeId);
        
        if (localStorage.getItem('isPageOpen') !== "true"){
            localStorage.setItem('isPageOpen', "true")
            var newWindow = window.open('./index2.html', '_blank', 'width=800,height=600'); // Указать размеры окна
            newWindow.focus();
            console.log(localStorage.getItem('isPageOpen'))
        } else {
  
        }
      
    }
});