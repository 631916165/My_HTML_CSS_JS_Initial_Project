// 获取页面上的元素
const taskInput = document.getElementById('taskInput'); // 输入框
const addBtn = document.getElementById('addBtn'); // 添加按钮
const taskList = document.getElementById('taskList'); // 待办事项列表

// 添加按钮点击事件监听器，触发 addTask 函数
addBtn.addEventListener('click', addTask);
// 待办事项列表点击事件监听器，触发 deleteTask 函数
taskList.addEventListener('click', deleteTask);

// 添加任务到待办事项列表的函数
function addTask() {
    // 获取输入框中的任务文本，并去除首尾空格
    const taskText = taskInput.value.trim();
    // 检查任务文本是否为空
    if (taskText !== '') {
        // 创建一个新的任务列表项 (li元素)
        const li = document.createElement('li');
        // 设置任务列表项的 HTML 内容
        li.innerHTML = `
            ${taskText}
            <button class="deleteBtn">删除</button>
        `;
        // 将任务列表项添加到待办事项列表中
        taskList.appendChild(li);
        // 清空输入框
        taskInput.value = '';
    }
}

// 删除任务的函数
function deleteTask(e) {
    // 检查点击的元素是否是删除按钮 (class为deleteBtn)
    if (e.target.classList.contains('deleteBtn')) {
        // 获取要删除的任务列表项 (li元素)
        const taskItem = e.target.parentElement;
        // 从待办事项列表中移除该任务列表项
        taskList.removeChild(taskItem);
    }
}
