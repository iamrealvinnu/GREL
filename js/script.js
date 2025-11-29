// Premium Scripts for Marss Elite

document.addEventListener('DOMContentLoaded', function() {

    // Premium Search Logic
    const mainSearchButton = document.getElementById('mainSearchButton');
    if (mainSearchButton) {
        mainSearchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const searchText = document.getElementById('searchBox').value.trim();
            const propertyType = document.getElementById('propertyType').value;
            const roomType = document.getElementById('roomType').value;
            
            // Construct the search URL
            const searchURL = `buy.html?search=${encodeURIComponent(searchText)}&propertyType=${encodeURIComponent(propertyType)}&roomType=${encodeURIComponent(roomType)}`;
            
            // Animate and redirect
            mainSearchButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Finding Properties...';
            setTimeout(() => {
                window.location.href = searchURL;
            }, 1000);
        });
    }

    // Premium Form Submissions
    const forms = document.querySelectorAll('#sellForm, #contactForm');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i>Transmitting...';
            submitBtn.disabled = true;
            setTimeout(() => {
                alert('Epistle Dispatched to Maestros! A virtuoso will resonate shortly.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        });
    });

    // Enhanced EMI Calculator
    const calculateEmiBtn = document.getElementById('calculateEmi');
    if (calculateEmiBtn) {
        calculateEmiBtn.addEventListener('click', function() {
            const loanAmount = parseFloat(document.getElementById('loanAmount').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value);
            const loanTenure = parseFloat(document.getElementById('loanTenure').value);
            const emiResult = document.getElementById('emiResult');
            const originalText = calculateEmiBtn.innerHTML;

            if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure) || loanAmount <= 0 || interestRate < 0 || loanTenure <= 0) {
                emiResult.textContent = 'Invalid Symphony';
                return;
            }

            calculateEmiBtn.innerHTML = '<i class="bi bi-calculator me-2"></i>Harmonizing...';
            setTimeout(() => {
                const monthlyInterestRate = (interestRate / 100) / 12;
                const numberOfPayments = loanTenure * 12;
                let emi;
                if (monthlyInterestRate === 0) {
                    emi = loanAmount / numberOfPayments;
                } else {
                    const power = Math.pow(1 + monthlyInterestRate, numberOfPayments);
                    emi = loanAmount * monthlyInterestRate * power / (power - 1);
                }
                emiResult.textContent = emi.toLocaleString('en-IN', { maximumFractionDigits: 0 });
                calculateEmiBtn.innerHTML = originalText;
            }, 1000);
        });
    }

    // Premium Scroll Animations
    const observerOptions = { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-slide-in-up, .animate-slide-in-left').forEach(el => {
        el.style.opacity = '0';
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Premium Heart Toggle
    document.querySelectorAll('.premium-heart').forEach(heart => {
        heart.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-heart');
            icon.classList.toggle('bi-heart-fill');
            icon.classList.toggle('text-danger');
            // Simulate wishlist add
            if (icon.classList.contains('bi-heart-fill')) {
                this.style.transform = 'scale(1.2)';
                setTimeout(() => this.style.transform = 'scale(1)', 200);
            }
        });
    });

    // Premium Range Update Labels
    document.querySelectorAll('.premium-range').forEach(range => {
        const labels = range.parentNode.querySelectorAll('span');
        range.addEventListener('input', function() {
            const value = this.value;
            // Update dynamic labels if needed
        });
    });

});

// Header transparency on scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.premium-header-fixed');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});