// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.querySelector('#empCount')
let count = 0


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDel = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(empId))
    cellName.appendChild(document.createTextNode(empName))
    cellExt.appendChild(document.createTextNode(empExt))
    cellEmail.appendChild(document.createTextNode(empEmail))
    cellDept.appendChild(document.createTextNode(empDept))

    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement('button')
    delBtn.className = 'btn btn-sm btn-danger float-right'
    delBtn.appendChild(document.createTextNode('X'))
    cellDel.appendChild(delBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    empCount.innerHTML = `(${count})`


});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (confirm('Are you sure you want to delete this employee?')) {
            //CALL DELETEROW() TO DELETE SPECIFIC ROW IN TABLE
            //PASS THE ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            table.deleteRow(e.target.parentElement.parentElement.rowIndex)
            //DECREMENT COUNT VARIABLE
            count--
            empCount.innerHTML = `(${count})`
            document.querySelector('#id').focus()
        }
    }
        
})