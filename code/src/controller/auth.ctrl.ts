import express from 'express'
import { supabase } from '../config/db';
import { login, logout, changeInfo } from '../routines/auth.exe';

const router = express.Router();

router.get('/', login)
router.get('/logout', logout)

export default router;