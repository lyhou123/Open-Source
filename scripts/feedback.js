function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
      document.getElementById('messageContainer1').innerText =
        'សូមបំពេញឈ្មោះ, អ៊ីមែល, និងការពិពណ៌នា។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
    if (name.trim() === '' && message.trim() === '') {
      document.getElementById('messageContainer1').innerText =
        'សូមបំពេញឈ្មោះ និងការពិពណ៌នា។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
    if (name.trim() === '') {
      document.getElementById('messageContainer1').innerText =
        'សូមបំពេញឈ្មោះ។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
  
    if (email.trim() === '') {
      document.getElementById('messageContainer1').innerText =
        'សូមបំពេញអ៊ីមែល។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
  
    if (message.trim() === '') {
      document.getElementById('messageContainer1').innerText=
        'សូមបំពេញការពិពណ៌នា។';
      document.getElementById('messageContainer').innerText ='';
      return;
    }
  
    if (!emailRegex.test(email)) {
      document.getElementById('messageContainer1').innerText =
        'សូមបញ្ចូលអ៊ីមែលដោយត្រឹមត្រូវ។';
        document.getElementById('messageContainer').innerText='';
      return;
    }
    const formData = {
      name: name,
      email: email,
      message: message
    };
    fetch('https://cms.istad.co/api/ost-feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by your API
      },
      body: JSON.stringify({ data: formData }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Display success message
      document.getElementById('messageContainer').innerText = 'ការបញ្ជូនបានជោគជ័យ។';
      document.getElementById('messageContainer1').innerText = '';
      // You can perform additional actions here if needed
      // For example, show a success message to the user
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message
      document.getElementById('messageContainer1').innerText = 'ការបញ្ជូនបានបរាជ័យ។ សូមពិនិត្យទិន្នន័យរបស់អ្នក។';
      // Handle errors, show an error message to the user, etc.
    });
  }
  
  function resetForm() {
    // You can implement logic to reset the form fields if needed
    document.getElementById('myForm').reset();
    // Clear any existing messages
    document.getElementById('messageContainer1').innerText = '';
    document.getElementById('messageContainer').innerText = '';
  }
  