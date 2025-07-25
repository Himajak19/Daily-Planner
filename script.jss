body {
  font-family: 'Segoe UI', sans-serif;
  background: #fefefb;
  margin: 0;
  padding: 0;
}

.planner {
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border: 4px solid #ffe8d6;
  border-radius: 12px;
  background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png'); /* Optional texture */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.planner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed #fdd835;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.planner-header h1 {
  font-size: 32px;
  color: #333;
}

.planner-date-time label {
  margin-right: 10px;
  font-weight: bold;
}

.planner-body {
  display: flex;
  gap: 30px;
}

.todo-list {
  flex: 2;
}

.todo-list h2 {
  margin-bottom: 10px;
  color: #333;
}

#taskList {
  list-style: none;
  padding: 0;
  margin: 0;
}

#taskList li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

#taskList input[type="text"] {
  flex: 1;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.star {
  margin-left: 10px;
  color: gold;
  cursor: pointer;
  font-size: 18px;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.planner-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.priority-box,
.notes-box {
  background: #f9f9f9;
  border: 2px solid #ffd54f;
  border-radius: 8px;
  padding: 10px;
}

.priority-box h3,
.notes-box h3 {
  margin-top: 0;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-family: inherit;
}
