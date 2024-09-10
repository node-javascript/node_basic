import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "null";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "null";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };