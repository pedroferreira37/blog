type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, style: DateStyle = 'medium', locales: string = 'pt-BR') {
	return Intl.DateTimeFormat(locales, { dateStyle: style }).format(new Date(date));
}
