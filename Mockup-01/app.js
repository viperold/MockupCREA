// Sample data
const sampleProjects = [
    {
        id: 1,
        title: "App de Gestión de Inventario",
        author: "María González",
        career: "Ingeniería en Informática",
        description: "Desarrollo de una aplicación web para gestionar inventarios de pequeñas empresas. Necesito ayuda con el frontend y diseño UX/UI.",
        skills: ["React", "Node.js", "Diseño UI"],
        type: "academico",
        duration: "2-3 meses"
    },
    {
        id: 2,
        title: "Sistema de Automatización Industrial",
        author: "Carlos Rodríguez",
        career: "Ingeniería Industrial",
        description: "Proyecto de automatización para línea de producción. Busco colaboradores con conocimientos en PLC y programación industrial.",
        skills: ["PLC", "Automatización", "Python"],
        type: "academico",
        duration: "1 mes"
    },
    {
        id: 3,
        title: "Plataforma de E-learning",
        author: "Ana Martínez",
        career: "Administración",
        description: "Creación de plataforma educativa online. Necesito programadores y especialistas en marketing digital.",
        skills: ["PHP", "Marketing", "Base de datos"],
        type: "emprendimiento",
        duration: "más de 3 meses"
    }
];

const sampleServices = [
    {
        id: 1,
        title: "Desarrollo Web Frontend",
        author: "Diego Silva",
        career: "Ingeniería en Informática",
        description: "Ofrezco servicios de desarrollo frontend con React, Vue.js y JavaScript vanilla. Experiencia en diseño responsivo.",
        skills: ["React", "Vue.js", "CSS", "JavaScript"],
        type: "servicio",
        rate: "$15.000/hora"
    },
    {
        id: 2,
        title: "Diseño Gráfico y Branding",
        author: "Valentina Torres",
        career: "Diseño",
        description: "Servicios de diseño gráfico, logos, identidad corporativa y material publicitario. Portfolio disponible.",
        skills: ["Photoshop", "Illustrator", "Branding"],
        type: "servicio",
        rate: "$20.000/proyecto"
    }
];

// State management
let currentUser = null;
let currentTab = 'projects';
let userProjects = [];

// Authentication functions
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

function showRegister() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

function handleLogin(event) {
    event.preventDefault();
    // Simulate successful login
    currentUser = {
        name: "Juan Pérez",
        email: "juan.perez@inacap.cl",
        career: "Ingeniería en Informática"
    };
    showDashboard();
}

function handleRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    currentUser = {
        name: event.target.elements[0].value,
        email: event.target.elements[1].value,
        career: event.target.elements[2].options[event.target.elements[2].selectedIndex].text
    };
    showDashboard();
}

function showDashboard() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('authButtons').classList.add('hidden');
    document.getElementById('userMenu').classList.remove('hidden');
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('displayName').textContent = currentUser.name;
    document.getElementById('displayCareer').textContent = currentUser.career;
    document.getElementById('userAvatar').textContent = currentUser.name.split(' ').map(n => n[0]).join('');
    
    renderProjects();
    renderServices();
    renderMyProjects();
}

function logout() {
    currentUser = null;
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('authButtons').classList.remove('hidden');
    document.getElementById('userMenu').classList.add('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

// Tab navigation
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
    
    currentTab = tabName;
}

// Project functions
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    sampleProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';
    
    sampleServices.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesGrid.appendChild(serviceCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-title">${project.title}</div>
        <div class="project-author">Por: ${project.author} - ${project.career}</div>
        <div class="project-description">${project.description}</div>
        <div class="project-skills">
            ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="project-footer">
            <span class="project-type">${project.type}</span>
            <button class="btn btn-primary" onclick="contactProject(${project.id})">Contactar</button>
        </div>
    `;
    return card;
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-title">${service.title}</div>
        <div class="project-author">Por: ${service.author} - ${service.career}</div>
        <div class="project-description">${service.description}</div>
        <div class="project-skills">
            ${service.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <div class="project-footer">
            <span class="project-type">${service.rate}</span>
            <button class="btn btn-primary" onclick="contactService(${service.id})">Contratar</button>
        </div>
    `;
    return card;
}

function handleCreateProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProject = {
        id: Date.now(),
        title: formData.get('title') || event.target.elements[0].value,
        author: currentUser.name,
        career: currentUser.career,
        description: formData.get('description') || event.target.elements[1].value,
        skills: (formData.get('skills') || event.target.elements[3].value).split(',').map(s => s.trim()),
        type: formData.get('type') || event.target.elements[2].value,
        duration: formData.get('duration') || event.target.elements[4].value
    };
    
    userProjects.push(newProject);
    sampleProjects.push(newProject);
    
    alert('¡Proyecto creado exitosamente!');
    event.target.reset();
    renderProjects();
    renderMyProjects();
}

function renderMyProjects() {
    const myProjectsGrid = document.getElementById('myProjectsGrid');
    myProjectsGrid.innerHTML = '';
    
    if (userProjects.length === 0) {
        myProjectsGrid.innerHTML = '<p style="text-align: center; color: var(--dark-gray); padding: 2rem;">No has creado proyectos aún. ¡Crea tu primer proyecto!</p>';
        return;
    }
    
    userProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        myProjectsGrid.appendChild(projectCard);
    });
}

function contactProject(projectId) {
    alert('¡Función de contacto próximamente! ID del proyecto: ' + projectId);
}

function contactService(serviceId) {
    alert('¡Función de contratación próximamente! ID del servicio: ' + serviceId);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Auto-login for demo purposes
    currentUser = {
        name: "Juan Pérez",
        email: "juan.perez@inacap.cl",
        career: "Ingeniería en Informática"
    };
    showDashboard();
});
