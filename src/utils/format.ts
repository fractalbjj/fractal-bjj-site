export const formatDate = (
  d: Date,
  opts: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }
) => d.toLocaleDateString('en-GB', opts);

export const capitalise = (s: string) => s[0].toUpperCase() + s.slice(1);
