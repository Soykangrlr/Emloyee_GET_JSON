document.querySelector('#getEmploye').addEventListener('click', loademployee)
let loadImage=document.querySelector('#loading')

function loademployee() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'employees.json', true)
    loadImage.style.display='block'
    setTimeout(()=>{
        loadImage.style.display='none'
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(this.responseText)
                let employees = JSON.parse(this.responseText)
                console.log(employees)
                let html = ""
                employees.forEach(employee => {
                    
                    html += `
                     <tr>
                         <td><img src="img/${employee.image}.jpg"/></td>
                         <td>${employee.firsName}</td>
                         <td>${employee.lastName}</td>
                         <td>${employee.age}</td>
                     </tr>
                   `
                });
                document.querySelector('#employee').innerHTML = html
    
            }
        }
        xhr.send()
    },1500)
    
    

}