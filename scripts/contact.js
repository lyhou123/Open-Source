function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone=document.getElementById('phone').value;
    const address=document.getElementById('address').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/; 
    if (name.trim() === '' || email.trim() === '' || message.trim() === ''||phone.trim() ===''||address.trim() ==='') { 
      document.getElementById('messageContainer1').innerText = 'សូមបំពេញឈ្មោះ, អ៊ីមែល, ការពិពណ៌នា ,លេខទូរសព្ទ័, និងអាស័យដ្ឋាន។';
      document.getElementById('messageContainer').innerText = '';
      return;
    }
    if (!emailRegex.test(email)) {
      document.getElementById('messageContainer1').innerText =
        'សូមបញ្ចូលអ៊ីមែលដោយត្រឹមត្រូវ។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
    if (!phoneRegex.test(phone)) {
      document.getElementById('messageContainer1').innerText =
          'សូមបញ្ចូលលេខទូរសព្ទ័ដោយត្រឹមត្រូវ។';
      document.getElementById('messageContainer').innerText = '';
      return;
  }
    const formData = {
      name: name,
      email: email,
      message: message,
      address:address,
      phoneNumber:phone
    };
    fetch('https://cms.istad.co/api/ost-contact-uses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Display success message
      document.getElementById('messageContainer').innerText = 'ការបញ្ជូនបានជោគជ័យ។';
      document.getElementById('messageContainer1').innerText = '';
      
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message
      document.getElementById('messageContainer1').innerText = 'ការបញ្ជូនបានបរាជ័យ។ សូមពិនិត្យទិន្នន័យរបស់អ្នក។';
    });
  }
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('messageContainer1').innerText = '';
    document.getElementById('messageContainer').innerText = '';
  }
  