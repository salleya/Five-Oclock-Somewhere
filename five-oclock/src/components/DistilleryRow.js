function DistilleryRow({distillery}) {
    return (
        <tr>
            <td>{distillery.business}</td>
            <td class="rating">{distillery.rating}</td>
        </tr>
    )
}

export default DistilleryRow;
