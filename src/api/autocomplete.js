export function matchService(state, value) {
    return (
        state.label.indexOf(value.toLowerCase()) !== -1
    )
}
export function sortServices(a, b, value) {
    const aLower = a.label.toLowerCase()
    const bLower = b.label.toLowerCase()
    const valueLower = value.toLowerCase()
    const queryPosA = aLower.indexOf(valueLower)
    const queryPosB = bLower.indexOf(valueLower)
    if (queryPosA !== queryPosB) {
        return queryPosA - queryPosB
    }
    return aLower < bLower ? -1 : 1
}