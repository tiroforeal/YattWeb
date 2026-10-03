export type VideoSource =
    | { kind: 'iframe'; src: string; }
    | { kind: 'file'; src: string; };

const FILE_EXT = /\.(mp4|webm|ogg|mov)(\?.*)?$/i;
export const resolveVideo = (rawUrl: string): VideoSource => {
    let u: URL;
    try {
        u = new URL(rawUrl.trim());
    } catch {
        return { kind: 'iframe', src: rawUrl };
    }
    const host = u.hostname.replace(/^www\./, '');
    const parts = u.pathname.split('/').filter(Boolean);

    // Youtube: watch?v=, youtu.be/, /shorts/, /embed/, /live/
    if (host === 'youtu.be' ||
        host.endsWith('youtube.com') ||
        host.endsWith('youtube-nocookie.come')) {
        const id =
            host === 'youtu.be' ? parts[0]
            : u.searchParams.get('v')
            ?? (['shorts', 'embed', 'live'].includes(parts[0]) ? parts[1] : undefined);
        if (id) {
            const t = u.searchParams.get('t') ?? u.searchParams.get('start');
            const start = t ? `?start=${parseInt(t, 10)}` : '';
            return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${id}${start}` };
        }
    }

    // Vimeo: vimeo.com/ID or player.vimeo.com/video/ID
    if (host.endsWith('vimeo.com')) {
        const id = parts.find((p) => /^\d+$/.test(p));
        if (id) return { kind: 'iframe', src: `https://player.vimeo.com/video/${id}` };
    }

    // Google Drive: /file/d/ID/view -> /preview, or open?id=ID
    if (host === 'drive.google.com') {
        const id = parts[0] === 'file' && parts[1] === 'd' ? parts[2] : u.searchParams.get('id');
        if (id) return { kind: 'iframe', src: `https://drive.google.com/file/d/${id}/preview` };
    }

    // Direct file links
    if (FILE_EXT.test(u.pathname)) return { kind: 'file', src: rawUrl };

    return { kind: 'iframe', src: rawUrl };
}