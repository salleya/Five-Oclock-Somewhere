import WineryRow from '../components/WineryRow';


function WineryTable({wineries}) {

    return (
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {wineries.map((winery, i) => <WineryRow winery={winery} key={i}/>)}
            </tbody>
                
        </table>
    );
}

export default WineryTable;
