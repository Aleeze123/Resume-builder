var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fileToBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
var generateResumeHTML = function () { return __awaiter(_this, void 0, void 0, function () {
    var nameInput, aboutInput, emailInput, phoneInput, addressInput, institutionInput, degreeInput, graduationDateInput, skillsInput, companyInput, positionInput, startDateInput, endDateInput, responsibilitiesInput, photoInput, name, email, phone, address, photoBase64, _a, institution, degree, graduationDate, skills, company, position, startDate, endDate, responsibilities, about, emailPattern, phonePattern;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                nameInput = document.getElementById('name');
                aboutInput = document.getElementById('about-me');
                emailInput = document.getElementById('email');
                phoneInput = document.getElementById('phone');
                addressInput = document.getElementById('address');
                institutionInput = document.getElementById('institution');
                degreeInput = document.getElementById('degree');
                graduationDateInput = document.getElementById('graduation-date');
                skillsInput = document.getElementById('skills');
                companyInput = document.getElementById('company');
                positionInput = document.getElementById('position');
                startDateInput = document.getElementById('start-date');
                endDateInput = document.getElementById('end-date');
                responsibilitiesInput = document.getElementById('responsibilities');
                photoInput = document.getElementById('photo');
                // Basic validation
                if (!nameInput || !emailInput || !phoneInput || !addressInput ||
                    !institutionInput || !degreeInput || !graduationDateInput ||
                    !skillsInput || !companyInput || !positionInput ||
                    !startDateInput || !endDateInput || !responsibilitiesInput) {
                    alert('Please ensure all required fields are present.');
                    return [2 /*return*/, ''];
                }
                name = nameInput.value.trim();
                email = emailInput.value.trim();
                phone = phoneInput.value.trim();
                address = addressInput.value.trim();
                if (!(photoInput && ((_b = photoInput.files) === null || _b === void 0 ? void 0 : _b[0]))) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoInput.files[0])];
            case 1:
                _a = _c.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = '';
                _c.label = 3;
            case 3:
                photoBase64 = _a;
                institution = institutionInput.value.trim();
                degree = degreeInput.value.trim();
                graduationDate = graduationDateInput.value.trim();
                skills = skillsInput.value.trim();
                company = companyInput.value.trim();
                position = positionInput.value.trim();
                startDate = startDateInput.value.trim();
                endDate = endDateInput.value.trim();
                responsibilities = responsibilitiesInput.value.trim();
                about = aboutInput ? aboutInput.value.trim() : '';
                if (!name || !email || !phone || !address || !institution ||
                    !degree || !graduationDate || !skills || !company ||
                    !position || !startDate || !endDate || !responsibilities) {
                    alert('Please fill in all required fields.');
                    return [2 /*return*/, ''];
                }
                emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return [2 /*return*/, ''];
                }
                phonePattern = /^\d{11}$/;
                if (!phonePattern.test(phone)) {
                    alert('Please enter a valid phone number (11 digits).');
                    return [2 /*return*/, ''];
                }
                // Validate dates (simple check)
                if (new Date(startDate) > new Date(endDate)) {
                    alert('End date cannot be before the start date.');
                    return [2 /*return*/, ''];
                }
                // Generate resume HTML
                return [2 /*return*/, "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Interactive Resume Template</title>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css\" />\n  <style>\n      @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');\n\n      * { \n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n          font-family: 'Poppins', sans-serif;\n      }\n\n      body {\n          background: #f7f7f7;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          min-height: 100vh;\n          margin: 0;\n          width: 100%;\n      }\n\n      .container {\n          width: 100%;\n          max-width: 1000px;\n          background: #fff;\n          display: grid;\n          grid-template-columns: 1fr 2fr;\n          box-shadow: 0 35px 55px rgba(211, 68, 68, 0.1);\n          border-radius: 10px;\n          padding: 20px;\n          gap: 20px;\n          overflow: hidden;\n      }\n\n      .left_Side {\n          position: relative;\n          background: #000;\n          padding: 40px;\n          color: white;\n      }\n\n      .profileText {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding-bottom: 20px;\n          border-bottom: 1px solid rgba(179, 46, 46, 0.2);\n      }\n\n      .profileText .imgBx {\n          width: 200px;\n          height: 200px;\n          border-radius: 50%;\n          overflow: hidden;\n      }\n\n      .profileText .imgBx img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n      }\n\n      .profileText h2 {\n          color: #fff;\n          font-size: 1.5em;\n          margin-top: 20px;\n          text-transform: uppercase;\n          text-align: center;\n          font-weight: 600;\n      }\n\n      .contactInfo {\n          padding-top: 40px;\n      }\n\n      .contactInfo .title {\n          color: #fff;\n          text-transform: uppercase;\n          font-weight: 600;\n          letter-spacing: 1px;\n          margin-bottom: 20px;\n          background-color: #000;\n          padding: 10px;\n          border-radius: 5px;\n          text-align: center;\n      }\n\n      .contactInfo ul {\n          position: relative;\n          list-style: none;\n          padding: 0;\n      }\n\n      .contactInfo ul li {\n          margin: 10px 0;\n          display: flex;\n          align-items: center;\n      }\n\n      .contactInfo ul li .icon {\n          margin-right: 10px;\n      }\n\n      .right_Side {\n          padding: 40px;\n      }\n\n      .title2 {\n          color: #fff;\n          text-transform: uppercase;\n          letter-spacing: 1px;\n          margin-bottom: 10px;\n          background-color: #000; \n          padding: 10px;\n          border-radius: 5px;\n          text-align: center;\n      }\n\n      .about p {\n          color: #333;\n      }\n\n      .about .box {\n          display: flex;\n          flex-direction: row;\n          margin: 20px 0;\n      }\n\n      .about .box .year_company {\n          min-width: 150px;\n      }\n\n      .about .box .text h4 {\n          text-transform: uppercase;\n          color: black;\n          font-size: 16px;\n      }\n\n      .skills .box {\n          display: grid;\n          grid-template-columns: 150px 1fr;\n          margin-bottom: 20px;\n      }\n\n      .skills .box h4 {\n          text-transform: uppercase;\n          color: #2e3033;\n          font-weight: 500;\n      }\n\n      .skills .percent {\n          width: 100%;\n          height: 10px;\n          background: #c1baba;\n      }\n\n      .skills .percent div {\n          height: 100%;\n          background: black;\n      }\n\n      #toggle-skills {\n          display: inline-block;\n          background-color: #000;\n          color: white;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 5px;\n          font-size: 16px;\n          cursor: pointer;\n          margin-top: 20px;\n      }\n\n      #toggle-skills:hover {\n          background-color: #444;\n      }\n\n      @media only screen and (max-width: 768px) {\n          .container {\n              grid-template-columns: 1fr;\n              gap: 20px;\n              padding: 20px;\n          }\n      }\n\n      @media only screen and (max-width: 480px) {\n          .profileText h2 {\n              font-size: 1em;\n          }\n\n          .container {\n              padding: 10px;\n              width: 100%;\n              margin: 0;\n          }\n\n          .contactInfo ul li {\n              font-size: 14px;\n          }\n      }\n\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n      <!-- Left Side -->\n      <div class=\"left_Side\">\n          <div class=\"profileText\">\n              <div class=\"imgBx\">\n                    <!-- Photo -->\n                    ".concat(photoBase64 ? "<img src=\"".concat(photoBase64, "\" alt=\"Profile Photo\"/>") : '<p>No photo available</p>', "\n              </div>\n              <h2>").concat(name, "<br><span>").concat(position, "</span></h2>\n          </div>\n\n          <!-- Contact Info -->\n          <div class=\"contactInfo\">\n              <h3 class=\"title\"><i class=\"fa fa-phone\"></i> Contact</h3>\n              <ul>\n                  <li><span class=\"icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span><span class=\"text\">").concat(email, "</span></li>\n                  <li><span class=\"icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span><span class=\"text\">").concat(address, "</span></li>\n                  <li><span class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span><span class=\"text\">").concat(phone, "</span></li>\n              </ul>\n              <hr>\n          </div>\n\n          <!-- Education -->\n          <div class=\"contactInfo education\">\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> Education</h3>\n               <p><strong>Institution: ").concat(institution, "</strong></p>\n          <p>Degree: ").concat(degree, "</p>\n          <p>Graduation Date: ").concat(graduationDate, "</p>\n              <hr>\n          </div>\n      </div>\n\n      <!-- Right Side -->\n      <div class=\"right_Side\">\n          <!-- About Me Section -->\n          <div class=\"about\">\n              <h2 class=\"title2\"><i class=\"fa fa-user\"></i> About Me</h2>\n              <p>").concat(about, "</p>\n              <hr>\n          </div>\n\n          <!-- Experience Section -->\n          <div class=\"about\">\n              <h2 class=\"title2\"><i class=\"fa fa-briefcase\"></i> Experience</h2>\n              <div class=\"box\">\n                  <p><strong>").concat(company, "</strong> - ").concat(position, "</p>\n                  <p><strong>Start Date:</strong> ").concat(startDate, "</p>\n                  <p><strong>End Date:</strong> ").concat(endDate || 'Present', "</p>\n                  <p><strong>Responsibilities:</strong> ").concat(responsibilities, "</p>\n              </div>\n              <hr>\n          </div>\n\n          <!-- Skills Section -->\n          <div class=\"about skills\">\n              <h2 class=\"title2\"><i class=\"fa fa-cogs\"></i> Skills</h2>\n              <div id=\"skills-container\">\n                  <!-- Skill Example -->\n                  <div class=\"box\">\n                <p>").concat(skills, "</p>\n      </div>\n  </div>\n\n\n</body>\n</html>\n\n\n\n  ")];
        }
    });
}); };
// Function to populate form with resume data
var populateFormWithResumeData = function (resumeHTML) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var parser = new DOMParser();
    var doc = parser.parseFromString(resumeHTML, 'text/html');
    // Extract values from the HTML
    var name = ((_a = doc.querySelector('.resume-header h1')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var email = ((_b = doc.querySelector('.resume-header p:nth-of-type(1)')) === null || _b === void 0 ? void 0 : _b.textContent.replace('Email: ', '')) || '';
    var phone = ((_c = doc.querySelector('.resume-header p:nth-of-type(2)')) === null || _c === void 0 ? void 0 : _c.textContent.replace('Phone: ', '')) || '';
    var address = ((_d = doc.querySelector('.resume-header p:nth-of-type(3)')) === null || _d === void 0 ? void 0 : _d.textContent.replace('Address: ', '')) || '';
    var about = ((_e = doc.querySelector('.resume-section.about-me p')) === null || _e === void 0 ? void 0 : _e.textContent) || '';
    var institution = ((_f = doc.querySelector('.education-container p:nth-of-type(1)')) === null || _f === void 0 ? void 0 : _f.textContent.replace('Institution: ', '')) || '';
    var degree = ((_g = doc.querySelector('.education-container p:nth-of-type(2)')) === null || _g === void 0 ? void 0 : _g.textContent.replace('Degree: ', '')) || '';
    var graduationDate = ((_h = doc.querySelector('.education-container p:nth-of-type(3)')) === null || _h === void 0 ? void 0 : _h.textContent.replace('Graduation Date: ', '')) || '';
    var company = ((_j = doc.querySelector('.work-experience-container p strong')) === null || _j === void 0 ? void 0 : _j.textContent) || '';
    var position = ((_k = doc.querySelector('.work-experience-container p:nth-of-type(1)')) === null || _k === void 0 ? void 0 : _k.textContent.replace("".concat(company, " - "), '')) || '';
    var startDate = ((_l = doc.querySelector('.work-experience-container p:nth-of-type(2)')) === null || _l === void 0 ? void 0 : _l.textContent.replace('Start Date: ', '')) || '';
    var endDate = ((_m = doc.querySelector('.work-experience-container p:nth-of-type(3)')) === null || _m === void 0 ? void 0 : _m.textContent.replace('End Date: ', '')) || '';
    var responsibilities = ((_o = doc.querySelector('.work-experience-container p:nth-of-type(4)')) === null || _o === void 0 ? void 0 : _o.textContent.replace('Responsibilities: ', '')) || '';
    var skills = ((_p = doc.querySelector('.skills-container p')) === null || _p === void 0 ? void 0 : _p.textContent) || '';
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
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-resume');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    var editButton = document.getElementById('edit-resume');
    var downloadButton = document.getElementById('download-resume');
    var shareButton = document.getElementById('share-resume');
    var resumeForm = document.getElementById('resumeForm');
    var currentResumeHTML = '';
    generateButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateResumeHTML()];
                case 1:
                    currentResumeHTML = _a.sent();
                    if (currentResumeHTML) {
                        resumeContent.innerHTML = currentResumeHTML;
                        resumeOutput.classList.remove('hidden');
                        editButton.classList.remove('hidden');
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    editButton.addEventListener('click', function () {
        populateFormWithResumeData(currentResumeHTML);
        resumeOutput.classList.add('hidden');
        resumeForm.scrollIntoView();
    });
    downloadButton.addEventListener('click', function () {
        if (resumeContent) {
            var resumeBlob = new Blob([resumeContent.innerHTML], { type: 'text/html' });
            var url = URL.createObjectURL(resumeBlob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'resume.html';
            a.click();
            URL.revokeObjectURL(url);
        }
    });
    // Function to generate and set the URL
    function setupResumeButton(username) {
        var button = document.getElementById('url-resume');
        if (!button) {
            console.error('Button with id "url-resume" not found.');
            return;
        }
        var resumeUrl = "https://".concat(username, ".vercel.app/resume");
        button.setAttribute('data-url', resumeUrl);
        button.textContent = " Resume URL for ".concat(username);
        button.classList.remove('hidden');
        button.addEventListener('click', function () {
            window.open(resumeUrl, '_blank');
        });
    }
    var username = 'name';
    setupResumeButton(username);
    function setupShareButton(username) {
        var _this = this;
        var button = document.getElementById('share-resume');
        if (!button) {
            console.error('Button with id "share-resume" not found.');
            return;
        }
        // Generate the URL
        var resumeUrl = "https://".concat(username, ".vercel.app/resume");
        button.textContent = 'Share Resume via 🔗URL';
        button.classList.remove('hidden');
        button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.share) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.share({
                                title: 'My Resume',
                                text: 'Check out my resume!',
                                url: resumeUrl
                            })];
                    case 2:
                        _a.sent();
                        console.log('Share successful');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error sharing:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.log('Web Share API is not supported in this browser.');
                        window.open(resumeUrl, '_blank');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    }
    var user = 'name';
    setupShareButton(username);
    resumeForm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, generateResumeHTML()];
                case 1:
                    currentResumeHTML = _a.sent();
                    if (currentResumeHTML) {
                        resumeContent.innerHTML = currentResumeHTML;
                        resumeOutput.classList.remove('hidden');
                        editButton.classList.remove('hidden');
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
