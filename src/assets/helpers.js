export const getCategoryById = id => {
    switch (id) {
        case 1:
            return 'polytics';

        case 2:
            return 'economics';

        case 3:
            return 'actions';

        case 4:
            return 'society';

        case 5:
            return 'kiev';

        case 6:
            return 'technologies';

        case 7:
            return 'science';

        case 8:
            return 'auto';

        case 9:
            return 'sport';

        case 10:
            return 'health';

        case 11:
            return 'showbusiness';

        case 12:
            return 'abroad';

        case 13:
            return 'curiosities';
    }
}

export const transformDateTime = (datetime) => {
    const convertToMyTimezone = (timestamp) => {
        const d = new Date();
        const n = d.getTimezoneOffset()
        return +timestamp + -n * 60 * 1000;
    };

    const timeUTC = Date.parse(datetime) + 1000 * 60 * 60 * 4;
    return new Date(
        convertToMyTimezone(timeUTC)
    ).toLocaleString().replace(',', '');
}