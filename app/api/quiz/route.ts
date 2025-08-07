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
    
    // Validate required data
    if (!data || typeof data !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
    }
    
    // Check if Supabase is configured
    if (!supabase) {
      console.log('Supabase not configured, skipping data save');
      return NextResponse.json({ success: true, message: 'Supabase not configured' });
    }
    
    // Prepare the quiz response data
    const quizResponse = {
      age: data.age || null,
      frustration: data.frustration || null,
      skin_type: data.skinType || null,
      skin_condition: data.skinCondition || null,
      budget: data.budget || null,
      referrer: data.referrer || null,
      completed: data.completed || false
    };

    // Save to Supabase
    const { data: insertedData, error } = await supabase
      .from('quiz_responses')
      .insert(quizResponse)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message);
    }

    console.log('Quiz response saved successfully:', insertedData?.[0]?.id);
    return NextResponse.json({ success: true, id: insertedData?.[0]?.id });
  } catch (error) {
    console.error('Failed to save quiz response:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}