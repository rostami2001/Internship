function Addtask () {
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task === '') {
        alert("Please Enter Something");
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'items';
    listItem.textContent = task;

    const list = document.getElementById('lists');
    list.appendChild(listItem);

    const removebtn = document.createElement('button');
    removebtn.className = 'delbtn';
    removebtn.textContent = 'Remove';

    removebtn.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(removebtn);


    const removeAll = document.getElementById('remove-all-btn');
    removeAll.onclick = function () {
        list.innerHTML = '';
    }

    taskInput.value = '';
}
