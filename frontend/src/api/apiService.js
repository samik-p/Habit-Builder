const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Your Django backend URL

/**
 * Generic function to make authenticated API requests.
 * @param {string} endpoint The API endpoint (e.g., 'users/register/', 'token/').
 * @param {string} method The HTTP method (e.g., 'POST', 'GET').
 * @param {object} [data=null] The request body data.
 * @param {string} [token=null] The JWT access token for authentication.
 * @returns {Promise<object>} The JSON response from the API.
 */
export const apiRequest = async (endpoint, method, data = null, token = null) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method: method,
        headers: headers,
        body: data ? JSON.stringify(data) : null,
    };

    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
        const responseData = await response.json();

        if (!response.ok) {
            // If response is not OK (e.g., 400, 401, 500), throw an error with the backend's message
            throw new Error(responseData.detail || JSON.stringify(responseData));
        }

        return responseData;
    } catch (error) {
        console.error(`API Error on ${method} ${endpoint}:`, error);
        throw error; // Re-throw to be caught by the calling component/context
    }
};

// Specific authentication related API calls
export const registerUser = (username, email, password) =>
    apiRequest('users/register/', 'POST', { username, email, password });

export const loginUser = (username, password) =>
    apiRequest('token/', 'POST', { username, password });

export const refreshToken = (refresh) =>
    apiRequest('token/refresh/', 'POST', { refresh });