// Sample blog posts data
const blogPosts = [
    {
        title: "Understanding SQL Injection Attacks",
        summary: "Learn about one of the most common web vulnerabilities and how to prevent it.",
        link: "#"
    },
    {
        title: "The Importance of Multi-Factor Authentication",
        summary: "Discover why MFA is crucial for securing your online accounts.",
        link: "#"
    },
    {
        title: "Exploring the OWASP Top 10",
        summary: "A deep dive into the most critical web application security risks.",
        link: "#"
    },
    {
        title: "Mastering Wireshark for Network Analysis",
        summary: "Learn how to use Wireshark effectively for network troubleshooting and security analysis.",
        link: "#"
    },
    {
        title: "Cloud Security Best Practices",
        summary: "Essential security measures for protecting your cloud infrastructure.",
        link: "#"
    }
];

// Roadmap data
const blueTeamRoadmap = [
    { title: "Network Fundamentals", resources: "https://www.cybrary.it/course/comptia-network-plus/" },
    { title: "Security Fundamentals", resources: "https://www.coursera.org/learn/information-security-data" },
    { title: "Intrusion Detection Systems", resources: "https://www.sans.org/cyber-security-courses/intrusion-detection-in-depth/" },
    { title: "Log Analysis", resources: "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html" },
    { title: "Incident Response", resources: "https://www.sans.org/cyber-security-courses/incident-handling-hacker-exploits/" }
];

const redTeamRoadmap = [
    { title: "Programming Basics", resources: "https://www.codecademy.com/learn/learn-python-3" },
    { title: "Networking Fundamentals", resources: "https://www.cybrary.it/course/comptia-network-plus/" },
    { title: "Web Application Security", resources: "https://portswigger.net/web-security" },
    { title: "Exploitation Techniques", resources: "https://www.offensive-security.com/pwk-oscp/" },
    { title: "Post-Exploitation", resources: "https://www.offensive-security.com/pen300-osep/" }
];

// Function to load blog posts
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-card');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}" target="_blank">Read More</a>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Function to create roadmap steps
function createRoadmapSteps(roadmapData, containerId) {
    const container = document.getElementById(containerId);
    roadmapData.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.classList.add('roadmap-step');
        stepElement.innerHTML = `
            <h4>${index + 1}. ${step.title}</h4>
            <p>Click to view resources</p>
        `;
        stepElement.addEventListener('click', () => showResources(step.title, step.resources));
        container.appendChild(stepElement);
    });
}

// Function to show resources in a modal
function showResources(title, resourceLink) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    const content = document.createElement('div');
    content.style.backgroundColor = '#1a1a1a';
    content.style.padding = '2rem';
    content.style.borderRadius = '5px';
    content.style.maxWidth = '80%';
    content.innerHTML = `
        <h3>${title} Resources</h3>
        <p>Find more information and tutorials here:</p>
        <a href="${resourceLink}" target="_blank">${resourceLink}</a>
        <button style="display:block; margin-top:1rem; padding:0.5rem 1rem; background-color:#0077ff; color:#fff; border:none; cursor:pointer;">Close</button>
    `;

    const closeButton = content.querySelector('button');
    closeButton.addEventListener('click', () => document.body.removeChild(modal));

    modal.appendChild(content);
    document.