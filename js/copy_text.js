'use strict'

function copy_text() {
    navigator.clipboard.writeText(document.getElementsByClassName('contacts__email_email')[0].textContent);
    document.getElementsByClassName('contacts__email_copied')[0].classList.toggle('hidden');
    
    return;
}