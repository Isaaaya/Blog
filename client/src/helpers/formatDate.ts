
export function formatDate(createdAt: Date): string {
    const date = new Date(createdAt);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = months[month];

    return `${formattedDay} ${formattedMonth} ${year}`;
}