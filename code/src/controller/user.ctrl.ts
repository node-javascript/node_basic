import express from 'express'
import { supabase } from '../config/db';
import { userAll, userOne } from '../routines/user.exe';

const router = express.Router();

router.get('/', userAll)
router.get('/:id', userOne)

export default router;