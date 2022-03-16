function BreweryRow({ result }) {
    return (
        <tr>
            <td>{result.business}</td>
            <td class="rating">{result.rating}</td>
        </tr>
    )
}

export default BreweryRow;
