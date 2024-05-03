export function extractTime(dateString) {
    const date = new Date(dateString);
    const currentDate = new Date();
    
    const hours = date.getHours();
    const minutes = padZero(date.getMinutes());

    // Calculate the time difference in milliseconds
    const timeDiff = Math.abs(currentDate - date);
    
    // Calculate the difference in hours
    const hoursDiff = timeDiff / (1000 * 60 * 60);

    if (hoursDiff >= 24) {
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1); // Month is zero-based
        const day = padZero(date.getDate());

        return `${year}-${month}-${day} ${getStandardHours(hours)}:${minutes}`;
    } else {
        return `${getStandardHours(hours)}:${minutes} ${getPeriod(hours)}`;
    }
}

// Helper function to convert hours to standard 12-hour format
function getStandardHours(hours) {
    // Convert to 12-hour format
    let standardHours = hours % 12;
    // Handle midnight and noon
    standardHours = standardHours === 0 ? 12 : standardHours;
    return standardHours;
}

// Helper function to determine AM or PM
function getPeriod(hours) {
    return hours < 12 ? 'AM' : 'PM';
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}
