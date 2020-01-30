fetch('http://localhost:3000/notes')
.then(res => res.json())
.then(notes=>{
    console.log(notes)
    let collection = "";
    notes.forEach(note =>{
        collection += `
            <button class="card-header btn-block btn-lg text-left" type="button" data-toggle="collapse" data-target="#collapse${note.id}" aria-expanded="false" aria-controls="collapseExample">
                ${note.title}
            </button>
            <div class="collapse" id="collapse${note.id}">
                <div class="card card-body">
                    ${note.body}
                    <div class=" text-right">
                        <button class="btn btn-sm btn-primary">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            </div>
            <br />
        `
    })
    document.getElementById('container').innerHTML = collection;
})
