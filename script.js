// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const menuIcon = document.getElementById("menuIcon")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    if (mobileNav.classList.contains("active")) {
      menuIcon.className = "fas fa-times"
    } else {
      menuIcon.className = "fas fa-bars"
    }
  })

  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileNav.querySelectorAll(".nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      menuIcon.className = "fas fa-bars"
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
      mobileNav.classList.remove("active")
      menuIcon.className = "fas fa-bars"
    }
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  // Show loading state
  submitBtn.classList.add("loading")
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Reset form
    this.reset()

    // Reset button
    submitBtn.classList.remove("loading")
    submitBtn.textContent = originalText
    submitBtn.disabled = false

    // Show success message
    showNotification("Message sent successfully! I'll get back to you soon.", "success")
  }, 2000)
})

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === "success" ? "#10b981" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  // Add to page
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 5000)
}

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".experience-item, .education-item, .publication-item, .grant-item, .project-item, .skill-category",
  )

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })
})

// Add active state to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add CSS for active nav links
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: #3b82f6 !important;
        font-weight: 600;
    }
`
document.head.appendChild(style)
