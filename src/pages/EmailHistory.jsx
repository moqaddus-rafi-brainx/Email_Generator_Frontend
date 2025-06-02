import { useEffect,useState } from "react";


function EmailHistory() {
    
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('emailHistory') || '[]');
        setHistory(storedHistory);
    }, []);

    return (
        <div className="container">
    <h3>Email History</h3>
    <div>
        {history.map((email, idx) => (
            <pre key={idx} style={{whiteSpace: 'pre-wrap', marginBottom: 30}}>
                {email}
                <hr/>
            </pre>
         ))}
    </div>
  </div>

    )
}

export default EmailHistory;


