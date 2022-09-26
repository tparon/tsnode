fetch("http://localhost:3000/api/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    tasks.forEach((task) => {
      const taskElem = document.createElement("div");
      taskElem.innerText = task.title;
      document.body.appendChild(taskElem);
    });
  });

const onSubmit = (event) => {
  event.preventDefault();

  const title = document.getElementById("task-title").value;

  fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
