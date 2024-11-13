// Adjusting to show just the duration, e.g., "5 months" or "2 years"
export const formatDuration = (value: number, unit: Intl.RelativeTimeFormatUnit, lang: string) => {
    const formatter = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
    const formatted = formatter.formatToParts(value, unit);

    return formatted.map(part => part.value).slice(1).join("");
};

// Format periods with internationalization
export const  formatPeriod = (lang: string, startDate: Date, endDate?: Date) => {
    // Format the date for the specified local
    const formatter = new Intl.DateTimeFormat(lang, {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    
    // Format start and end dates
    const formattedStartDate = formatter.format(startDate);
    if(endDate) {
        const formattedEndDate = formatter.format(endDate);
    
        // Generate the corresponding formulation according to locale
        if (lang.startsWith("fr")) {
            return `Du ${formattedStartDate} au ${formattedEndDate}`;
        } else if (lang.startsWith("en")) {
            return `From ${formattedStartDate} to ${formattedEndDate}`;
        } else {
            return `${formattedStartDate} - ${formattedEndDate}`;
        }
    } else {
        // Generate the corresponding formulation according to locale
        if (lang.startsWith("fr")) {
            return `Du ${formattedStartDate} à maintenant`;
        } else if (lang.startsWith("en")) {
            return `From ${formattedStartDate} to now`;
        } else {
            return `${formattedStartDate} - ...`;
        }
    }
}

export const formatDate = (lang: string, date: Date) => {
        // Format the date for the specified local
        const formatter = new Intl.DateTimeFormat(lang, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        return formatter.format(date);
}