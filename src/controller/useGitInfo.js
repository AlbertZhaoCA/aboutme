import { useState, useEffect } from 'react';

function useGetGitInfo() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [gitInfo, setGitInfo] = useState(null);
    

    useEffect(() => {
        fetch(`https://${process.env.REACT_APP_CAT_API_URL}/gitinfo`).
        then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).
        then(data => {
            setGitInfo(data);
            setLoading(false);
        }).
        /*
        it is awful, i know, but leaving exception 
        handling at the end is also a good choice,:)
        */
        catch(error => {
            setGitInfo(null);
            setLoading(false);
            setError(true);
        });
    }, []);

    return {error, loading, gitInfo };
}
export { useGetGitInfo }; 