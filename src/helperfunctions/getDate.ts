export const getDate = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const day = now.getDay().toString().padStart(2, '0');

    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

export const formatDate = (date: string) =>{
 return date.replace('T', ' ')
};

export const compareDates = (givenDate: string) => {
    const date = new Date(givenDate);
    const now = new Date(getDate());

   // const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000);
   const twentySecondsAgo = new Date(now.getTime() - 20 * 1000);

    if (date < twentySecondsAgo) {
       return true
    } else {
        return false
    }
}