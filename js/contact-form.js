// Contact Form Handler
// Uses Formspree to handle form submissions

async function createGitHubIssue(name, email, subject, message) {
    // Formspree form ID
    const FORMSPREE_FORM_ID = 'myznwqlw';
    
    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject || 'Сообщение с сайта',
                message: message
            })
        });
        
        if (!response.ok) {
            throw new Error(`Ошибка отправки: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Form submitted successfully via Formspree', data);
        return { success: true };
        
    } catch (error) {
        console.error('Failed to submit form:', error);
        throw error;
    }
}

// Make function available globally
window.createGitHubIssue = createGitHubIssue;
