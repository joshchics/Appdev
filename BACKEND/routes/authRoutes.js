import express from 'express';
import { register, login, getCurrentUser } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getCurrentUser);

// Simple verification route
router.post('/verify', (req, res) => {
    const { studentId, studentName } = req.body;
    
    // Basic validation
    if (!studentId || !studentName) {
        return res.status(400).json({ error: 'Student ID and Name are required' });
    }
    
    // In a real application, you would verify against a database
    res.json({ 
        success: true, 
        message: 'Verification successful',
        user: { studentId, studentName }
    });
});

export default router; 