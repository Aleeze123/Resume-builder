"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
const generateResumeHTML = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Get all inputs
    const nameInput = document.getElementById('name');
    const aboutInput = document.getElementById('about-me');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const institutionInput = document.getElementById('institution');
    const degreeInput = document.getElementById('degree');
    const graduationDateInput = document.getElementById('graduation-date');
    const skillsInput = document.getElementById('skills');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const responsibilitiesInput = document.getElementById('responsibilities');
    const photoInput = document.getElementById('photo');
    // Basic validation
    if (!nameInput || !emailInput || !phoneInput || !addressInput ||
        !institutionInput || !degreeInput || !graduationDateInput ||
        !skillsInput || !companyInput || !positionInput ||
        !startDateInput || !endDateInput || !responsibilitiesInput) {
        alert('Please ensure all required fields are present.');
        return '';
    }
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const photoBase64 = photoInput && ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? yield fileToBase64(photoInput.files[0]) : '';
    const institution = institutionInput.value.trim();
    const degree = degreeInput.value.trim();
    const graduationDate = graduationDateInput.value.trim();
    const skills = skillsInput.value.trim();
    const company = companyInput.value.trim();
    const position = positionInput.value.trim();
    const startDate = startDateInput.value.trim();
    const endDate = endDateInput.value.trim();
    const responsibilities = responsibilitiesInput.value.trim();
    const about = aboutInput ? aboutInput.value.trim() : '';
    if (!name || !email || !phone || !address || !institution ||
        !degree || !graduationDate || !skills || !company ||
        !position || !startDate || !endDate || !responsibilities) {
        alert('Please fill in all required fields.');
        return '';
    }
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return '';
    }
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (11 digits).');
        return '';
    }
    // Validate dates (simple check)
    if (new Date(startDate) > new Date(endDate)) {
        alert('End date cannot be before the start date.');
        return '';
    }
    // Generate resume HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
            <style>
                /* Add your CSS styles here */
            </style>
        </head>
        <body>
            <div class="resume-container">
                <div class="resume-header">
                    ${photoBase64 ? `<img src="${photoBase64}" alt="Photo"/>` : '<p>No photo available</p>'}
                    <h1>${name}</h1>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Address: ${address}</p>
                </div>
                <div class="resume-section about-me">
                    <h2>About</h2>
                    <p>${about}</p>
                </div>
                <div class="resume-section education-container">
                    <h2>Education</h2>
                    <p><strong>Institution: ${institution}</strong></p>
                    <p>Degree: ${degree}</p>
                    <p>Graduation Date: ${graduationDate}</p>
                </div>
                <div class="resume-section work-experience-container">
                    <h2>Work Experience</h2>
                    <p><strong>${company}</strong> - ${position}</p>
                    <p>Start Date: ${startDate}</p>
                    <p>End Date: ${endDate || 'Present'}</p>
                    <p>Responsibilities: ${responsibilities}</p>
                </div>
                <div class="resume-section skills-container">
                    <h2>Skills</h2>
                    <p>${skills}</p>
                </div>
            </div>
        </body>
        </html>
    `;
});
// Function to populate form with resume data
const populateFormWithResumeData = (resumeHTML) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const parser = new DOMParser();
    const doc = parser.parseFromString(resumeHTML, 'text/html');
    // Extract values from the HTML
    const name = ((_a = doc.querySelector('.resume-header h1')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    const email = ((_b = doc.querySelector('.resume-header p:nth-of-type(1)')) === null || _b === void 0 ? void 0 : _b.textContent.replace('Email: ', '')) || '';
    const phone = ((_c = doc.querySelector('.resume-header p:nth-of-type(2)')) === null || _c === void 0 ? void 0 : _c.textContent.replace('Phone: ', '')) || '';
    const address = ((_d = doc.querySelector('.resume-header p:nth-of-type(3)')) === null || _d === void 0 ? void 0 : _d.textContent.replace('Address: ', '')) || '';
    const about = ((_e = doc.querySelector('.resume-section.about-me p')) === null || _e === void 0 ? void 0 : _e.textContent) || '';
    const institution = ((_f = doc.querySelector('.education-container p:nth-of-type(1)')) === null || _f === void 0 ? void 0 : _f.textContent.replace('Institution: ', '')) || '';
    const degree = ((_g = doc.querySelector('.education-container p:nth-of-type(2)')) === null || _g === void 0 ? void 0 : _g.textContent.replace('Degree: ', '')) || '';
    const graduationDate = ((_h = doc.querySelector('.education-container p:nth-of-type(3)')) === null || _h === void 0 ? void 0 : _h.textContent.replace('Graduation Date: ', '')) || '';
    const company = ((_j = doc.querySelector('.work-experience-container p strong')) === null || _j === void 0 ? void 0 : _j.textContent) || '';
    const position = ((_k = doc.querySelector('.work-experience-container p:nth-of-type(1)')) === null || _k === void 0 ? void 0 : _k.textContent.replace(`${company} - `, '')) || '';
    const startDate = ((_l = doc.querySelector('.work-experience-container p:nth-of-type(2)')) === null || _l === void 0 ? void 0 : _l.textContent.replace('Start Date: ', '')) || '';
    const endDate = ((_m = doc.querySelector('.work-experience-container p:nth-of-type(3)')) === null || _m === void 0 ? void 0 : _m.textContent.replace('End Date: ', '')) || '';
    const responsibilities = ((_o = doc.querySelector('.work-experience-container p:nth-of-type(4)')) === null || _o === void 0 ? void 0 : _o.textContent.replace('Responsibilities: ', '')) || '';
    const skills = ((_p = doc.querySelector('.skills-container p')) === null || _p === void 0 ? void 0 : _p.textContent) || '';
    // Populate the form with these values
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    document.getElementById('address').value = address;
    document.getElementById('institution').value = institution;
    document.getElementById('degree').value = degree;
    document.getElementById('graduation-date').value = graduationDate;
    document.getElementById('skills').value = skills;
    document.getElementById('company').value = company;
    document.getElementById('position').value = position;
    document.getElementById('start-date').value = startDate;
    document.getElementById('end-date').value = endDate;
    document.getElementById('responsibilities').value = responsibilities;
    document.getElementById('about-me').value = about;
};
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume');
    const resumeOutput = document.getElementById('resume-output');
    const resumeContent = document.getElementById('resume-content');
    const editButton = document.getElementById('edit-resume');
    const downloadButton = document.getElementById('download-resume');
    const resumeForm = document.getElementById('resumeForm');
    let currentResumeHTML = '';
    generateButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        currentResumeHTML = yield generateResumeHTML();
        if (currentResumeHTML) {
            resumeContent.innerHTML = currentResumeHTML;
            resumeOutput.classList.remove('hidden');
            editButton.classList.remove('hidden');
        }
    }));
    editButton.addEventListener('click', () => {
        populateFormWithResumeData(currentResumeHTML);
        resumeOutput.classList.add('hidden');
        resumeForm.scrollIntoView();
    });
    downloadButton.addEventListener('click', () => {
        if (resumeContent) {
            const resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
            const url = URL.createObjectURL(resumeBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'resume.html';
            a.click();
            URL.revokeObjectURL(url);
        }
    });
    resumeForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        currentResumeHTML = yield generateResumeHTML();
        if (currentResumeHTML) {
            resumeContent.innerHTML = currentResumeHTML;
            resumeOutput.classList.remove('hidden');
            editButton.classList.remove('hidden');
        }
    }));
});
