export function formatDate(date){
    return date.toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"}) ;
} 