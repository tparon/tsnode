fetch("http://localhost:3000/api/tasks")
  .then((res) => res.json())
  .then((tasks) => {
    tasks.forEach((task) => {
      const taskElem = document.createElement("div");
      taskElem.innerText = task.date + ": " + task.title;
      document.body.appendChild(taskElem);

      const buttonElem = document.createElement("button");
      buttonElem.innerHTML = "Delete";
      document.body.append(buttonElem);
    });
  });

const onSubmit = (event) => {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const date = document.getElementById("date-input").value;

  fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title, date }),
  })
    .then((res) => res.json())
    .then()
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
