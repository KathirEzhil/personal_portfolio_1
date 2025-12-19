// Portfolio Interactive Details System
// This script adds expandable detail views for all major sections

const detailsData = {
    // Experience Details
    'iit-research': {
        title: 'Data Science Student Researcher',
        subtitle: 'IIT Madras - Online Degree Program | 2024 - Present',
        sections: [
            {
                title: '📚 Research Focus',
                content: 'Conducting advanced research in machine learning algorithms and statistical data analysis. Working extensively with real-world datasets to develop predictive models and derive actionable insights across various domains including healthcare, finance, and social sciences.'
            },
            {
                title: '🎯 Key Achievements',
                list: [
                    'Achieved Foundation Level CGPA of 9.7, ranking among top performers nationwide',
                    'Completed advanced coursework in Statistical Methods, Computational Thinking, and Programming',
                    'Developed proficiency in Python libraries: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn',
                    'Applied statistical techniques including hypothesis testing, regression analysis, and probability theory',
                    'Worked on multiple data analysis projects involving data cleaning, visualization, and modeling',
                    'Participated in peer learning sessions and collaborative coding exercises'
                ]
            },
            {
                title: '💻 Technical Skills Developed',
                tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Jupyter Notebooks']
            }
        ]
    },
    'athletics': {
        title: 'Student Athlete & Team Captain',
        subtitle: 'SSN College of Engineering | 2023 - Present',
        sections: [
            {
                title: '🏆 Athletic Achievements',
                content: 'Leading the college athletics team while maintaining exceptional academic performance. Demonstrated outstanding time management and leadership skills by successfully balancing dual degree programs with intensive sports training and competitions.'
            },
            {
                title: '🎖️ Competition Highlights',
                list: [
                    'Inter-University athletics medalist in track and field events',
                    'Zonal level athletics medalist representing SSN College',
                    'Sports Captain with proven leadership and team management skills',
                    'CBSE Cluster Basketball player with competitive tournament experience',
                    'Maintained 9.565 CGPA while pursuing athletics excellence',
                    'Organized and led team training sessions and strategy meetings',
                    'Mentored junior athletes in technique and performance improvement'
                ]
            },
            {
                title: '🌟 Leadership & Skills',
                tags: ['Team Leadership', 'Time Management', 'Discipline', 'Performance Under Pressure', 'Goal Setting', 'Teamwork', 'Communication']
            }
        ]
    },
    'ieee-treasurer': {
        title: 'Treasurer - IEEE CAS Student Chapter',
        subtitle: 'IEEE Circuits and Systems Society (CASS) | 2023 - Present',
        sections: [
            {
                title: '💼 Financial Leadership',
                content: 'Serving as Treasurer for IEEE CAS Student Chapter at SSN College, managing all financial operations, budget planning, and resource allocation. Leading financial planning for technical workshops, seminars, and student events while maintaining transparent accounting practices and ensuring compliance with IEEE guidelines.'
            },
            {
                title: '📊 Key Responsibilities',
                list: [
                    'Managing chapter finances with annual budget exceeding ₹50,000',
                    'Budget allocation and expense tracking for 10+ events per semester',
                    'Coordinating with faculty advisors and IEEE headquarters for funding proposals',
                    'Organizing technical workshops on circuits, VLSI design, and embedded systems',
                    'Maintaining detailed financial records and preparing quarterly budget reports',
                    'Networking with industry professionals and academic researchers',
                    'Collaborating with other IEEE chapters for joint technical events',
                    'Managing vendor relationships and procurement for chapter activities'
                ]
            },
            {
                title: '🎯 Impact & Achievements',
                content: 'Successfully increased chapter participation by 40% through well-funded technical events. Secured additional funding from IEEE headquarters for flagship events. Implemented digital accounting system for better transparency and efficiency.'
            },
            {
                title: '🔧 Skills Developed',
                tags: ['Financial Management', 'Budget Planning', 'Leadership', 'Event Management', 'Stakeholder Communication', 'Team Coordination', 'Technical Knowledge']
            }
        ]
    },
    'nss': {
        title: 'NSS Volunteer',
        subtitle: 'National Service Scheme | 2023 - Present',
        sections: [
            {
                title: '🤝 Community Service',
                content: 'Actively involved in community outreach programs through the National Service Scheme, contributing to various social causes while developing strong interpersonal skills and social awareness. Participated in rural development initiatives, environmental campaigns, and educational outreach programs.'
            },
            {
                title: '🌍 Service Activities',
                list: [
                    'Participated in 15+ community service initiatives across Chennai',
                    'Organized and led volunteer activities in local communities and rural areas',
                    'Conducted educational workshops for underprivileged children',
                    'Participated in environmental awareness campaigns and tree plantation drives',
                    'Developed strong communication and organizational skills through community engagement',
                    'Demonstrated commitment to social responsibility and sustainable development',
                    'Coordinated with NGOs and local authorities for effective program implementation',
                    'Mentored new NSS volunteers in community service best practices'
                ]
            },
            {
                title: '💡 Personal Growth',
                content: 'NSS activities have significantly enhanced my empathy, communication skills, and understanding of social issues. The experience has taught me the importance of giving back to society and working collaboratively for community development.'
            }
        ]
    }
};

// Function to create and show detail modal
function showDetailModal(dataKey) {
    const data = detailsData[dataKey];
    if (!data) return;

    // Create modal HTML
    const modalHTML = `
        <div class="detail-modal active" id="detail-modal-${dataKey}">
            <div class="detail-content">
                <button class="detail-close" onclick="closeDetailModal('${dataKey}')">&times;</button>
                <div class="detail-header">
                    <h2 class="detail-title">${data.title}</h2>
                    <div class="detail-subtitle">${data.subtitle}</div>
                </div>
                ${data.sections.map(section => `
                    <div class="detail-section">
                        <h3>${section.title}</h3>
                        ${section.content ? `<p>${section.content}</p>` : ''}
                        ${section.list ? `
                            <ul class="detail-list">
                                ${section.list.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        ` : ''}
                        ${section.tags ? `
                            <div class="detail-tags">
                                ${section.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Close on backdrop click
    const modal = document.getElementById(`detail-modal-${dataKey}`);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDetailModal(dataKey);
        }
    });
}

// Function to close detail modal
function closeDetailModal(dataKey) {
    const modal = document.getElementById(`detail-modal-${dataKey}`);
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.detail-modal.active');
        if (activeModal) {
            const dataKey = activeModal.id.replace('detail-modal-', '');
            closeDetailModal(dataKey);
        }
    }
});
