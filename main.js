const form = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !phone) {
        alert("Både namn och telefonnummer måste fyllas i!");
        return;
    }

    createContact(name, phone);

    form.reset();
});

function createContact(name, phone) {
    const li = document.createElement('li');

    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameSpan.classList.add('contact-name');

    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = phone;
    phoneSpan.classList.add('contact-phone');

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Ändra';

    editButton.addEventListener('click', function () {
        if (editButton.textContent === 'Ändra') {
            
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.value = nameSpan.textContent;

            const phoneInput = document.createElement('input');
            phoneInput.type = 'text';
            phoneInput.value = phoneSpan.textContent;

            li.replaceChild(nameInput, nameSpan);
            li.replaceChild(phoneInput, phoneSpan);

            editButton.textContent = 'Spara';
        } else {
            
            const updatedName = li.querySelector('input[type="text"]').value;
            const updatedPhone = li.querySelector('input[type="text"]:nth-child(2)').value;

            nameSpan.textContent = updatedName;
            phoneSpan.textContent = updatedPhone;

            li.replaceChild(nameSpan, li.querySelector('input[type="text"]'));
            li.replaceChild(phoneSpan, li.querySelector('input[type="text"]:nth-child(2)'));

            editButton.textContent = 'Ändra';
        }
    });

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';

    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    
    li.appendChild(nameSpan);
    li.appendChild(phoneSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    contactList.appendChild(li);
}
