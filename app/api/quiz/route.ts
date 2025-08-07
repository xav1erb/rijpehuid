import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
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
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}