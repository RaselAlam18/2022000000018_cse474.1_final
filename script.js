const todoContainer = document.getElementById("todoContainer");

async function loadTodos(){

    const response =
    await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await response.json();

    todos.slice(0,20).forEach(todo=>{

        const card=document.createElement("div");

        card.classList.add("card");

        card.innerHTML=`
        <h3>${todo.title}</h3>

        <p class="status">
        Status: ${todo.completed ? "Completed":"Pending"}
        </p>

        <button class="toggleBtn">
        Toggle Status
        </button>

        <button class="deleteBtn">
        Delete
        </button>
        `;

        const statusText=
        card.querySelector(".status");

        card.querySelector(".toggleBtn")
        .addEventListener("click",async()=>{

            const newStatus=!todo.completed;

            const res=await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    completed:newStatus
                })
            });

            if(res.ok){

                todo.completed=newStatus;

                statusText.textContent=
                `Status: ${todo.completed ?
                "Completed":"Pending"}`;
            }

        });

        card.querySelector(".deleteBtn")
        .addEventListener("click",async()=>{

            const res=await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
            {
                method:"DELETE"
            });

            if(res.ok){
                card.remove();
            }

        });

        todoContainer.appendChild(card);

    });

}

loadTodos();