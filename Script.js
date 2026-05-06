document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("adChart");
    emailjs.init("0BmNScuarahJffH9p");
    if (typeof gsap !== "undefined") {
  gsap.from(".contact-card", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1
  });
}
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20"],
      datasets: [{
        label: "Revenue Growth",
        data: [20000, 50000, 80000, 150000, 300000],
        borderColor: "#ff7a00",
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      },
      scales: {
        x: {
          ticks: { color: "white" }
        },
        y: {
          ticks: { color: "white" }
        }
      }
    }
  });
}
  // COUNTERS
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    let count = 0;
    const target = +counter.getAttribute("data-target");

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });

  // GSAP (only if loaded)
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });

    gsap.to("body", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
  }

  // MODAL (FIXED)
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("bookBtn");
  const closeBtn = document.querySelector(".close");

  if (btn && modal) {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
const userData = {
  name: "Aadi Kashyap",
  email: "aadikashyap417@gmail.con",
  phone: "917017137753",
  address: "Greater Noida"
};

// Inject data
document.getElementById("userName").innerText = userData.name;


function openCaseStudy() {
  document.getElementById("caseModal").style.display = "block";
}

function closeCaseStudy() {
  document.getElementById("caseModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("0BmNScuarahJffH9p");

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      successMsg.innerText = "Sending...";

      emailjs.sendForm(
        "service_o8k3c1u",
        "template_ag5ujfr",
        this
      ).then(() => {
        successMsg.innerText = "✅ Request sent successfully!";
        form.reset();
      }).catch((error) => {
        successMsg.innerText = "❌ Failed to send";
        console.log(error);
      });
    });
  }

});

function showSuccess() {
  const popup = document.createElement("div");
  popup.innerText = "🚀 Request Sent Successfully!";
  
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.right = "20px";
  popup.style.background = "#00ff99";
  popup.style.color = "#000";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "10px";
  popup.style.fontWeight = "bold";
  popup.style.zIndex = "9999";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
  showSuccess();
}

function resize() {
  const card = canvas.parentElement;

  canvas.width = card.clientWidth;
  canvas.height = 100; // FIXED HEIGHT (prevents dropping/stretching)
}