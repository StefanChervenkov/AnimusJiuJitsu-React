// Function to encode the email
export const encodeEmail = (email) => {
    return email.replace(/[.#$/[\]]/g, '_');
};

// Function to decode the email
export const decodeEmail = (encodedEmail) => {
    return encodedEmail.replace(/_/g, '.');
};

