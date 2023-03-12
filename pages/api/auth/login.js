export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Bad request' });
    }

    // Add Database logic here
    if (email === 'admin@gmail.com' && password === 'admin') {
        return res.status(200).json({
            username: 'Admin',
            email: 'admin@gmail.com',
            token: 'dadqweqweqweqewe2132423asdq3432',
            type: 'admin',
        });
    }

    res.status(200).json({
        username: 'David',
        email: 'davidferflo2@gmail.com',
        token: '44444445678795daewqsd7896as47d',
        type: 'normal',
    });
}
