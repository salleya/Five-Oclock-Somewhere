import BreweryRow from '../components/BreweryRow';


function BreweryTable({ results }) {

    return (
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {results.map((result, i) => <BreweryRow result={result} key={i}/>)}
            </tbody>
                
        </table>
    );
}

export default BreweryTable;
