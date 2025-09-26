// Contact Form Handling
    // const contactForm = document.getElementById('contactForm');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
            
    //         // Get form data
    //         const formData = new FormData(contactForm);
    //         const name = formData.get('name');
    //         const email = formData.get('email');
    //         const phone = formData.get('phone');
    //         const subject = formData.get('subject');
    //         const message = formData.get('message');

    //         // Basic validation
    //         if (!name || !email || !subject || !message) {
    //             showNotification('Please fill in all required fields.', 'error');
    //             return;
    //         }

    //         if (!isValidEmail(email)) {
    //             showNotification('Please enter a valid email address.', 'error');
    //             return;
    //         }

    //         // Simulate form submission
    //         showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            
    //         // Reset form
    //         contactForm.reset();
    //     });
    // }


    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
          publicKey: "UCde3ib0SGQcLtGRs",
        });
    })();

    window.onload = function() {
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
           
           
            // these IDs from the previous steps
            emailjs.sendForm('service_zeds4nd','template_l2718nj', this)
                .then(() => 
                    {
                    console.log('SUCCESS!');
                        //Simulate form submission
                        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                         // Reset form
           document.getElementById('contactForm').reset();
           
                }, (error) => {
                    console.log('FAILED...', error);
                });
        });

          
          
    }



    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });
    
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
    
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : '#10b981'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
    
        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0;
                    line-height: 1;
                }
                .notification-close:hover {
                    opacity: 0.7;
                }
            `;
            document.head.appendChild(style);
        }
    
        // Add to page
        document.body.appendChild(notification);
    
        // Handle close button
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }
    