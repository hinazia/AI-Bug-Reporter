const API="";

async function loadBugs(){

    const response=await fetch(`${API}/bugs`);

    const bugs=await response.json();

    const container=document.getElementById("bugs");

    container.innerHTML="";

    bugs.forEach(bug=>{

        container.innerHTML+=`

        <div class="bug">

            <h3>${bug.title}</h3>

            <p>${bug.description}</p>

            <p><b>Priority:</b> ${bug.priority}</p>

            <p><b>Status:</b> ${bug.status}</p>

            <p><b>Assigned:</b> ${bug.assigned_to}</p>

            <div class="actions">

                <button onclick="updateBug(${bug.id})">Update</button>

                <button onclick="deleteBug(${bug.id})">Delete</button>

            </div>

        </div>

        `;

    });

}

async function createBug(){

    const bug={

        title:title.value,
        description:description.value,
        priority:priority.value,
        status:status.value,
        assigned_to:assigned_to.value

    };

    await fetch(`${API}/bugs`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(bug)

    });

    loadBugs();

}

async function deleteBug(id){

    await fetch(`${API}/bugs/${id}`,{

        method:"DELETE"

    });

    loadBugs();

}

async function updateBug(id){

    const status=prompt("New Status");

    if(!status) return;

    const bugs=await fetch(`${API}/bugs`);

    const list=await bugs.json();

    const bug=list.find(b=>b.id===id);

    bug.status=status;

    await fetch(`${API}/bugs/${id}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(bug)

    });

    loadBugs();

}

async function askAI(){

    const question=document.getElementById("question").value;

    const response=await fetch(`${API}/chat`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({question})

    });

    const data=await response.json();

    document.getElementById("answer").innerHTML=data.answer;

}

loadBugs();