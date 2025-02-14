let applications = JSON.parse(localStorage.getItem('applications')) || [];

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const jobTitle = new URLSearchParams(window.location.search).get('job')?.trim() || "";

  const application = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    qualification: formData.get('qualification'),
    experience: formData.get('experience'),
    jobTitle: jobTitle,
    date: new Date().toLocaleDateString(),
    score: parseInt(formData.get('score')) || 0 // Added score field
  };

  try {
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
    console.log("Application stored successfully:", application);

    alert('Application submitted successfully!');
    window.location.href = '/';
  } catch (error) {
    console.error("Error storing application:", error);
    alert('There was an error submitting your application. Please try again.');
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('adminLoggedIn', 'true');
    window.location.href = '/admin-dashboard';
  } else {
    alert('Invalid credentials!');
  }
}

function handleLogout() {
  localStorage.removeItem('adminLoggedIn');
  window.location.href = '/admin';
}

function checkAdminAuth() {
  if (!localStorage.getItem('adminLoggedIn')) {
    window.location.href = '/admin';
  }
}

function deleteApplication(index) {
  try {
    applications.splice(index, 1);
    localStorage.setItem('applications', JSON.stringify(applications));
    displayAllApplications();
  } catch (error) {
    console.error("Error deleting application:", error);
    alert('Error deleting application. Please try again.');
  }
}

function createApplicationCard(app, index) {
  const card = document.createElement('div');
  card.className = 'application-card';

  // Calculate if selected based on quiz score (>=80%)
  const score = app.score || 0;
  const isSelected = score >= 80;
  const statusClass = isSelected ? 'text-success' : 'text-danger';
  const statusText = isSelected ? 'Selected' : 'Rejected';

  card.innerHTML = `
    <div class="d-flex justify-content-between align-items-start">
      <h3>${app.jobTitle}</h3>
      <span class="badge ${statusClass}">${statusText}</span>
    </div>
    <p><strong>Name:</strong> ${app.name}</p>
    <p><strong>Email:</strong> ${app.email}</p>
    <p><strong>Phone:</strong> ${app.phone}</p>
    <p><strong>Qualification:</strong> ${app.qualification}</p>
    <p><strong>Experience:</strong> ${app.experience} years</p>
    <p><strong>Applied on:</strong> ${app.date}</p>
    <button onclick="deleteApplication(${index})" class="delete-btn">Delete</button>
  `;
  return card;
}

function displayAllApplications() {
  const container = document.getElementById('applicationsContainer');
  if (!container) return;

  try {
    // Get fresh data from localStorage
    applications = JSON.parse(localStorage.getItem('applications')) || [];

    if (applications.length === 0) {
      container.innerHTML = '<p>No applications found.</p>';
      return;
    }

    container.innerHTML = ''; // Clear the container without adding another header
    applications.forEach((app, index) => {
      container.appendChild(createApplicationCard(app, index));
    });
  } catch (error) {
    console.error("Error displaying applications:", error);
    container.innerHTML = '<p>Error loading applications. Please refresh the page.</p>';
  }
}

function showJobCategory(category) {
  document.getElementById('technicalJobs').style.display = category === 'technical' ? 'block' : 'none';
  document.getElementById('nontechnicalJobs').style.display = category === 'nontechnical' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Refresh applications data from localStorage
  applications = JSON.parse(localStorage.getItem('applications')) || [];

  if (path.includes('admin-dashboard')) {
    checkAdminAuth();
    displayAllApplications();
  }
});