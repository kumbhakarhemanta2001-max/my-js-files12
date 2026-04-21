var qData = [
  { q: "‘Bharat Maritime Insurance Pool’ কোন সংস্থা অনুমোদন করেছে?", a: "Union Cabinet", opts: ["RBI", "Ministry of Shipping", "Union Cabinet", "IRDAI"] },

  { q: "‘Bharat Maritime Insurance Pool’-এর প্রধান উদ্দেশ্য কী?", a: "মেরিন বীমায় আত্মনির্ভরতা", opts: ["রপ্তানি বৃদ্ধি", "জাহাজ নির্মাণ", "মেরিন বীমায় আত্মনির্ভরতা", "বন্দর উন্নয়ন"] },

  { q: "ভারতের প্রথম 3D Semiconductor Unit কোথায় স্থাপিত হবে?", a: "Odisha", opts: ["Gujarat", "Tamil Nadu", "Odisha", "Karnataka"] },

  { q: "3D Semiconductor প্রযুক্তির মূল বৈশিষ্ট্য কী?", a: "Chip stacking (3D layering)", opts: ["শুধুমাত্র 2D layer", "Chip stacking (3D layering)", "শুধুমাত্র optical system", "Mechanical processing"] },

  { q: "Odisha-তে 3D Semiconductor Unit প্রকল্পে বিনিয়োগ কত?", a: "₹২,০০০ কোটি", opts: ["₹১,০০০ কোটি", "₹২,০০০ কোটি", "₹৫,০০০ কোটি", "₹১০,০০০ কোটি"] },

  { q: "PMGSY-III প্রকল্পটি কত সাল পর্যন্ত বাড়ানো হয়েছে?", a: "২০২৮", opts: ["২০২৬", "২০২৭", "২০২৮", "২০৩০"] },

  { q: "PMGSY-III প্রকল্পের মোট ব্যয় কত?", a: "₹৮৩,৯৭৭ কোটি", opts: ["₹৫০,০০০ কোটি", "₹৭৫,০০০ কোটি", "₹৮৩,৯৭৭ কোটি", "₹৯০,০০০ কোটি"] },

  { q: "PMGSY-III মূলত কোন ক্ষেত্রে উন্নয়ন ঘটায়?", a: "Rural road connectivity", opts: ["Urban transport", "Rail connectivity", "Rural road connectivity", "Air connectivity"] },

  { q: "‘Vishwa Sutra’ উদ্যোগটি কে শুরু করেছে?", a: "Ministry of Textiles", opts: ["Ministry of Commerce", "Ministry of Textiles", "NITI Aayog", "MSME Ministry"] },

  { q: "‘Vishwa Sutra’ উদ্যোগের প্রধান লক্ষ্য কী?", a: "ভারতীয় বস্ত্রকে বিশ্বে প্রচার", opts: ["IT export বৃদ্ধি", "কৃষি উন্নয়ন", "ভারতীয় বস্ত্রকে বিশ্বে প্রচার", "ব্যাংকিং সংস্কার"] },

  { q: "ভারতের প্রথম Petroglyph Conservation Park কোথায় স্থাপিত হচ্ছে?", a: "Ladakh", opts: ["Rajasthan", "Ladakh", "Himachal Pradesh", "Uttarakhand"] },

  { q: "Petroglyph বলতে কী বোঝায়?", a: "শিলা-চিত্র (rock carving/art)", opts: ["আধুনিক ভাস্কর্য", "শিলা-চিত্র (rock carving/art)", "ডিজিটাল গ্রাফিক্স", "মৃৎশিল্প"] },

  { q: "‘Abhay’ AI Tool-এর মূল কাজ কী?", a: "Online scam detection", opts: ["Banking automation", "Online scam detection", "Weather forecasting", "Defence simulation"] },

  { q: "‘Abhay’ AI Tool কোন প্রযুক্তির উপর ভিত্তি করে তৈরি?", a: "Artificial Intelligence & Machine Learning", opts: ["Blockchain", "IoT", "Artificial Intelligence & Machine Learning", "Cloud Computing"] },

  { q: "‘Abhay’ AI Tool প্রধানত কোন ক্ষেত্রে ব্যবহৃত হবে?", a: "Cyber Security", opts: ["Agriculture", "Cyber Security", "Education", "Transport"] },

  { q: "Femina Miss India World 2026-এর বিজয়ী কে?", a: "Sadhvi Satish Sail", opts: ["Manushi Chhillar", "Sini Shetty", "Sadhvi Satish Sail", "Aishwarya Rai"] },

  { q: "Femina Miss India World জয়ীরা সাধারণত কোন আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণ করে?", a: "Miss World", opts: ["Miss Universe", "Miss Earth", "Miss World", "Miss Asia"] },

  { q: "Prof. M.S. Swaminathan Award 2026 কে পেয়েছেন?", a: "Dr. Ch. Srinivasa Rao", opts: ["Dr. Ramesh Chand", "Dr. Ch. Srinivasa Rao", "Dr. M.S. Swaminathan", "Dr. Norman Borlaug"] },

  { q: "Prof. M.S. Swaminathan Award কোন ক্ষেত্রে প্রদান করা হয়?", a: "Agriculture & Research", opts: ["Space Research", "Agriculture & Research", "Literature", "Sports"] },

  { q: "Dr. Ch. Srinivasa Rao-কে এই পুরস্কার কোথায় প্রদান করা হয়?", a: "Hyderabad", opts: ["Delhi", "Mumbai", "Hyderabad", "Chennai"] }
]; 
var curQ = 0, userScore = 0, qTimer, secLeft = 15;

function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (curQ >= qData.length) { showResult(); return; }
    secLeft = 15;
    document.getElementById("timer-box").innerHTML = secLeft;
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;
    document.getElementById("main-q-text").innerHTML = qData[curQ].q;
    
    var optsHtml = "";
    qData[curQ].opts.forEach(opt => {
        optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });
    document.getElementById("main-opt-container").innerHTML = optsHtml;
    startTimer();
}

function startTimer() {
    clearInterval(qTimer);
    qTimer = setInterval(() => {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if (secLeft <= 0) { 
            clearInterval(qTimer);
            checkAnswer(null, ""); 
        }
    }, 1000);
}

function checkAnswer(btn, selected) {
    clearInterval(qTimer);
    var correct = qData[curQ].a.trim();
    var btns = document.getElementsByClassName("opt-btn");
    
    // সঠিক উত্তর হাইলাইট করা
    for (let b of btns) {
        b.disabled = true;
        if (b.innerText.trim() === correct) {
            b.classList.add("correct-ans");
        }
    }

    
    if (selected.trim() === correct) {
        userScore++;
        document.getElementById("score-val").innerText = userScore;
    } else if (btn) {
        btn.classList.add("wrong-ans");
    }

    curQ++;
    setTimeout(loadQuestion, 1500);
}

function showResult() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    
    var finalScore = userScore;
    var totalQ = qData.length;
    var feedback = "";
    var color = "";

    
    if (finalScore === totalQ) {
        feedback = "Outstanding! 🌟";
        color = "#388e3c";
    } else if (finalScore >= totalQ * 0.8) {
        feedback = "Very Good! 👏";
        color = "#0d47a1";
    } else if (finalScore >= totalQ * 0.5) {
        feedback = "Good! 👍";
        color = "#f57c00";
    } else {
        feedback = "Need More Practice! 📚";
        color = "#d32f2f";
    }

    document.getElementById("res-score").innerHTML = `
        <div style="color: ${color}; font-weight: bold; margin-bottom: 10px;">${feedback}</div>
        <div style="font-size: 2.5rem;">${finalScore} / ${totalQ}</div>
    `;
}
