import { ref } from 'vue';
import { type User as SupabaseUser, createClient } from '@supabase/supabase-js';
import { type Database } from './supabase-types';
// Utilisation du type `User` de Supabase si disponible
export const user = ref<SupabaseUser | null>(null);

// Créez et configurez le client Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// @ts-ignore
globalThis.supabase = supabase;

// Fonction asynchrone pour récupérer l'utilisateur et s'abonner aux changements d'état d'authentification
async function fetchUser() {
  const { data } = await supabase.auth.getUser();
  user.value = data.user; // `data.user` sera de type `SupabaseUser | null`
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user ?? null; // Si `session?.user` est nul, `user` sera mis à `null`
  });
}

// Invoquer fetchUser directement pour initialiser l'état de l'utilisateur
fetchUser();
