function WineryRow({winery}) {
    return (
        <tr>
            <td>{winery.business}</td>
            <td class="rating">{winery.rating}</td>
        </tr>
    )
}

export default WineryRow;
