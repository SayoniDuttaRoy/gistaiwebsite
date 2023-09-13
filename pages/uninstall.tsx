import { useEffect } from 'react';
import { useRouter } from 'next/router';

const UninstallPage = () => {
    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <iframe
                src="https://forms.gle/sGoH7yhtrHGRWkZt8"
                width="100%"
                height="100%"
                frameBorder={0}
                scrolling="no"
            >
                Loading…
            </iframe>
        </div>

    );
};

export default UninstallPage;
