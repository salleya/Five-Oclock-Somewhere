import DistilleryRow from '../components/DistilleryRow';


function DistilleryTable({distilleries}) {

    return (
        <table>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {distilleries.map((distillery, i) => <DistilleryRow distillery={distillery} key={i}/>)}
            </tbody>
                
        </table>
    );
}

export default DistilleryTable;
