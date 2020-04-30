import fetch from 'unfetch';

export const getAllUsers = () => fetch('/api/v1/users');