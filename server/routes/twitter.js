import express from 'express';

const router = express.Router();

router.get('/auth', (req, res) => {
    console.log('call twitter/auth api');
});

export default router;
