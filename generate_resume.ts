const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
  };
  
  const generateResumeHTML = async (): Promise<string> => {
    // Get all inputs
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const aboutInput = document.getElementById('about-me') as HTMLTextAreaElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLTextAreaElement;
    const institutionInput = document.getElementById('institution') as HTMLInputElement;
    const degreeInput = document.getElementById('degree') as HTMLInputElement;
    const graduationDateInput = document.getElementById('graduation-date') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const companyInput = document.getElementById('company') as HTMLInputElement;
    const positionInput = document.getElementById('position') as HTMLInputElement;
    const startDateInput = document.getElementById('start-date') as HTMLInputElement;
    const endDateInput = document.getElementById('end-date') as HTMLInputElement;
    const responsibilitiesInput = document.getElementById('responsibilities') as HTMLTextAreaElement;
    const photoInput = document.getElementById('photo') as HTMLInputElement | null;
  
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
    const photoBase64 = photoInput && photoInput.files?.[0] ? await fileToBase64(photoInput.files[0]) : '';
  
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
  <title>Interactive Resume Template</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <style>
      @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

      * { 
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
      }

      body {
          background: #f7f7f7;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          width: 100%;
      }

      .container {
          width: 100%;
          max-width: 1000px;
          background: #fff;
          display: grid;
          grid-template-columns: 1fr 2fr;
          box-shadow: 0 35px 55px rgba(211, 68, 68, 0.1);
          border-radius: 10px;
          padding: 20px;
          gap: 20px;
          overflow: hidden;
      }

      .left_Side {
          position: relative;
          background: #333;
          padding: 40px;
          color: white;
      }

      .profileText {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(179, 46, 46, 0.2);
      }

      .profileText .imgBx {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
      }

      .profileText .imgBx img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }

      .profileText h2 {
          color: #fff;
          font-size: 1.5em;
          margin-top: 20px;
          text-transform: uppercase;
          text-align: center;
          font-weight: 600;
      }

      .contactInfo {
          padding-top: 40px;
      }

      .contactInfo .title {
          color: #fff;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 20px;
          background-color: #333;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
      }

      .contactInfo ul {
          position: relative;
          list-style: none;
          padding: 0;
      }

      .contactInfo ul li {
          margin: 10px 0;
          display: flex;
          align-items: center;
      }

      .contactInfo ul li .icon {
          margin-right: 10px;
      }

      .right_Side {
          padding: 40px;
      }

      .title2 {
          color: #333;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          background-color: #333;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
      }

      .about p {
          color: #333;
      }

      .about .box {
          display: flex;
          flex-direction: row;
          margin: 20px 0;
      }

      .about .box .year_company {
          min-width: 150px;
      }

      .about .box .text h4 {
          text-transform: uppercase;
          color: black;
          font-size: 16px;
      }

      .skills .box {
          display: grid;
          grid-template-columns: 150px 1fr;
          margin-bottom: 20px;
      }

      .skills .box h4 {
          text-transform: uppercase;
          color: #2e3033;
          font-weight: 500;
      }

      .skills .percent {
          width: 100%;
          height: 10px;
          background: #c1baba;
      }

      .skills .percent div {
          height: 100%;
          background: black;
      }

      /* Button Styling */
      button {
          padding: 12px 25px;
          font-size: 18px;
          color: #fff;
          background-color: #333;
          border: 2px solid #333;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
          outline: none;
      }

      button:hover {
          background-color: #444;
          transform: translateY(-2px);
          box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.6);
      }

      /* Share and Download Buttons */
      #download-resume,
      #share-resume {
          display: inline-block;
          padding: 14px 25px;
          font-size: 18px;
          color: #ffffff;
          background-color: #333;
          border: 2px solid #333;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      }

      #download-resume:hover,
      #share-resume:hover {
          background-color: #444;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }

      /* Mobile Responsiveness */
      @media only screen and (max-width: 768px) {
          .container {
              grid-template-columns: 1fr;
              padding: 10px;
          }

          .left_Side {
              padding: 30px;
          }

          .right_Side {
              padding: 30px;
          }

          .profileText h2 {
              font-size: 1.2em;
          }

          .contactInfo ul li {
              font-size: 14px;
          }

          .title2 {
              font-size: 18px;
          }

          button {
              width: 100%;
              padding: 16px;
              font-size: 16px;
          }

          #download-resume,
          #share-resume {
              width: 100%;
              padding: 16px;
              font-size: 16px;
          }
      }

      @media only screen and (max-width: 480px) {
          .profileText h2 {
              font-size: 1em;
          }

          .container {
              padding: 10px;
              width: 100%;
              margin: 0;
          }

          .contactInfo ul li {
              font-size: 14px;
          }
      }

  </style>
</head>
<body>
  <div class="container">
      <!-- Left Side -->
      <div class="left_Side">
          <div class="profileText">
              <div class="imgBx">
                    <!-- Photo -->
                    ${photoBase64 ? `<img src="${photoBase64}" alt="Profile Photo"/>` : '<p>No photo available</p>'}
              </div>
              <h2>${name}<br><span>${position}</span></h2>
          </div>

          <!-- Contact Info -->
          <div class="contactInfo">
              <h3 class="title"><i class="fa fa-phone"></i> Contact</h3>
              <ul>
                  <li><span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="text">${email}</span></li>
                  <li><span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="text">${address}</span></li>
                  <li><span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="text">${phone}</span></li>
              </ul>
              <hr>
          </div>

          <!-- Education -->
          <div class="contactInfo education">
              <h3 class="title"><i class="fa fa-graduation-cap"></i> Education</h3>
               <p><strong>Institution: ${institution}</strong></p>
          <p>Degree: ${degree}</p>
          <p>Graduation Date: ${graduationDate}</p>
              <hr>
          </div>
      </div>

      <!-- Right Side -->
      <div class="right_Side">
          <div class="about">
              <h3 class="title2">About Me</h3>
              <p>${about}</p>
          </div>

          <div class="skills">
              <h3 class="title2">Skills</h3>
              <div class="box">
                  <h4>Technical Skills</h4>
                  <div class="percent">
                      <div style="width: 90%;"></div>
                  </div>
              </div>
              <div class="box">
                  <h4>Soft Skills</h4>
               <p>${skills}</p>
              </div>
          </div>

          <button onclick="window.location.href='mailto:${email}'">Contact Me</button>

          <button onclick="downloadResume()">Download Resume</button>

          <button onclick="shareResume()">Share Resume</button>
      </div>
  </div>

 
</body>
</html>

  `
  };
  
  // Function to populate form with resume data
  const populateFormWithResumeData = (resumeHTML: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(resumeHTML, 'text/html');
    
    // Extract values from the HTML
    const name = doc.querySelector('.resume-header h1')?.textContent || '';
    const email = doc.querySelector('.resume-header p:nth-of-type(1)')?.textContent.replace('Email: ', '') || '';
    const phone = doc.querySelector('.resume-header p:nth-of-type(2)')?.textContent.replace('Phone: ', '') || '';
    const address = doc.querySelector('.resume-header p:nth-of-type(3)')?.textContent.replace('Address: ', '') || '';
    const about = doc.querySelector('.resume-section.about-me p')?.textContent || '';
    const institution = doc.querySelector('.education-container p:nth-of-type(1)')?.textContent.replace('Institution: ', '') || '';
    const degree = doc.querySelector('.education-container p:nth-of-type(2)')?.textContent.replace('Degree: ', '') || '';
    const graduationDate = doc.querySelector('.education-container p:nth-of-type(3)')?.textContent.replace('Graduation Date: ', '') || '';
    const company = doc.querySelector('.work-experience-container p strong')?.textContent || '';
    const position = doc.querySelector('.work-experience-container p:nth-of-type(1)')?.textContent.replace(`${company} - `, '') || '';
    const startDate = doc.querySelector('.work-experience-container p:nth-of-type(2)')?.textContent.replace('Start Date: ', '') || '';
    const endDate = doc.querySelector('.work-experience-container p:nth-of-type(3)')?.textContent.replace('End Date: ', '') || '';
    const responsibilities = doc.querySelector('.work-experience-container p:nth-of-type(4)')?.textContent.replace('Responsibilities: ', '') || '';
    const skills = doc.querySelector('.skills-container p')?.textContent || '';
    
    // Populate the form with these values
    (document.getElementById('name') as HTMLInputElement).value = name;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('phone') as HTMLInputElement).value = phone;
    (document.getElementById('address') as HTMLTextAreaElement).value = address;
    (document.getElementById('institution') as HTMLInputElement).value = institution;
    (document.getElementById('degree') as HTMLInputElement).value = degree;
    (document.getElementById('graduation-date') as HTMLInputElement).value = graduationDate;
    (document.getElementById('skills') as HTMLTextAreaElement).value = skills;
    (document.getElementById('company') as HTMLInputElement).value = company;
    (document.getElementById('position') as HTMLInputElement).value = position;
    (document.getElementById('start-date') as HTMLInputElement).value = startDate;
    (document.getElementById('end-date') as HTMLInputElement).value = endDate;
    (document.getElementById('responsibilities') as HTMLTextAreaElement).value = responsibilities;
    (document.getElementById('about-me') as HTMLTextAreaElement).value = about;
   
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;
    const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
    const downloadButton = document.getElementById('download-resume') as HTMLButtonElement ;
   const shareButton = document.getElementById('share-resume') as HTMLFormElement;
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
  
    let currentResumeHTML: string = '';
  
    generateButton.addEventListener('click', async () => {
        currentResumeHTML = await generateResumeHTML();
        if (currentResumeHTML) {
            resumeContent.innerHTML = currentResumeHTML;
            resumeOutput.classList.remove('hidden');
            editButton.classList.remove('hidden');
        }
    });
  
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
  // Function to generate and set the URL
  function setupResumeButton(username: string): void {
    const button = document.getElementById('url-resume') as HTMLButtonElement;
    
    if (!button) {
        console.error('Button with id "url-resume" not found.');
        return;
    }
  
  
    const resumeUrl = `https://${username}.vercel.app/resume`;
  
    button.setAttribute('data-url', resumeUrl);
  
  
    button.textContent = ` Resume URL for ${username}`;
    
   
    button.classList.remove('hidden');
  
   
    button.addEventListener('click', () => {
        window.open(resumeUrl, '_blank');
    });
  }
  
  
  const username = 'name'; 
  setupResumeButton(username);
  
  
  function setupShareButton(username: string): void {
    const button = document.getElementById('share-resume') as HTMLButtonElement;
    
    if (!button) {
        console.error('Button with id "share-resume" not found.');
        return;
    }
  
    // Generate the URL
    const resumeUrl = `https://${username}.vercel.app/resume`;
    
   
    button.textContent = 'Share Resume via 🔗URL';
    
   
    button.classList.remove('hidden');
  
  
    button.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'My Resume',
                    text: 'Check out my resume!',
                    url: resumeUrl
                });
                console.log('Share successful');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.log('Web Share API is not supported in this browser.');
            
            window.open(resumeUrl, '_blank'); 
        }
    });
  }
  
  const user = 'name'; 
  setupShareButton(username);
  
    resumeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        currentResumeHTML = await generateResumeHTML();
        if (currentResumeHTML) {
            resumeContent.innerHTML = currentResumeHTML;
            resumeOutput.classList.remove('hidden');
            editButton.classList.remove('hidden');
  
        }
    });
  });