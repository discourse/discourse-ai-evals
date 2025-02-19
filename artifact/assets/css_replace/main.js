class Presentation {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 10;
    this.slides = document.querySelectorAll('.slide');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.currentDisplay = document.querySelector('.current');
    this.initialize();
  }

  initialize() {
    this.bindEvents();
    this.updateClock();
    this.updateProgress();
    document.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
  }

  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.previousSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    document.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        this.nextSlide();
      }
    });
  }

  updateClock() {
    const clock = document.querySelector('.digital-clock');
    setInterval(() => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }, 1000);
  }

  updateProgress() {
    this.currentDisplay.textContent = this.currentSlide;
  }

  goToSlide(number) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[number - 1].classList.add('active');
    this.currentSlide = number;
    this.updateProgress();
    this.playTransitionSound();
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  previousSlide() {
    if (this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  handleKeyNavigation(e) {
    switch(e.key) {
      case 'ArrowRight':
      case 'Space':
        this.nextSlide();
        break;
      case 'ArrowLeft':
        this.previousSlide();
        break;
    }
  }

  playTransitionSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1QOi0hGBEPCwQBAQMFCg8YIjA6RlNfaXN8gIKCgn9/fn19fX19fn+BgoSGhVpRRjYoIRkSDwwHAgEBAwUJDhckLTY/S1djaXN5foGDg4J/f35+fn5+f4CBg4WGhlxSTzsuJBwUEQ0IBwMCAQIEBwwRGiUuOEVQW2Vud3yAgoKCgIB/f39/f4CBgoSFg35XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d9gYKCgoGAf39/f4CAgYOEhYN+WE9HMykiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fYGCgoKBgH9/f3+AgIGDhIWDflhPRzMpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd32BgoKCgYB/f39/gICBg4SFg35XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d9gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn1XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d8gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn1XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d8gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn1XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d8gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn1XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d8gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn1XTkYyKSIbFBEOCQYDAgECBAYLEBgkLTdDT1pmb3d8gYKCgoGAf39/f4CAgYOEhIJ9V05GMikiGxQRDgkGAwIBAgQGCxAYJC03Q09aZm93fIGCgoKBgH9/f3+AgIGDhISCfVdORjIpIhsUEQ4JBgMCAQIEBgsQGCQtN0NPWmZvd3yBgoKCgYB/f39/gICBg4SEgn0=');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const presentation = new Presentation();
});