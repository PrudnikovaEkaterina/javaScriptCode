/* const array = [5, 6, 'dxas'];
console.log(array);
console.log(array[2]);*/
const input = document.getElementById('title');
const addBtn = document.getElementById('create');
const list = document.getElementById('list');
// const notes = ['note 1','note 2', 'note 3']
const notes = [{
    title:'note 1',
    completed: true
}, 
{
    title:'note 2',
    completed: false
}]

function getNotesTamplate(note, index){
    return list.insertAdjacentHTML('beforeend', 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span class ="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
        <span class="btn btn-small btn-${note.completed ?'warning' : 'success'}" data-index="${index}" data-type = "toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type = "delete">&times;</span>
        </span>
    </li>` );
}

function render (){
    list.innerHTML ='';
    if(notes.length==0){
        list.innerHTML='<p>Заметки еще не созданы</p>'
    }
    for (let i =0; i<notes.length; i++){
        getNotesTamplate(notes[i], i);
    }
    // for(let el of notes){
    //     getNotesTamplate(el);
    // }
}

render();

console.log(input.value); 

//обработчик событий, обрабатывает действие (onclick в нашем случае) для элемента ДОМ (list в нашем случае)
// event.target - получает конкретный ДОМ элемент по которому был совершен клик
// event.target.dataset.index - получает значение data-index равное"${index} того эдемента, по кот был сделан клик

list.onclick = function(event){
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;
    
        if(type==='toggle'){
            console.log(type)
            notes[index].completed = !notes[index].completed
        }
        else if (type==='delete'){
            console.log(type)
            notes.splice(index, 1)
        }
        render();
    }
}

addBtn.onclick = function (){
    /* innerHTML - перезаписывает/перетирает значение
    list.innerHTML = `<li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${input.value}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`;*/
    if (input.value.length === 0)
    {return;}
    const newNote = { 
        title:input.value,
        completed: false}
    notes.push(newNote);
    render();
    input.value = '';
}