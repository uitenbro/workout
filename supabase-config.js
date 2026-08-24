// Add the public Supabase project values after creating the project.
// Never place a Supabase service-role key in this file.
var supabaseConfig = {
    url: 'https://pbazveqwocqlttihmlma.supabase.co',
    anonKey: 'sb_publishable_y2p_G5iqy5oTYA27G65gfQ_hq-5I5GD'
};

function isSupabaseConfigured() {
    return supabaseConfig.url !== '' && supabaseConfig.anonKey !== '';
}
