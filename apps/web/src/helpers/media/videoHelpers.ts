export const checkDriveEmbedUrl = (url: string): string => {
    if (url.includes('drive.google.com')) {
        return url.replace(/\/view.*$/, '/preview');
    }
    return url;
}