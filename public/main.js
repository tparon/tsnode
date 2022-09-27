fetch("http://localhost:3000/api/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    tasks.forEach((task) => {
      const taskElem = document.createElement("div");
      taskElem.innerText = task.date + ": " + task.title;

      const buttonElem = document.createElement("button");
      buttonElem.innerHTML = task.button;

      document.body.appendChild(taskElem);
      document.body.appendChild(buttonElem);

      buttonElem.onclick = () => {
        console.log(tasks.indexOf(task));
        messageHandler("Task is completed!");
      };
    });
  });

const onSubmit = (event) => {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const date = document.getElementById("date-input").value;

  const button = "Delete";

  if (title == "") {
    return window.alert("Please fill the form");
  }

  fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title, date, button }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(messageHandler("Nice job!"));
};

let timeout;

const messageHandler = (message) => {
  const succesMessage = document.getElementById("success-message");
  succesMessage.innerText = message;

  clearTimeout(timeout);

  timeeout = setTimeout(() => {
    succesMessage.innerText = "";
  }, 2000);
};
