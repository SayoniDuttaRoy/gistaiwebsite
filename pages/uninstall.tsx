import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This page will track user-id using utm tags.
const RedirectToForm = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the Google Form
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfCtelRW_SnUNrIE8SvSQRPmBF9j34J2WS5ci28Qewkr_TvvA/viewform";
    }, []);

    return (
        <div></div>
    );
};

export default RedirectToForm;
