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

  
    const nameText = document.createElement('span');
    nameText.textContent = `Namn: ${name} `;
    nameText.classList.add('name-text');

    
    const phoneText = document.createElement('span');
    phoneText.textContent = `Telefon: ${phone} `;
    phoneText.classList.add('phone-text');

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Ändra';

    
    editButton.addEventListener('click', function () {
        if (editButton.textContent === 'Ändra') {
            const newName = prompt("Ange nytt namn:", nameText.textContent.replace("Namn: ", ""));
            const newPhone = prompt("Ange nytt telefonnummer:", phoneText.textContent.replace("Telefon: ", ""));
            if (newName) nameText.textContent = `Namn: ${newName} `;
            if (newPhone) phoneText.textContent = `Telefon: ${newPhone} `;
            editButton.textContent = 'Spara';
        } else {
            editButton.textContent = 'Ändra';
        }
    });

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';

    deleteButton.addEventListener('click', function () {
        li.remove();
    });

    
    li.appendChild(nameText);
    li.appendChild(phoneText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    contactList.appendChild(li);
}
