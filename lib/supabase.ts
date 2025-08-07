import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for our quiz responses table
export type QuizResponse = {
  id?: string;
  created_at?: string;
  question_id: number;
  question_text: string;
  answer_text: string;
  answer_value: string;
  completed: boolean;
  url_step: string;
  user_agent?: string;
  referrer?: string;
};

// Helper function to save quiz responses
export const saveQuizResponse = async (response: Omit<QuizResponse, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('quiz_responses')
      .insert([response]);

    if (error) {
      console.error('Error saving quiz response:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error saving quiz response:', error);
    return false;
  }
};
