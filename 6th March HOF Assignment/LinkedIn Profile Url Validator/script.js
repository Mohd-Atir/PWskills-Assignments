const validateLinkedInprofileUrl = (url) => {
    const pattern = /(https:\/\/www\.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30})/
    return pattern.test((url)) ? "Valid LinkedIn Profile URL" : "Invalid LinkedIn Profile URL"
}

console.log(validateLinkedInprofileUrl('https://www.linkedin.com/in/mohd-atir-a304b5263'))