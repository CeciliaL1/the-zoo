export const getFeedDate = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const day = now.getDay().toString().padStart(2, '0');

    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}` ;
}

export const formatDate = (date: string) =>{
 return date.replace('T', ' ').replace(/:[^:]*$/, '')
}