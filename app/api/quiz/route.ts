import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Only create supabase client if credentials are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Check if Supabase is configured
    if (!supabase) {
      console.log('Supabase not configured, skipping data save');
      return NextResponse.json({ success: true, message: 'Supabase not configured' });
    }
    
    // Save to Supabase
    const { error } = await supabase
      .from('quiz_responses')
      .insert({
        age: data.age,
        frustration: data.frustration,
        skin_type: data.skinType,
        skin_condition: data.skinCondition,
        budget: data.budget,
        referrer: data.referrer || '',
        completed: true
      });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}