document.addEventListener('DOMContentLoaded', function() {
  let inputElement = document.getElementById('input');
  load();

  document.querySelector('.add-button').addEventListener('click', function() {
    createToDo(inputElement.value);
    save();
    scrollToEnd();
  });

  inputElement.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
      createToDo(inputElement.value);
    save();
      scrollToEnd();
    }
  });
});


function save() {
  let listElements = document.querySelectorAll('#todo-list li');
  let data = [];

  for (let i = 0; i < listElements.length; i++) {
    let element = listElements[i].querySelector('.value');
    data.push({
      content: element.innerText,
      checked: listElements[i].classList.contains('checked')
    });
  }

  localStorage.setItem('data', JSON.stringify(data));
  console.log('save data', data);
}

function load() {
  let dataString = localStorage.getItem('data');
  let data = JSON.parse(dataString);
  console.log('loaded data', data);

  if (data) {
    for (let i = 0; i < data.length; i++) {
      createToDo(data[i].content, data[i].checked);
    }
  }
}

function createToDo(inputValue, checked = false) {
  
  if (inputValue === '') {
    alert('You must write something!');

  } else {
    let li = document.createElement('li');
    let content = document.createElement('span');
    let close = document.createElement('span');

    content.classList.add('value');
    content.innerHTML = inputValue;
    close.className = 'close';

    li.appendChild(content);
    li.appendChild(close);

    if (checked) {
      li.classList.add('checked');
    }

    li.addEventListener('click', function() {
      li.classList.toggle('checked');
      save();
    });
  
    close.addEventListener('click', function() {
      li.remove();
      save();
    });

    document.getElementById('todo-list').appendChild(li);
    document.getElementById('input').value = '';
  }
}

function scrollToEnd() {
  window.scrollTo(0, document.body.scrollHeight);
}