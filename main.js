
const form = document.getElementById('contact-form');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

   
    const li = document.createElement('li');

   
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = name;
    nameInput.disabled = true; 

    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.value = phone;
    phoneInput.disabled = true;

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Ändra';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';


    editButton.addEventListener('click', function() {
        if (nameInput.disabled) {
            nameInput.disabled = false;
            phoneInput.disabled = false;
            editButton.textContent = 'Spara'; 
        } else {
            nameInput.disabled = true;
            phoneInput.disabled = true;
            editButton.textContent = 'Ändra'; 
        }
    });

 
    deleteButton.addEventListener('click', function() {
        li.remove(); 
    });

   
    li.appendChild(nameInput);
    li.appendChild(phoneInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

   
    document.getElementById('contact-list').appendChild(li);
});
