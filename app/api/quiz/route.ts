import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
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